angular.module('firstModule', ['ui.router', 'ui.bootstrap'])
    .controller('SignInController',  ['$scope','$rootScope','$location', function ($scope, $rootScope, $location) {

        $scope.username = '';
        $scope.pw = '';
        $scope.loginError = false;

       $scope.signin = function(){
            if ($scope.username && $scope.pw){
                var UserClass = Parse.Object.extend("Users");
                var query = new Parse.Query(UserClass);
                
                // search Parse for login credentials
                query.find( {
                    success: function(results) {
                        for (var i=0; i<results.length; i++) {
                            if (results[i].get("username") == $scope.username &&
                                results[i].get("password") == $scope.password) {
                                    
                                    // set 'session' for current user
                                    $rootScope.currentUser = $scope.username;
                                   
                                    // store that information in the browser
                                    localStorage.loggedin = true;
                                    localStorage.currentUser = $scope.username;

                                    // redirect to index
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