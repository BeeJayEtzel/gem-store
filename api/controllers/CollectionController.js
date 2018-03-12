/**
 * CollectionController
 *
 * @description :: Server-side logic for managing Collections
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * collectionHomepage
     * 
     * @description :: fetches a homepage for a given collection
     */
    collectionHomepage: function(req, res){
        Collection.find().exec(function(err, collectionFound){
            if (err){
                return res.view("500");
            }
            else if (collectionFound === null) {
                return res.view("404");
            } else {
                return res.view("collection-homepage", {
                    collections: collectionFound
                });
            }
        });

    },
    /**
     * addCollection
     * 
     * @description ::  Handles a POST request to add a collection to the store 
     */
    addCollection: function(req, res){
        var n = req.body.name;
        Collection.create({name: n})
                  .exec(function(err){
                     if (err){
                         return res.view("500");
                     } 
                     else {
                         return res.redirect("admin-collection-view");
                     }
                  });
        },
    /**
     * loadCollection
     * 
     * @description ::  Handles request to load a specific collection
     */
    loadCollection: function(req, res){
        var c = req.params.collection;
        Collection.findOne({id: c})
                  .populate("gems")
                  .exec(function(err, collectionFound){
                     if (err){
                         return res.view("500");
                     } 
                     else {
                         return res.view("store-collection-view", {collection: collectionFound});
                     }
                  });
        },
	
};

