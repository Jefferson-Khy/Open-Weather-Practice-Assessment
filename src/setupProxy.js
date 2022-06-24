const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware(
      "/data/2.5/onecall?lat=33&lon=-117&appid=0d31656252fe0e66c130129db5d55817&units=imperial",
      {
        target: "https://api.openweathermap.org",
        changeOrigin: true,
      }
    )
  );
};
