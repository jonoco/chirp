myApp.controller('WelcomeController', 
	function($scope, $firebase, $location, $log, FIREBASE_URL) {

	var ref = new Firebase(FIREBASE_URL + '/rooms');
	var roomInfo = $firebase(ref);

  $scope.makeInput = false;
  $scope.joinInput = false;

	$scope.makeRoom = function() {
    roomInfo.$push({
      name: $scope.room.name,
      date: Firebase.ServerValue.TIMESTAMP
    }).then(function(data) {
      console.log(data);
    });
  } // addroom

  $scope.joinRoom = function() {
    // join room
  }

  $scope.showJoin = function() {
    $scope.makeInput = false;
    $scope.joinInput = !$scope.joinInput;
  }
  
  $scope.showMake = function() {
    $scope.joinInput = false;
    $scope.makeInput = !$scope.makeInput;
  }
});