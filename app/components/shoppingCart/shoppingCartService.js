'use strict';

myshopApp.factory('shoppingCartService', function($http){
	return {
		getUser: function(){
			return $http.post("app/components/shoppingCart/php/get_user.php");
		},
		getOrders: function(){
			return $http.post("app/components/shoppingCart/php/get_orders.php");
		},
		getOrdProd: function(){
			return $http.post("app/components/shoppingCart/php/get_ordprod.php");
		},
		deleteOrder: function(item){
			return $http.post("app/components/shoppingCart/php/delete_order.php?item="+item);
		},
		updateUser: function(item,item2,item3,item4,item5,item6){
			return $http.post("app/components/shoppingCart/php/update_user.php?item="+item+"&item2="+item2+"&item3="+item3+"&item4="+item4+"&item5="+item5+"&item6="+item6);
		},
		addOrders: function(item,item2,item3){
			return $http.post("app/components/shoppingCart/php/add_orders.php?item="+item+"&item2="+item2+"&item3="+item3);
		}
	};
});