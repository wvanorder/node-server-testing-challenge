const db = require('../data/dbConfig.js');;

function find() {
    return db('videogames')
      .select('id', 'name', 'protagonist');
};

function findBy(filter) {
    return db('videogames')
      .where(filter);
};

function findById(id) {
    return db('videogames')
      .where({ id })
      .first();
};

async function add(game) {
    const [id] = await db('videogames')
      .insert(game, 'id')

    return findById(id);
};

async function remove(id) {
    return db('videogames')
      .where({ id: id})
      .del()
}

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove
}