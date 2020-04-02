const knex = require('knex');
const configaration = require('../../knexfile');

const connection = knex(configaration.development);


module.exports = connection;