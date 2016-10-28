'use strict';

myshopApp.controller('brandsListController', function($scope, brandsService){
	
	brandsService.getBrand()
		.success(function(data){ 
			$scope.brands = data; 
		});
});