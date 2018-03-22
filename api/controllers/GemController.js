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
    },
    /**
     * buyGem
     * 
     * @description :: Handles logic for purchasing a gem
     */
    buyGem: function (req, res) {
        var g = req.body.id;
        var newOnHand = 0;
        Gem.findOne({id: g}).exec(function (err, foundGem){
            if (err) {
                console.log("g: " + g);
                return res.view("500");
            }
            else if (foundGem === null) {
                return res.view("404");
            }
            else {
                if (req.body.buy) {
                    newOnHand = foundGem.onhand -1;
                }
                else if (req.body.sell) {
                    newOnHand = foundGem.onhand +1;
                }
                Gem.update({id: g}, {onhand: newOnHand}, function(err){
                    if (err) {
                        return res.view("500");
                    }
                    else {
                        return res.send("Successful purchase!");
                    }
                });
            }
        });

    }
	
};

