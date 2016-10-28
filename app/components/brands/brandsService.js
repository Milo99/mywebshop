'use strict';

myshopApp.factory('brandsService', function($http){
	return {
		getBrand: function(){
			return $http.post('app/components/brands/php/get_brands.php');
		}
	};
});