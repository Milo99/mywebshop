'use struct';

myshopApp.controller('shoppingCartController', function($scope, shoppingCartService, $cookieStore, $state){
	
	$scope.current = $cookieStore.get('current');
	
	getUser();
	getOrders();
	getOrdProd();

    function getUser() {
        shoppingCartService.getUser()
            .success(function(data) {
                $scope.theuser = data;
            });
    };
	
	function getOrders() {
        shoppingCartService.getOrders()
            .success(function(data) {
                $scope.orders = data;
            });
    };
	
	function getOrdProd() {
        shoppingCartService.getOrdProd()
            .success(function(data) {
                $scope.ordprod = data;
            });
    };
	
	$scope.deleteOrder = function(item) {
        shoppingCartService.deleteOrder(item)
            .success(function(data) {
                getOrders();
            });
    };

    $scope.updateUser = function(item, item2, item3, item4, item5, item6) {
        shoppingCartService.updateUser(item, item2, item3, item4, item5, item6)
            .success(function(data) {
                //...
            });
    };

    $scope.addItem = function(item, item2, item3) {
        shoppingCartService.addOrders(item, item2, item3)
            .success(function(data) {
                //...
            });
    };
	
	$scope.putOrderId = function(item) {
        $cookieStore.put('orderId', item);
    };

    $scope.getOrderId = function(){
		$scope.orderId = $cookieStore.get('orderId');
	};

});