import path from 'path';

let baseSettings = {
  root: path.normalize(path.join(__dirname, '../../../')),
  serverRoot: path.normalize(path.join(__dirname, '../../')),

  env: process.env.NODE_ENV || 'development',

  port: process.env.PORT || 3000
};

let envSettings = require('./' + baseSettings.env) || {};

const finalSettings = {
  ...baseSettings,
  ...envSettings
};

export default finalSettings;
