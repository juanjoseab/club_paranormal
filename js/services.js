angular.module('starter.services', [])

.service("Categories",function($http){
	this.getAll = function (some,success,failure){
		$http.get('http://fatninja.tk/wilaen/clubparanormal/web/index.php/ws/'+some)
		.success(success)
		.error(failure);
	}
})
.service("Content",function($http){
	this.data = [];
	this.getList = function (data,success,failure){
		$http.get('http://fatninja.tk/wilaen/clubparanormal/web/index.php/ws/'+data)
		.success(success)
		.error(failure);
	}
})

.service("ContentData",function($http){
	this.data = [];
	return {
            get: function () {
                return this.data;

            },
            set: function(value) {
                this.data = value;
            }
        };	
})

;