myApp.controller('WelcomeController', 
	function($scope, $location, $firebaseArray, FIREBASE_URL) {

  var ref = new Firebase(FIREBASE_URL + '/rooms');

	$scope.makeRoom = function() { 
    var roomName = $scope.room.make;    
    var roomRef = new Firebase(FIREBASE_URL + '/rooms/' + roomName);
    var roomAry = $firebaseArray(roomRef);    

    roomAry.$add({
      name: roomName,
      date: Firebase.ServerValue.TIMESTAMP
    })
    .then(function(roomRef){
      $location.path('/room/' + roomName);
    });
  } // add room

  $scope.joinRoom = function() {
    ref.child($scope.room.join).once('value', function(snapshot) {
      var exists = (snapshot.val() !== null);
      if (exists) {
        $scope.$apply($location.path('/room/' + $scope.room.join));
      } else {
        $scope.$apply($scope.message = 'sorry, no room found with that name');
      }
    });
  } // join room
});