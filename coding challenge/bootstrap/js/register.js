'use strict';
 
angular.module('myApp.register', ['ngRoute'])
 
// Declared route 
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/register', {
        templateUrl: 'register/register.html',
        controller: 'RegisterCtrl'
    });
}])
 
// Register controller
.controller('RegisterCtrl', [function() {
 
}]);

'use strict';
 
angular.module('myApp', [
    'ngRoute',
    'myApp.home',
    'myApp.register'  // Newly added register route
]).
config(['$routeProvider', function($routeProvider) {
    // Set defualt view of our app to home
 
    $routeProvider.otherwise({
        redirectTo: '/home'
    });
}]);