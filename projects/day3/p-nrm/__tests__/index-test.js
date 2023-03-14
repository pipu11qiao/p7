const { exec } = require("child_process");

test("p-nrm -v", () => {
  const { name, version } = require("../package.json");
  exec("node bin/index.js -v", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    expect(stdout).toContain(`${name} v${version}`);
  });
});
