module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/pointofsales/" : "/",

  configureWebpack: {
    devServer: {
      host: "rbac-laravue.test",
      port: 8080,
      https: false,
    },
  },
};
