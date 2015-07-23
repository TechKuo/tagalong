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
        $scope.isPublic = "";
        $scope.comments = "";

        // function for adding people to the invited list
        $scope.addPerson = function(employee){
            if ($scope.invited == ""){
                $scope.invited += employee.name
            }
            else {
                $scope.invited += ", " + employee.name;
            }
            $scope.invitedArray.push(employee.attuid);
        };

        // function for deleting the last person added to the invited list
        $scope.backspace = function(){
            var lastCommaIndex = $scope.invited.lastIndexOf(", ");
            if (lastCommaIndex === -1){
                $scope.invited = "";
                $scope.invitedArray = [];
            }
            else {
                $scope.invited = $scope.invited.substring(0, lastCommaIndex);
                $scope.invitedArray.pop();
            }
        }

        $scope.createEvent = function(){

            var EventClass = Parse.Object.extend("Events");
            var newEvent = new EventClass();

            newEvent.set("restaurantName", $scope.restaurantName);
            newEvent.set("restaurantAddress", $scope.restaurantAddress);
            newEvent.set("date", $scope.date);
            newEvent.set("startTime", $scope.startTime);
            newEvent.set("endTime", $scope.endTime);
            newEvent.set("goingList", "");
            newEvent.set("invitedList", $scope.invited);
            newEvent.set("hostName", localStorage.userName);
            newEvent.set("public", $scope.isPublic === "Private"  ? false : true);
            newEvent.set("comments", $scope.comments);
            
            newEvent.save(null,{
                success: function(result) {
                    // save event into Parse
                    newEvent.set("objectId", result.id);
                    newEvent.save();

                    //  prompt the user
                    alert("Thanks! Your event has been created!")

                    // redirect to myEvents
                    $location.path('/myEvents');
                    if(!$scope.$$phase) $scope.$apply();
                }, error: function(result) {
                    alert("Error creating event.");
                }
            });

            // update the invited list for every invited person
            var UserClass = Parse.Object.extend("Users");
            var invited_query = new Parse.Query(UserClass);

            for (var i = 0; i < $scope.invitedArray.length; i++){
                invited_query.equalTo("username", $scope.invitedArray[i]);
                invited_query.first( {
                    success: function(object) {
                        var newInvitedList = object.get("invited");
                        newInvitedList.push(newEvent.attributes);
                        object.set("invited", newInvitedList);
                        object.save();
                    }, error: function(object) {
                        alert("Error with adding event to invited users.")
                    }
                });
            };

            // update the hosting list for the host
            var hosting_query = new Parse.Query(UserClass);
            hosting_query.equalTo("username", localStorage.currentUser);
            hosting_query.first( {
                success: function(object) {
                    var newHostingList = object.get("hosting");
                    newHostingList.push(newEvent.attributes);
                    object.set("hosting", newHostingList);
                    object.save();
                }, error: function(object) {
                    alert("Error with adding event to host.")
                }
            });


        };
    }]);