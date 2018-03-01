/**
 * Store.js
 *
 * @description :: A model to represent a Jewelery Store
 */

module.exports = {

  attributes: {
    name: {
      type: "string",
      required: true,
      unique: true
    },
    phone: {
      type: "string",
      required: true,
      unique: true
    },
    email: {
      type: "string",
      required: true,
      unique: true
    },
    collections: {
      collection: "collection",
      via: "store"
    }

  }
};

