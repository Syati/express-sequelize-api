import fs   from 'fs';
import path from 'path';
import Sequelize from 'sequelize';

import settings from '../config/settings/index';

let sequelize = new Sequelize(
  settings.db.database,
  settings.db.username,
  settings.db.password,
  {
    host: settings.db.host,
    dialect: settings.db.dialect
  }
);

let models = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    models[model.name] = model;
  });

Object.keys(models).forEach(function(modelName) {
  if ("associate" in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
