const { injectBabelPlugin } = require('react-app-rewired');

module.exports = function override(config, env) {
    //add antd-mobile
    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);
    //decorator
    config=injectBabelPlugin('transform-decorators-legacy',config);
    return config;
  };