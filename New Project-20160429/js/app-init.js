var app = angular.module('app', []);


app.config(function(){
});

app.controller("loginController", function($scope, $http){
    $scope.mailid = "ypp";
	$http.get('js/samplejson.json')
		.success(function(response){
		    debugger;
			$scope.names= response;
			alert("No");
		});
});