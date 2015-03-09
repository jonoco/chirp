var myApp = angular.module('myApp', 
  ['ngRoute', 'firebase', 'appControllers'])
.constant('FIREBASE_URL', 'https://chirpapp.firebaseio.com/');

var appControllers = angular.module('appControllers', ['firebase']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/welcome', {
    templateUrl: 'views/welcome.html',
    controller:  'WelcomeController'  
  })
  .when('/room/:rId', {
    templateUrl: 'views/room.html',
    controller:  'RoomController'
  })
  .otherwise({
      redirectTo: '/welcome'
  });
}]);