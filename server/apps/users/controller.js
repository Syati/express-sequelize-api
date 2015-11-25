import models from '../../models/index';

const { User } = models;

/**
 * @api {get} /users Get users
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiSuccess (200) {Object[]} users List of users
 */
export function index(req, res){
  User
    .findAll({ limit: 50 })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).send(err));
}

export default {
  index
};


