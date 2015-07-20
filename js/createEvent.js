angular.module('ngCreateEvent',['ngAria', 'ngMessages', 'ngAnimate']).controller('CreateEventController', function(){
		var ctrl = this,
		newEvent = { eventDate:'', startTime:'', endTime:'', inviteList:'', comments:''};

		var createEvent = function(){
			if(ctrl.createEventForm.$valid){
				ctrl.showCreatedPrompt = true;
				clearForm();
			}
		};

		var clearForm = function(){
			newEvent = {eventDate:'', startTime:'', endTime:'', inviteList:'', comments:''};
			ctrl.createEventForm.$setUntouched();
			ctrl.createEventForm.$setPristine();
		};

		var hasErrorClass = function (field) {
            return ctrl.createEventForm[field].$touched && ctrl.createEventForm[field].$invalid;
        };

        var showMessages = function (field) {
            return ctrl.createEventForm[field].$touched || ctrl.createEventForm.$submitted;
        };


        ctrl.hasErrorClass = hasErrorClass;
        ctrl.showMessages = showMessages;
        ctrl.newEvent = newEvent;
        ctrl.createEvent = createEvent;
        ctrl.showSubmittedPrompt = false;
        ctrl.clearForm = clearForm;
	})
;