const appInfo = require('../config/appInfo');

exports.getInfo = (req, res) => {
  res.json({
    success: true,
    server: appInfo.name,
    version: appInfo.version,
    environment: appInfo.environment,
    time: new Date().toISOString()
  });
};
