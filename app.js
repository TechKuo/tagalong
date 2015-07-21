
// 
// var myApp = angular.module('myApp', ['ui.router','ngAnimate','artistControllers']);
var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap']);

// 
myApp.config( function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('index', {
      url:'',
      templateUrl: 'signin.html'
  });
   
  $stateProvider.state('list', {
      url:'/list',
      templateUrl: 'partial/list.html'
  }); 

  $stateProvider.state('restaurant', {
      url:'/restaurant',
      templateUrl: 'partial/restaurant.html'
  }); 

  $stateProvider.state('myEvents', {
    url:'/myEvents',
    templateUrl: 'partial/myEvents.html'
  }); 

  $stateProvider.state('browseEvents', {
    url:'/browseEvents',
    templateUrl: 'partial/browseEvents.html'
  }); 

  $stateProvider.state('login', {
    url:'/login',
    templateUrl: 'signin.html',
    controller: 'SignInController'
  });

  $stateProvider.state('register',{
    url:'/register',
    templateUrl: 'signup.html',
    controller: 'SignUpController'
  });

  $stateProvider.state('rest_details', {
      url:'/rest_details/{itemId}',
      templateUrl: 'partial/rest_details.html',
      controller: function($scope, $state, $stateParams, $log){

         $scope.id = $stateParams.itemId;
         $log.log($scope.id);
          
      }

  });

  $stateProvider.state('employee_details', {
    url:'/employee_details/{itemId}',
    templateUrl: 'partial/employee_details.html',
    controller: function($scope, $state, $stateParams, $log){

       $scope.id = $stateParams.itemId;
       $log.log($scope.id);
          
    }

  });

  $stateProvider.state('create_event', {
    url: '/create_event/{itemId}',
    templateUrl: 'partial/createEvent.html',
    controller: 'CreateEventController'
  });
   
});

myApp.run(['$rootScope', '$location', function($rootScope, $location) {

  $rootScope.logout = function() {
    delete localStorage.loggedIn;
    delete localStorage.currentUser;
    delete localStorage.userName;
    $location.path('/login');
};
  
  Parse.initialize("0jzPCnJyCDiuodshWSVBV9ZosBAFo0x5u4Ir7cAB", "9nxpPoT3YzKnENQC6BRn9k0nbXqlxMqF3BCOagFM");

  $rootScope.$on('$locationChangeStart', function(event, next, current) {
      // if user is not logged in and is trying to access a page besides the login or register page,
      // redirect that user to the login page
      console.log("localStorage.loggedIn is " + localStorage.loggedIn);
      console.log("localStorage.currentUser is " + localStorage.currentUser);
      console.log("localStorage.userName is " + localStorage.userName);
      if (!localStorage.loggedIn && $location.path() != "/register"){
            $location.path('/login');
      }
  });

}]);


// myApp.filter('customOrderBy',function(){






    