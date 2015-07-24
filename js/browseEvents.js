angular.module('myApp')
    .controller('BrowseEventsController',  ['$scope','$rootScope','$location', function ($scope, $rootScope, $location) {


        // retrieve all public event details from Parse
        $scope.getBrowseEvents = function() {
            var EventClass = Parse.Object.extend("Events");
            var query = new Parse.Query(EventClass);

            $scope.publicEvents = [];

            query.equalTo("public", true);
            query.find( {
                success: function(results) {
                    for (var i = 0; i < results.length; i++){
                        var publicEvent = results[i].attributes;
                        publicEvent.objectId = results[i].id;
                        $scope.publicEvents.push(publicEvent);
                    };

                    if(!$scope.$$phase) $scope.$apply();
                }, error: function(object) {
                    alert("Error with loading browseEvents");
                }
            });
        };
       
        // accept an invite to an event
        $scope.acceptInvite = function(event){
            var UserClass = Parse.Object.extend("Users");
            var user_query = new Parse.Query(UserClass);
            user_query.equalTo("username", localStorage.currentUser);
            user_query.first( {
                success: function(object) {
                    // add the event id to the current user's going list
                    var newGoingList = object.get("going");
                    newGoingList.push(event.objectId);
                    object.set("going", newGoingList);

                    object.save();

                     // remove the event id from the current user's invite/pending list if it's there
                    var newInvitedList = object.get("invited");
                    var index = newInvitedList.indexOf(event.objectId);
                    if (index !== -1){
                        newInvitedList.splice(index, 1);
                        object.set("invited", newInvitedList);
                    };

                    // add the user's name to the going list in the events table
                    var EventClass = Parse.Object.extend("Events");
                    var query = new Parse.Query(EventClass);

                    query.equalTo("objectId", event.objectId);
                    query.first( {
                        success: function(object) {
                            var goingList = object.get("goingList");
                            var newGoingList = goingList + ", " + localStorage.userName;
                            object.set("goingList", newGoingList);

                            object.save();

                            // redirect to myEvents
                            $location.path('/myEvents');
                            if(!$scope.$$phase) $scope.$apply();

                        }, error: function(object) {
                            alert("Error with updating going list");
                        }
                    });

                }, error: function(object) {
                    alert("Error with accepting invite.")
                }
            });
        };

        $scope.getBrowseEvents();

    }]);