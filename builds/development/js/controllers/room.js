myApp.controller('RoomController', 
	function($scope, $firebase, $location, $routeParams, FIREBASE_URL) {

  $scope.room.roomId = $routeParams.roomId;

	var ref = new Firebase(FIREBASE_URL + '/rooms/' + $routeParams.roomId + '/logs');
	var logInfo = $firebase(ref);
  var logObj = $firebase(ref).$asObject();

  logObj.$loaded().then(function(data) {
    $scope.logs = logObj;
  }); // room logs loaded

	$scope.addLog = function() {
    logInfo.$push({
      text: $scope.log.text,
      date: Firebase.ServerValue.TIMESTAMP
    }).then(function() {
      $scope.log.text = '';
    });
  } // addlog
});