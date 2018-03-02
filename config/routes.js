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
  '/store': 'CollectionController.collectionHomepage',
  'GET /register': {
    view: 'register'
  },
  'POST /register': "StoreController.addStore",
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
  'GET /admin/collections/:collection/gems': 'GemController.addGemView',
  'GET /admin/collections/:collection/gems/add': 'GemController.addGem'

};
