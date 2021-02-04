module.exports = {
  publicPath: process.env.NODE_ENV === "production"  ? "/memory-game/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/main.scss";`
      }
    }
  }
};
