'use strict';

myshopApp.factory('mainService', function($http){
	return {
		getMenuTab: function(){
			return $http.post('app/components/main/php/get_menu_tab.php');
		},
		getLeftMenu: function(){
			return $http.post('app/components/main/php/get_left_menu.php');
		},
		getLoginData: function(item,item2){
			return $http.post("app/components/main/php/getLoginData.php?item="+item+"&item2="+item2);
		},
		addEmail: function(item){
			return $http.post("app/components/main/php/addEmail.php?item="+item);
		},
		getOrder: function(){
			return $http.post("app/components/main/php/get_order.php");
		},
		addOrdProd: function(item,item2){
			return $http.post("app/components/main/php/addOrdProd.php?item="+item+"&item2="+item2);
		}
	};
});