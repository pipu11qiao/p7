#!/usr/bin/env node
let argv = process.argv;
let { name, version } = require("../package.json");
const path = require("path");
const fs = require("fs");

const file2obj = (filePath) => {
  filePath = path.resolve(__dirname, filePath);
  return JSON.parse(fs.readFileSync(filePath).toString());
};
const obj2file = (dataObj) => {
  fs.writeFileSync(
    path.resolve(__dirname, "./data.json"),
    JSON.stringify(dataObj)
  );
};

let dataObj = file2obj("./data.json");
let { data } = dataObj;

if (argv.indexOf("-v") > -1) {
  console.log(`${name} v${version}`);
} else if (argv.indexOf("ls") > -1) {
  const { exec } = require("child_process");
  exec(`npm config get registry`, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err.message}`);
      retrurn;
    }
    data.forEach((item) => {
      for (let key in item) {
        let str;
        if (item[key].trim() === stdout.trim()) {
          str = "*";
        } else {
          str = " ";
        }
        console.log(`${str}${key} => ${item[key]}`);
      }
    });
  });
} else if (argv.indexOf("add") > -1) {
  let index = argv.indexOf("add");

  let key = argv[index + 1];
  let value = argv[index + 2];
  let res = dataObj.data.filter((item) => !!item[key]);
  if (res.length === 0) {
    dataObj.data.push({
      [key]: value,
    });
  } else {
    res[0][key] = value;
  }
  obj2file(dataObj);
  console.log("success add registry");
} else if (argv.indexOf("del") > -1) {
  let index = argv.indexOf("del");
  let key = argv[index + 1];
  dataObj.data = data.filter((item) => !item[key]);
  obj2file(dataObj);
  console.log("success deleted registry");
} else if (argv.indexOf("use") > -1) {
  let index = argv.indexOf("use");
  let key = argv[index + 1];

  let res = dataObj.data.filter((item) => !!item[key]);
  if (res.length > 0) {
    const { exec } = require("child_process");
    exec(`npm config set registry ${res[0][key]}`, (err, stdout, stderr) => {
      if (err) {
        console.log(`set registry error: ${err.message}`);
        retrurn;
      }
      console.log(`set registry success: ${res[0][key]}`);
    });
  } else {
    console.log(`${key} is not in p-nrm list`);
  }
}else if(process.argv.indexOf('-h')!=-1){
  console.log(`
  add: p-nrm add key value can add registry address to list
  del: p-nrm del key can delete key of list
  ls: p-nrm ls can show all list
  clear: p-nrm clear can clear list
  -v: p-nrm -v can show version
  `)
}
