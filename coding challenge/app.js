
// 
// var myApp = angular.module('myApp', ['ui.router','ngAnimate','artistControllers']);
var myApp = angular.module('myApp', ['ui.router']).filter('object2Array', function() {
  return function(input) {
    var out = [];
    for (i in input) {
      out.push(input[i]);
    }
    return out;
  }


// 
myApp.config( function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('employees', {
      url:'',
      templateUrl: 'partial/list.html'
    });
   
  $stateProvider.state('list', {
    url:'/list',
    templateUrl: 'partial/list.html',

    })

  }); 

  $stateProvider.state('restaurant', {
      url:'/restaurant',
      templateUrl: 'partial/restaurant.html'
  }); 

  $stateProvider.state('myEvents', {
    url:'/myEvents',
    templateUrl: 'partial/myEvents.html'
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



    