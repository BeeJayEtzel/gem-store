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
    collectionHome: function(req, res){
        var c = req.params.collection
        Collection.findOne({id: c})
                  .populate('gems')
                  .exec(function(err, collectionFound){
                        if (err){
                            return res.view("500");
                        }
                        else if (collectionFound === null) {
                            return res.view("404");
                        } else {
                            return res.view("collection-homepage", {
                                collection: collectionFound
                            });
                        }

        });

    },
};

