angular.module('myApp')
    .controller('MyEventsController',  ['$scope','$rootScope','$location', function ($scope, $rootScope, $location) {

        $scope.getMyEvents = function() {
            // retrieve event details for the current use from parse
            var UserClass = Parse.Object.extend("Users");
            var id_query = new Parse.Query(UserClass);

            var hostingEventIds = [];
            var acceptedEventIds = [];
            var invitedEventIds = [];
            
            $scope.hostingEvents = [];
            $scope.acceptedEvents = [];
            $scope.invitedEvents = [];


            id_query.equalTo("username", localStorage.currentUser);
            id_query.first( {
                success: function(object) {
                    // retrieve the event ids from the user table

                    invitedEventIds = object.get("invited");
                    hostingEventIds = object.get("hosting");
                    acceptedEventIds = object.get("going");
                     
                    // retrieve the event details for all those event ids from the events table

                    var EventClass = Parse.Object.extend("Events");
                    var details_query = new Parse.Query(EventClass);

                    for (var i = 0; i < hostingEventIds.length; i++){
                        details_query.equalTo("objectId", hostingEventIds[i]);
                        details_query.first( {
                            success: function(object) {
                                var hostingEvent = object.attributes;
                                hostingEvent.objectId = object.id;
                                $scope.hostingEvents.push(hostingEvent);
                                if(!$scope.$$phase) $scope.$apply();
                            }, error: function(object) {
                                alert("Error with loading myEvents");
                            }
                        });
                    };

                    for (var i = 0; i < acceptedEventIds.length; i++){
                        details_query.equalTo("objectId", acceptedEventIds[i]);
                        details_query.first( {
                            success: function(object) {
                                var acceptedEvent = object.attributes;
                                acceptedEvent.objectId = object.id;
                                $scope.acceptedEvents.push(acceptedEvent);
                                if(!$scope.$$phase) $scope.$apply();
                            }, error: function(object) {
                                alert("Error with loading myEvents");
                            }
                        });
                    };

                    for (var i = 0; i < invitedEventIds.length; i++){
                        details_query.equalTo("objectId", invitedEventIds[i]);
                        details_query.first( {
                            success: function(object) {
                                var invitedEvent = object.attributes;
                                invitedEvent.objectId = object.id;
                                $scope.invitedEvents.push(invitedEvent);
                                if(!$scope.$$phase) $scope.$apply();
                            }, error: function(object) {
                                alert("Error with loading myEvents");
                            }
                        });
                    };

                }, error: function(object) {
                    alert("Error with loading myEvents");
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

                    // remove the event id from the current user's invite/pending list
                    var newInvitedList = object.get("invited");
                    var index = newInvitedList.indexOf(event.objectId);
                    newInvitedList.splice(index, 1);
                    object.set("invited", newInvitedList);

                    object.save();

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

                            // reload the event data on the page
                            $scope.getMyEvents();

                        }, error: function(object) {
                            alert("Error with updating going list");
                        }
                    });

                }, error: function(object) {
                    alert("Error with accepting invite.")
                }
            });
        };

        // decline an event to an event
        $scope.declineInvite = function(event){
            var UserClass = Parse.Object.extend("Users");
            var user_query = new Parse.Query(UserClass);
            user_query.equalTo("username", localStorage.currentUser);
            user_query.first( {
                success: function(object) {
                    // remove the event id from the current user's invited list
                    var newInvitedList = object.get("invited");
                    var index = newInvitedList.indexOf(event.objectId);
                    newInvitedList.splice(index, 1);
                    object.set("invited", newInvitedList);
                    object.save();

                    // remove the user's name from the invited/pending list in the events table
                    var EventClass = Parse.Object.extend("Events");
                    var query = new Parse.Query(EventClass);

                    query.equalTo("objectId", event.objectId);
                    query.first( {
                        success: function(object) {
                            var invitedList = object.get("invitedList");
                            var nameIndex = invitedList.indexOf(localStorage.userName);
                            var commaIndex = invitedList.indexOf(", ", nameIndex);
                            if (commaIndex === -1){
                                var newInvitedList = "";
                            }
                            else {
                                var newInvitedList = invitedList.substring(0, nameIndex) + 
                                    invitedList.substring(commaIndex+1, invitedList.length-1);
                            }

                            // reload the event data on the page
                            $scope.getMyEvents();

                        }, error: function(object) {
                            alert("Error with updating invited list");
                        }
                    });

                }, error: function(object) {
                    alert("Error with declining invite.")
                }
            });
        };

        $scope.getMyEvents();

    }]);