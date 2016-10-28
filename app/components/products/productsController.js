'use strict';

myshopApp.controller('productsController', function($scope, $cookieStore, productsService, $state) {

    $scope.$state = $state; //used to show/hide current State

    getItem();

    function getItem() {
        productsService.getProducts()
            .success(function(data) {
                $scope.products = data;
            });
    };

    $scope.addItem = function(item, item2, item3, item4, item5) {
        productsService.addProduct(item, item2, item3, item4, item5)
            .success(function(data) {
                getItem();
				alert("Produkt został dodany.")
            });
    };

    $scope.deleteItem = function(item) {
        if (confirm("Czy na pewno usunąć produkt?")) {
            productsService.deleteProduct(item)
                .success(function(data) {
                    getItem();
                });
        }
    };

    $scope.changeItem = function(itemID, item, item2, item3, item4, item5) {
        if (confirm("Czy na pewno zmienić element??")) {
            productsService.updateProduct(itemID, item, item2, item3, item4, item5)
                .success(function(data) {
                    getItem();
                });
        }
    };
/* Moved to mainController

    $scope.getData = function(item) {
        $cookieStore.put('item', item);
    };

    $scope.getmyitem = function(){
		$scope.myitem = $cookieStore.get('item');
	};
*/
	
});