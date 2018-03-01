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
        var s = StoreService.storeIdByName(req.params.storename);
        var c = req.params.collection;
        Collection.findOne({store: s})
                  .exec(function(err, foundCollection){
                     if (err){
                         return res.view("500");
                     } 
                     else if (foundCollection === null) {
                        return res.view("404");
                     }
                     else {
                         return res.view("collection-homepage")
                     }
                  });
        }
	
};

