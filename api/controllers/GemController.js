/**
 * GemController
 *
 * @description :: Server-side logic for managing Gems
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * addCollection
     * 
     * @description ::  Handles a POST request to add a collection to the store 
     */
    addGem: function(req, res){
        var c = req.params.collection;
        var n = req.body.name;
        var desc = req.body.description;
        Gem.create({
            name: n,
            description: desc,
            collection: c
        }).exec(function(err){
                 if (err){
                     console.log(err);
                     return res.json({
                         name: n,
                            description: desc,
                            collection: c

                     });
                 } 
                 else {
                     return res.redirect("/admin/collections/1/gems");
                 }
            });
        },
	
};

