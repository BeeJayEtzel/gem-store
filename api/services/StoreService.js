/**
 * StoreService
 *
 * @description :: Helper functions for stores
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    /**
     * storeIdByName
     * 
     * @description :: fetches a store id for a given store name
     * @return :: store id number
     */
    storeIdByName: function(storeName){
        Store.findOne({name: storeName}).exec(function(err, foundStore){
            if (err || foundStore === null) {
                return null;
            }
            else {
                return foundStore.id;
            }
        });
    }
	
};

