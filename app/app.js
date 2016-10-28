'use strict';

var myshopApp = angular.module('myshopApp',['ui.router', 'ngCookies'])

.config(function($stateProvider, $urlRouterProvider){
	
      $urlRouterProvider.otherwise('main/home');
	  
	  $stateProvider
	  
		  .state('main',{
			  url:'/main',
			  templateUrl: 'app/components/main/main.html',
			  controller: 'mainController'
		  })
		  
		  .state('main.home',{
			  url:'/home',
			  templateUrl: 'app/components/home/homeView.html',
		  })
		  
		  .state('main.register',{
			  url:'/register',
			  templateUrl: 'app/components/users/userView.html',
			  controller: 'userController'
		  })
		  
		  .state('main.youraccount',{
			  url:'/youraccount',
			  templateUrl: 'app/components/users/yourAccountView.html',
			  controller: 'userController'
		  })
		  
		  .state('main.usersList',{
			  url:'/usersList',
			  templateUrl: 'app/components/users/usersListView.html',
			  controller: 'userController'
		  })
		  
		  .state('main.products',{
			   
				url: '/products',
                templateUrl: 'app/components/products/productsView.html',
				controller: 'productsController'
          })
		  
		  .state('main.products.productDetails',{
				
				url: '/productDetails',
				templateUrl: 'app/components/products/productDetailsView.html',
				controller: 'productsController'
		  })
		  
		  .state('main.products.productDetails.shoppingCart',{
				
				url: '/shoppingCart',
				templateUrl: 'app/components/shoppingCart/shoppingCartView.html',
				controller: 'shoppingCartController'
		  })
		  
		  .state('main.products.productDetails.shoppingCart.order',{
				
				url: '/order',
				templateUrl: 'app/components/shoppingCart/orderView.html'
		  })
		  
		  .state('main.products.ordersList',{
				
				url: '/ordersList',
				templateUrl: 'app/components/shoppingCart/ordersListView.html',
				controller: 'shoppingCartController'
		  })
		  
		  .state('main.products.ordersList.orderDetails',{
				
				url: '/orderDetails',
				templateUrl: 'app/components/shoppingCart/orderDetailsView.html',
				controller: 'shoppingCartController'
		  })
		  
		  .state('main.products.editProduct',{
			   
				url: '/editProduct',
                templateUrl: 'app/components/products/editProductView.html',
				controller: 'productsController'
          })
		  
		  .state('main.products.addProduct',{
			   
				url: '/addProduct',
                templateUrl: 'app/components/products/addProductView.html'
          })
		  
		  .state('main.rules',{
			   
				url: '/rules',
                templateUrl: 'app/components/rules/rulesView.html'
          })
		  
		  .state('main.shipping',{
			   
				url: '/shipping',
                templateUrl: 'app/components/shipping/shippingView.html'
          })
		  
          .state('main.contact',{
			   
				url: '/contact',
                templateUrl: 'app/components/contact/contactView.html',
				controller: 'contactController'
          })
		  
		  .state('main.brands',{
			   
				url: '/brands/:id_bra',
                templateUrl: 'app/components/brands/brandsView.html',
				controller: 'brandsController'
          })
});

