'use strict';

myshopApp.controller('contactController', function($scope, $cookieStore, contactsService){
	
	//$scope.showAdmin = 'test';
	$scope.showAdmin = $cookieStore.get('admin');
	
	getItem();
	function getItem(){
	contactsService.getContact()
		.success(function(data){
			$scope.contacts = data;
		});
	};
	
	$scope.addItem = function(item,item2,item3,item4){
		contactsService.addContact(item,item2,item3,item4)
			.success(function(data){
				getItem();
				$scope.firstname = "";
				$scope.lastname = "";
				$scope.email = "";
				$scope.message = "";
				alert("Twoja wiadomość została wysłana");
			});
	};
	
	$scope.deleteItem = function(item){
		if(confirm("Czy na pewno usunąć element??")){
			contactsService.deleteContact(item)
				.success(function(data){
					getItem();
				});
		}
	};
	
});