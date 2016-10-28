'use strict';

myshopApp.factory('contactsService', function($http){
	return {
		getContact: function(){
			return $http.post('app/components/contact/php/get_contacts.php');
		},
		addContact: function(item,item1,item2,item3,item4){
			return $http.post("app/components/contact/php/add_contacts.php?item="+item+"&item2="+item2+"&item3="+item3+"&item4="+item4);
		},
		deleteContact: function(item){
			return $http.post("app/components/contact/php/delete_contacts.php?itemID="+item);
		}
	};
});