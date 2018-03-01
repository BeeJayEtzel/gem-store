/**
 * Connections
 * (sails.config.connections)
 */

module.exports.connections = {

  /***************************************************************************
  *                                                                          *
  * MySQL is the world's most popular relational database.                   *
  * http://en.wikipedia.org/wiki/MySQL                                       *
  *                                                                          *
  * Run: npm install sails-mysql@for-sails-0.12 --save                       *
  *                                                                          *
  ***************************************************************************/
  someMysqlServer: {
    adapter: 'sails-mysql',
    host: 'localhost',
    user: 'root',
    password: 'hamburger',
    database: 'sails_gem_store'
  },


};
