import path from 'path';
import express from 'express';
import SequelizeFixtures from 'sequelize-fixtures';

import config from './config/index';
import models from './models/index';
import settings from './config/settings/index';

const app = express();

config(app);

models.sequelize.sync({force: true}).then(() => {
  SequelizeFixtures.loadFile(
    path.join(__dirname, './fixtures/*.json'),
    models
  ).then(function () {
    console.dir("DEV DATA CREATED SUCCESSFULLY");
  });
  
  app.listen(settings.port, () => {
    console.log(
      'Express server listening on %d, in %s mode',
      settings.port, settings.env
    );
  });
});
