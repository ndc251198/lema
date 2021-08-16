const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  productionSourceMap: false,

  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: true
    }
  },

  transpileDependencies: [
    'quasar'
  ],

  configureWebpack: config => {
    config.output.filename = `js/[name].js`;
    config.output.chunkFilename = `js/[name].js`
  },

  css: {
    sourceMap: IS_PRODUCTION ? false : true,
    extract: IS_PRODUCTION ? {
      filename: `css/[name].css`,
      chunkFilename: `css/[name].css`
    } : false,
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/_variables.scss"`
      },
      scss: {
        prependData: `@import "@/styles/_variables.scss";`
      }
    }
  }
}
