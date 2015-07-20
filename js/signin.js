angular.module('firstModule', [])
    .controller('SignInController',  ['$scope','$http','$location', function ($scope, $http, $location) {

        $scope.username = '';
        $scope.pw = '';
        $scope.loginError = false;

       $scope.signin = function(){
            if ($scope.username && $scope.pw){
                console.log("username is " + $scope.username);
                console.log("password is " + $scope.pw);
                
                var data = {
                    attuid: $scope.username,
                    password: $scope.pw
                };

                console.log(data);

                console.log("data sent in is " + data);

                $http.post("http://localhost:4567/login", data).success(function(data, status){
                    console.log(data);
                    console.log(status);
                }).
                error(function(){
                    console.log("data returned is " + data);
                    console.log("status returned is " + status);
                    $scope.loginError = true;
                });
            }
        };
    }])