
// 
// var myApp = angular.module('myApp', ['ui.router','ngAnimate','artistControllers']);
var myApp = angular.module('myApp', ['ui.router', 'ui.bootstrap']);

// 
myApp.config( function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('employees', {
      url:'',
      templateUrl: 'partial/list.html'
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
    templateUrl: 'signin.html'
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
   
});

myApp.run(['$rootScope', '$location', function($rootScope, $location) {

  $rootScope.user = {
    username: "",
    password: "",
    loggedOn: false
  };
  
  Parse.initialize("0jzPCnJyCDiuodshWSVBV9ZosBAFo0x5u4Ir7cAB", "9nxpPoT3YzKnENQC6BRn9k0nbXqlxMqF3BCOagFM");

  var TestObject = Parse.Object.extend("TestObject");
  var testObject = new TestObject();
  testObject.save({foo: "bar"}).then(function(object) {
    alert("yay! it worked");
  });

  $rootScope.$on('$locationChangeStart', function(event, next, current) {
      if (!localStorage.loggedin) {
          $location.path('/login')
      }
  })

}]);


// myApp.filter('customOrderBy',function(){






    