/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 */

module.exports.routes = {
  '/': {
    view: 'homepage'
  },
  '/store': 'StoreController.homepage' ,
  'GET /register': {
    view: 'register'
  },
  'GET /admin': {
    view: 'admin'
  },
  /**
   * Routes for administration
   */
  'GET /admin/collections': 'CollectionController.addCollectionView',
  'GET /admin/collections/add': {
    view: "add-collection"
  },
  'POST /admin/collections/add': 'CollectionController.addCollection',
  'GET /admin/collections/:collection/gems': {
    view: "add-gem"
  },
  'GET /admin/collections/:collection/gems/add': {
    view: "add-gem"
  },
  'POST /admin/collections/:collection/gems/add': 'GemController.addGem',

  /**
   * Routes for store
   */
  'GET /store/:collection': 'CollectionController.loadCollection'

};
