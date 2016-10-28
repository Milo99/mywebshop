'use strict';

myshopApp.controller('userController', function($scope, userService, $cookieStore){
	
	$scope.current = $cookieStore.get('current');
	
	getItem();
	function getItem(){
		userService.getUser()
			.success(function(data){ 
				$scope.users = data;
			});
	};
	
	$scope.addItem = function(item,item2,item3,item4,item5,item6,item7){
		userService.addUser(item,item2,item3,item4,item5,item6,item7)
			.success(function(data){
				getItem();
				$scope.firstname = "";
				$scope.lastname = "";
				$scope.address = "";
				$scope.email = "";
				$scope.phone = "";
				$scope.login = "";
				$scope.pass = "";
				alert("Twoje konto zostało utworzone. Teraz możesz się zalogować.")
			});
	};
	
	$scope.deleteItem = function(item){
		if(confirm("Czy na pewno usunąć użytkownika?")){
			userService.deleteUser(item)
				.success(function(data){
					getItem();
				});
		}
	};
	
	$scope.changeItem = function(itemID,item,item2,item3,item4,item5,item6,item7){
		if(confirm("Czy na pewno zmienić element??")){
			userService.updateUser(itemID,item,item2,item3,item4,item5,item6,item7)
				.success(function(data){
					getItem();
				});
		}
	};
	
	$scope.changeStatus = function(itemID,item){
		if(confirm("Czy na pewno zmienić element??")){
			userService.updateStatus(itemID,item)
				.success(function(data){
					getItem();
				});
		}
	};
	
});