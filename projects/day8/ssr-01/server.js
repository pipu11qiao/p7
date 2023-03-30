import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";

async function createServer() {
  const app = express();
  // 创建viteserver
  const viteServer = await createViteServer({
    server: {
      middlewareMode: "ssr",
    },
  });
  app.use(viteServer.middlewares);
  app.use("*", async (req, res) => {
    const url = req.url;
    // html 模版
    let template = fs.readFileSync(path.resolve("./index.html"), "utf-8");

    // 根组件 => html

    const { render } = await viteServer.ssrLoadModule("./src/entry-server.js");
    const html = await render(url);
    const resHtml = template.replace("<!---ssr-outlet--->", html);
    console.log(`resHtml`, resHtml);
    console.log(`html`, html);

    // 6. 返回渲染后的 HTML。
    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  });
  app.listen(4000, () => {
    console.log("-------------ready--------------");
  });
}

createServer();
