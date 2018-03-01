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
  '/store/:storename': 'StoreController.storeHomepage',
  '/store/:storename/:collection': 'CollectionController.collectionHome',
  'GET /register': {
    view: 'register'
  },
  'POST /register': "StoreController.addStore"

};
