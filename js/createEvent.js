angular.module('myApp')
    .controller('CreateEventController',  ['$scope', '$rootScope', '$location', '$state','$stateParams', 
        function ($scope, $rootScope, $location, $state, $stateParams) {

        $scope.restaurantId = $stateParams.itemId;
        $scope.restaurantName = $scope.restaurants[$scope.restaurantId].Restaurant;
        $scope.restaurantAddress = $scope.restaurants[$scope.restaurantId].Address;
        $scope.date = "";
        $scope.startTime = "";
        $scope.endTime = "";
        $scope.invited = "";
        $scope.invitedArray = [];
        $scope.hostName = "";
        $scope.isPublic = false;
        $scope.comments = "";

         

        $scope.addPerson = function(employee){
            $scope.invited += employee.name + ", ";
            $scope.invitedArray.push(employee.attuid);
        };

        $scope.createEvent = function(){
            var EventClass = Parse.Object.extend("Events");
            var newEvent = new EventClass();

            newEvent.set("restaurantName", $scope.restaurantName);
            newEvent.set("restaurantAddress", $scope.restaurantAddress);
            newEvent.set("date", $scope.date);
            newEvent.set("startTime", $scope.startTime);
            newEvent.set("endTime", $scope.endTime);
            newEvent.set("going", []);
            newEvent.set("invited", $scope.invitedArray);
            newEvent.set("hostName", localStorage.userName);
            newEvent.set("public", $scope.isPublic === "Public" ? true : false);
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