angular.module('myApp')
    .controller('CreateEventController',  ['$scope', '$rootScope', '$location', '$state','$stateParams', 
        function ($scope, $rootScope, $location, $state, $stateParams) {

        $scope.restaurantId = $stateParams.itemId;
        $scope.restaurantName = "";
        $scope.restaurantAddress = "";
        $scope.date = "";
        $scope.startTime = "";
        $scope.endTime = "";
        $scope.invited = "";
        $scope.hostName = "";
        $scope.isPublic = false;
        $scope.comments = "";

        $scope.createEvent = function(){
            var EventClass = Parse.Object.extend("Events");
            var newEvent = new EventClass();

            newEvent.set("restaurantName", $scope.restaurantName);
            newEvent.set("restaurantAddress", $scope.restaurantAddress);
            newEvent.set("date", $scope.date);
            newEvent.set("startTime", $scope.startTime);
            newEvent.set("endTime", $scope.endTime);
            newEvent.set("going", []);

            // handle invited here


            newEvent.set("hostName", $rootScope.userName);
            newEvent.set("public", $scope.isPublic);
            newEvent.set("comments", $scope.comments);

            
            newEvent.save(null,{
                success: function(result) {
                    // save user into Parse
                    newEvent.set("objectId", result.id);
                    newEvent.save();

                    // welcome the user
                    alert("Thanks, your event has been created!")

                    // redirect to index
                    $location.path('/myEvents');
                    if(!$scope.$$phase) $scope.$apply();
                }, error: function(result) {
                    alert("Error creating event!");
                }
            });
        };


    }]);