/**
 * Gem.js
 *
 * @description :: A model to represent Gems
 */

module.exports = {

  attributes: {
    name: {
      type: "string",
      required: true
    },
    description: {
      type: "text"
    },
    picture: {
      type: "string"
    },
    price: {
      type: "float"
    },
    onhand: {
      type: "integer"
    },
    collection: {
      model: "collection"
    }

  }
};

