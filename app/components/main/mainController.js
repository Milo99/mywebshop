'use strict';

myshopApp.controller('mainController', function($scope, $cookieStore, mainService) {

	//Start Logg In User
    $scope.getLoginData = function(item, item2) {
        mainService.getLoginData(item, item2)
            .success(function(data) {
				
                if (data[0].status == 'admin') {
					$scope.users = data;
                    $cookieStore.put('admin', 'correct');
                    $scope.showAdmin = $cookieStore.get('admin');
                    $cookieStore.put('current', $scope.users[0].id_user);
                    $scope.current = $cookieStore.get('current');
                    alert('Zostałeś zalogowany');
                };

                if (data[0].status == 'user') {
					$scope.users = data;
                    $cookieStore.put('user', 'correct');
                    $scope.showUser = $cookieStore.get('user');
                    $cookieStore.put('current', $scope.users[0].id_user);
                    $scope.current = $cookieStore.get('current');
                    alert('Zostałeś zalogowany');
                };

            });
    };

    $scope.logout = function() {
        $cookieStore.put('admin', 'fake');
        $scope.showAdmin = $cookieStore.get('admin');
        $cookieStore.put('user', 'fake');
        $scope.showUser = $cookieStore.get('user');
    };
    $scope.showAdmin = $cookieStore.get('admin');
    $scope.showUser = $cookieStore.get('user');
	//End Logg In User

	//Start Add Email
    $scope.email = 'Twój email';
    $scope.addEmail = function(item) {
        mainService.addEmail(item)
            .success(function(data) {
                $scope.email = "twój email";
                alert('Twój email został dodany');
            });
    };
	//End Add Email
	
	//Start Tab Menu
	mainService.getMenuTab()
		.success(function(data){ 
			$scope.menutab = data; 
		});
	//End Tab Menu
	
	//Start Cattegories Left Menu
	mainService.getLeftMenu()
		.success(function(data){ 
			$scope.leftmenu = data; 
		});
		
	$scope.getCat = function(item){
		$cookieStore.put('cat', item);
		$scope.cat = $cookieStore.get('cat');
	}
	
	$scope.removeCat = function(){
		$cookieStore.put('cat', '');
		$scope.cat = $cookieStore.get('cat');
	}
	//End Cattegories Left Menu
	
	// Start Shopping Cart:
	$scope.mycart = [];

    $scope.addToCart = function(prod_id, prod_price) {
        $scope.mycart.push({
            "myid": prod_id,
            "price": prod_price,
            "qty": 1
        });
    };
	
	$scope.cleanCart = function(){
		$scope.mycart = [];
	};

    $scope.removeFromCart = function(index) {
        $scope.mycart.splice(index, 1);
    };

    $scope.sum = function() {
        var sum = 0;
        angular.forEach($scope.mycart, function(item) {
            sum += item.price * item.qty;
        });
        return sum;
    };
	
	function addOrdProd(item,item2){
		mainService.addOrdProd(item,item2)
			.success(function(data){
				//...
			});
	};
	
	$scope.addOrder = function() {
        mainService.getOrder()
            .success(function(data) {
                $scope.order = data;
				angular.forEach($scope.mycart, function(item) {
					addOrdProd(data[0].id_ord, item.myid);
					});
				alert("Twoje zamówienie nr:"+data[0].id_ord+" zostało dodane.");
				$scope.cleanCart();
            });
    };
	//End Shopping Cart
	
	$scope.getData = function(item) {
        $cookieStore.put('item', item);
    };

    $scope.getmyitem = function(){
		$scope.myitem = $cookieStore.get('item');
	};

});