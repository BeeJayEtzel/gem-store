/**
 * StoreController
 *
 * @description :: Server-side logic for managing Stores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * storeHomepage
     * 
     * @description :: fetches a homepage for a given store
     */
    storeHomepage: function(req, res){
        var s = req.params.storename;
        Store.findOne({name: s}).exec(function(err, foundStore){
            if (err) {
                return res.view("500");
            }
            else if (foundStore !== null) {
                return res.view("storehome", {store: foundStore});
            }
            else {
                return res.view("404");
            }
        });
    }
};

