'use strict';

myshopApp.factory('userService', function($http){
	return {
		getUser: function(){
			return $http.post("app/components/users/php/get_user.php");
		},
		addUser: function(item,item2,item3,item4,item5,item6,item7){
			return $http.post("app/components/users/php/add_user.php?item="+item+"&item2="+item2+"&item3="+item3+"&item4="+item4+"&item5="+item5+"&item6="+item6+"&item7="+item7);
		},
		deleteUser: function(item){
			return $http.post("app/components/users/php/delete_user.php?itemID="+item);
		},
		updateUser: function(itemID,item,item2,item3,item4,item5,item6,item7){
			return $http.post("app/components/users/php/update_user.php?itemID="+itemID+"&item="+item+"&item2="+item2+"&item3="+item3+"&item4="+item4+"&item5="+item5+"&item6="+item6+"&item7="+item7);
		},
		updateStatus: function(itemID,item){
			return $http.post("app/components/users/php/update_status.php?itemID="+itemID+"&item="+item);
		}
	};
});