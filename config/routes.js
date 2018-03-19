/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 */

module.exports.routes = {
  '/': {
    view: 'index'
  },
  'GET /store': 'StoreController.storeHome',
  'GET /store/:collection': 'CollectionController.collectionHome',
  'GET /store/:collection/:gem': 'GemController.gemHome',
  'POST /buyGem': 'GemController.buyGem'

};
