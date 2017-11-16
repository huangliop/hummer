const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    //add antd-mobile
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
    //decorator
    config=injectBabelPlugin('transform-decorators-legacy',config);
    //正式环境下用cheap-module-source-map
    if(env === "production")config.devtool='cheap-module-source-map';
    return config;
  };