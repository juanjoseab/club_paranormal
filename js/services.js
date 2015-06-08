angular.module('starter.services', [])

.service("Categories",function($http){
	this.getAll = function (some,success,failure){
		$http.get('http://fatninja.tk/wilaen/clubparanormal/web/index.php/ws/'+some)
		.success(success)
		.error(failure);
	}
})

;