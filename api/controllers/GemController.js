/**
 * GemController
 *
 * @description :: Server-side logic for managing Gems
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * gemHome
     * 
     * @description ::  Fetches a gem and loads its project page
     */
    gemHome: function (req, res) {
        var c = req.params.collection;
        var g = req.params.gem;
        Gem.findOne({collection: c, id: g}).exec(function (err, foundGem){
            if (err){
                return res.view("500");
            }
            else if (foundGem === null) {
                return res.view("404");
            } else {
                return res.view("gem-homepage", {
                    gem: foundGem
                });
            }
        });
    }
	
};

