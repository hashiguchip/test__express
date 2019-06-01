const { Nuxt, Builder } = require("nuxt");

const app = require("express")();
const isProd = process.env.NODE_ENV === "production";
const port = process.env.PORT || 3000;

// Nuxt.js をオプションとともにインスタンス化する
const config = require("./nuxt.config.js");
config.dev = !isProd;
const nuxt = new Nuxt(config);

// すべてのルートを Nuxt.js でレンダリングする
app.use(nuxt.render);

// ホットリローディングする開発モードのときのみビルドする
if (config.dev) {
  new Builder(nuxt).build().then(listen);
} else {
  // 本番のときはリッスン
  listen();
}

function listen() {
  // サーバーを Listen する
  app.listen(port, "0.0.0.0");
  console.log("Server listening on `localhost:" + port + "`.");
}
