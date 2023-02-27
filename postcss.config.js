module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtransform':{
      platform: 'weapp',
      designWidth: 750,
    },
    'postcss-rem-to-responsive-pixel': {
      rootValue: 32,
      propList: ['*'],
      transformUnit: 'rpx'
    }
  }
}