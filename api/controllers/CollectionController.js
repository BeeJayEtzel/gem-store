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
        var s = req.params.storename;
        var c = req.params.collection;
        Store.findOne({name: s}).exec(function(err, foundStore){
            if (err) {
                return res.view("500");
            }
            else if (foundStore === null) {
                return res.view("404");
            }
            else {
                Collection.findOne({store: foundStore.id})
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
        });
    }
	
};

