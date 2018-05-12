const axios = require('axios');
const collectionsUrl = "https://developers.zomato.com/api/v2.1/search?entity_id=278&entity_type=city&collection_id=1";


module.exports = {
  collection: axios.get(collectionsUrl, {headers: {'user-Key':'f49d80c644f54afc4b66725b3d461ac5'}})
        .then(res => {
          // JSON.stringify(res.data);
          console.log(res.data.restaurants[1].restaurant.name);
          return(res.data.restaurants[1].restaurant.name);
          // return JSON.stringify(res.data.restaurants[1].restaurant.name);
        })
    };
