const dbActions = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  get,
  insert,
  update,
  remove,
};

function get(id) {
  let query = dbActions('actions');

  if (id) {
    return query
      .where('id', id)
      .first()
      .then((action) => {
        if (action) {
          return mappers.actionToBody(action);
        } else {
          return null;
        }
      });
  } else {
    return query.then((actions) => {
      return actions.map((action) => mappers.actionToBody(action));
    });
  }
}

function insert(action) {
  return dbActions('actions')
    .insert(action, 'id')
    .then(([id]) => get(id));
}

function update(id, changes) {
  return dbActions('actions')
    .where('id', id)
    .update(changes)
    .then((count) => (count > 0 ? get(id) : null));
}

function remove(id) {
  return dbActions('actions').where('id', id).del();
}
