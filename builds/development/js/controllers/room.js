myApp.controller('RoomController', 
	function($scope, $firebaseArray, $location, $routeParams, FIREBASE_URL) {
  
  $scope.room = {};
  $scope.user = {};
  $scope.room.name = $routeParams.room.replace(/-/g, ' ');
  $scope.user.name = 'Guest' + Math.floor(Math.random() * 10000);

	var ref = new Firebase(FIREBASE_URL + '/rooms/' + $scope.room.name + '/logs');
  var logAry = $firebaseArray(ref);

  logAry.$loaded().then(function(data) {
    $scope.logs = logAry;
  }); // room logs loaded

	$scope.addLog = function() {
    logAry.$add({
      text: $scope.log.text,
      user: $scope.user.name,
      date: Firebase.ServerValue.TIMESTAMP
    }).then(function() {
      $scope.log.text = '';
    });
  } // addlog

});