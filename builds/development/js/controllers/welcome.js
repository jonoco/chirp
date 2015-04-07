myApp.controller('WelcomeController', 
	function($scope, $location, FIREBASE_URL) {

  var ref = new Firebase(FIREBASE_URL + '/rooms');
  $scope.join = false;

  $scope.toggle = function() {
    $scope.name = '';
    $scope.message = '';
    $scope.join = !$scope.join;
  }

	$scope.makeRoom = function() { 
    var roomName = replaceSpace($scope.name);  
    
    ref.child(roomName).once('value', function(snapshot) {
      var exists = snapshot.exists();
    
      if (exists) {
        $scope.message = 'sorry, a room already exists with that name';
        $scope.$apply();
      } else {
        ref.child(roomName).set({
          name: roomName,
          date: Firebase.ServerValue.TIMESTAMP
        }, function() {
          $scope.$apply($location.path('/room/' + roomName));
        }); 
  
      }//if
    });//.once
  } // add room

  $scope.joinRoom = function() {
    var roomName = replaceSpace($scope.name);

    ref.child(roomName).once('value', function(snapshot) {
      var exists = snapshot.exists();

      if (exists) {
        $scope.$apply($location.path('/room/' + roomName));
      } else {
        $scope.message = 'sorry, no room found with that name';
        $scope.$apply();
      }// if
    });//.once
  } // join room

  function replaceSpace(string) {
    return string.replace(/ /g, '-'); 
  }
  
});


