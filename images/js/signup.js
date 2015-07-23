angular.module('myApp')
    .controller('SignUpController',  ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

        // populate dropdowns with data from Parse
        var DepartmentClass = Parse.Object.extend("Departments");
        var query = new Parse.Query(DepartmentClass);
        
        query.find( {
            success: function(results) {
                $scope.departments = results;
            }, error: function(results) {
                alert("Error with Retrieving Departments")
            }
        });

        var LocationClass = Parse.Object.extend("Locations");
        var query = new Parse.Query(LocationClass);
        
        query.find( {
            success: function(results) {
                $scope.locations = results;
            }, error: function(results) {
                alert("Error with Retrieving Locations")
            }
        });


        $scope.username = "";
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.password = "";
        $scope.userDepartment = "";
        $scope.userLocation = "";

        $scope.signup = function(){
            var UserClass = Parse.Object.extend("Users");
            var newUser = new UserClass();

            var fullName = $scope.firstName + " " + $scope.lastName;

            newUser.set("username", $scope.username);
            newUser.set("name", fullName);
            newUser.set("password", $scope.password);
            newUser.set("department", $scope.userDepartment);
            newUser.set("location", $scope.userLocation);
            newUser.set("invited", []);
            newUser.set("going", []);
            newUser.set("hosting", []);
            
            newUser.save(null,{
                success: function(result) {
                    // save user into Parse
                    newUser.set("objectId", result.id);
                    newUser.save();

                    // welcome the user
                    alert("Thank you! You are now ready to tagalong!")

                    // set session for logged in user
                    localStorage.currentUser = $scope.username;
                    localStorage.loggedIn = true;
                    localStorage.userName = fullName;

                    // redirect to index
                    $location.path('/myEvents');
                    if(!$scope.$$phase) $scope.$apply();
                }, error: function(result) {
                    alert("Error registering user!");
                }
            });
        };


    }]);