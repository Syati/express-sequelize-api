import models from '../../models/index';

const { Group } = models;

/**
 * @api {get} /groups Get groups
 * @apiName GetGroup
 * @apiGroup Groups
 *
 * @apiSuccess (200) {Object[]} groups List of groups
 */
export function index(req, res){
  Group
    .findAll({ limit: 50 })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).send(err));
}

export default {
  index
};
