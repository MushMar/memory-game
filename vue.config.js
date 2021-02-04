module.exports = {
  publicPath: process.env.NODE_ENV === "production"  ? "/memory_game/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/main.scss";`
      }
    }
  }
};
