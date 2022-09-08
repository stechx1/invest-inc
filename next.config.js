const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com", "images.pexel.com"],
  },
  lessVarsFilePath: './styles/variables.less',
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},

  // Other Config Here...

  webpack(config) {
    return config;
  },
})