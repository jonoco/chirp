var myApp = angular.module('myApp', 
  ['ngRoute', 'firebase'])
.constant('FIREBASE_URL', 'https://chirpapp.firebaseio.com/');

//var appControllers = angular.module('appControllers', []);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/welcome.html',
    controller:  'WelcomeController'  
  })
  .when('/room/:room', {
    templateUrl: 'views/room.html',
    controller:  'RoomController'
  })
  .otherwise({
      redirectTo: '/'
  });
}]);