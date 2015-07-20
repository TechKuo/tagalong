angular.module('myApp')
    .controller('SignInController',  ['$scope','$rootScope','$location', function ($scope, $rootScope, $location) {

        $scope.username = '';
        $scope.password = '';
        $scope.loginError = false;

       $scope.signin = function(){
            if ($scope.username && $scope.password){

                var UserClass = Parse.Object.extend("Users");
                var query = new Parse.Query(UserClass);
                
                // search Parse for login credentials
                query.find( {
                    success: function(results) {
                        for (var i=0; i < results.length; i++) {


                            if (results[i].get("username") == $scope.username &&
                                results[i].get("password") == $scope.password) {
                                    
                                    // set 'session' for current user
                                    $rootScope.currentUser = $scope.username;

                                    // redirect to index
                                    $location.path('/myEvents');
                            }
                            else {
                                $scope.loginError = true;
                            }
                        }
                    }, error: function(results) {
                        alert("Error with Logging In.")
                    }
                });
            }
        };
    }]);