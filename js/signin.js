angular.module('myApp', [])
    .controller('SignInController',  ['$scope','$rootScope','$location', function ($scope, $rootScope, $location) {

        $scope.username = '';
        $scope.pw = '';
        $scope.loginError = false;

       $scope.signin = function(){
            if ($scope.username && $scope.pw){
                var UserClass = Parse.Object.extend("Users");
                var query = new Parse.Query(UserClass);
                
                query.find( {
                    success: function(results) {
                        for (var i=0; i<results.length; i++) {
                            if (results[i].get("username") == $scope.username &&
                                results[i].get("password") == $scope.password) {
                                    $rootScope.current_user = $scope.username;
                                    localStorage.loggedin = true;
                                    localStorage.current_user = $scope.username;
                                    $location.path('/');
                            }
                        }
                    }, error: function(results) {
                        $scope.loginError = true;
                    }
                });
            }
        };
    }])