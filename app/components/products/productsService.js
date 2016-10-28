'use strict';

myshopApp.factory('productsService', function($http){
	return {
		getProducts: function(){
			return $http.post("app/components/products/php/get_products.php");
		},
		addProduct: function(item,item2,item3,item4,item5){
			return $http.post("app/components/products/php/add_products.php?item="+item+"&item2="+item2+"&item3="+item3+"&item4="+item4+"&item5="+item5);
		},
		deleteProduct: function(item){
			return $http.post("app/components/products/php/delete_products.php?itemID="+item);
		},
		updateProduct: function(itemID,item,item2,item3,item4,item5){
			return $http.post("app/components/products/php/update_products.php?itemID="+itemID+"&item="+item+"&item2="+item2+"&item3="+item3+"&item4="+item4+"&item5="+item5);
		}
	};
});