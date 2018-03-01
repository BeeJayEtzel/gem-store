/**
 * Collection.js
 *
 * @description :: A model to represent a Collection of gems
 */

module.exports = {

  attributes: {
    name: {
      type: "string",
      required: true
    },
    store: {
      model: "store"
    },
    gems: {
      collection: "gem",
      via: "collection"
    }
  }
};

