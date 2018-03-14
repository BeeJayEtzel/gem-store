/**
 * StoreController
 *
 * @description :: Server-side logic for managing Stores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * homepage
     * 
     * @description :: fetches a homepage for the store
     */
    storeHome: function(req, res){
        Store.findOne({id: 1}).populate('collections').exec(function(err, foundStore){
            if (err) {
                return res.view("500");
            }
            else if (foundStore === null) {
                return res.view("404");
            }
            else {
                return res.view("store-homepage", {store: foundStore});
            }
        });
    }
};

