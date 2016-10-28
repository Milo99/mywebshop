'use struct';

myshopApp.controller('brandsController', function($scope, $stateParams, brandsService){
	
	$scope.id = $stateParams.id_bra-1;
    $scope.brand = {};

    brandsService.getBrand()
		.success(function(data){ 
			$scope.brand = data; 
		});
});