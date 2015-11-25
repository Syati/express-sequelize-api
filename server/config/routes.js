import express from 'express';

import users from '../apps/users/routes';
import groups from '../apps/groups/routes';

export default function routes(){
  const router = express.Router();
  
  router.use('/users', users);
  router.use('/groups', groups);

  return router;
}
