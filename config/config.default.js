const path = require('path')

module.exports = appInfo => {
  const config = (exports = {})

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_19940415'

  config.security = {
    csrf: {
      enable: false
    }
  }
  // add your config here
  config.middleware = ['accessLogger', 'errorHandler']
  config.view = {
    defaultViewEngine: 'pug',
    mapping: {
      '.pug': 'pug'
    }
  }

  config.logger = {
    outputJSON: true
  }
  config.customLogger = {
    BBLogger: {
      file: path.join(appInfo.root, 'logs/BB.log'),
      jsonFile: path.join(appInfo.root, 'logs/BBJSON.log'),
      consoleLevel: 'DEBUG'
    }
  }
  config.DINGDING_ACCESS_TOKEN = process.env.DINGDING_ACCESS_TOKEN
  return config
}
