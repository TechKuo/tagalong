angular.module('myApp')
    .controller('MyEventsController',  ['$scope','$rootScope','$location', function ($scope, $rootScope, $location) {

        // retrieve event details for the current user from Parse
        var UserClass = Parse.Object.extend("Users");
        var query = new Parse.Query(UserClass);

        $scope.invitedEvents = [];
        $scope.hostingEvents = [];
        $scope.acceptedEvents = [];

        query.equalTo("username", localStorage.currentUser);
        query.first( {
            success: function(object) {
                 $scope.invitedEvents = object.get("invited");
                 $scope.hostingEvents = object.get("hosting");
                 $scope.acceptedEvents = object.get("going");
            }, error: function(object) {
                alert("Error with loading myEvents");
            }
        });
       
    }]);