import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import routes from './routes';
import settings from './settings/index';

export default function config(app){
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  if(settings.env === 'development') {
    app.use('/docs/api', express.static(path.join(settings.serverRoot, 'docs/api')));
    app.get('/docs/api', (req, res) => {
      res.sendFile(settings.serverRoot + 'docs/api/index.html');
    });
  }

  app.use('/api', routes());
  app.use(error404);
}

function error404(req, res, next) {
    var err = new Error('Not Found');
    res.status = 404;
    res.send(err.message);
}
