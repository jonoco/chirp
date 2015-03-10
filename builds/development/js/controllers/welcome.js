myApp.controller('WelcomeController', 
	function($scope, $location, $firebaseArray, FIREBASE_URL) {

	$scope.makeRoom = function() { 
    var roomName = $scope.room.name;
    var roomRef = new Firebase(FIREBASE_URL + '/rooms/' + roomName);
    var roomAry = $firebaseArray(roomRef);    

    roomAry.$add({
      name: roomName,
      date: Firebase.ServerValue.TIMESTAMP
    })
    .then(function(roomRef){
      console.log('success');
      $location.path('/room/' + roomName);
    });
  } // add room

  $scope.joinRoom = function() {
    // join room
  }
});