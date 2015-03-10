myApp.controller('RoomController', 
	function($scope, $firebaseArray, $location, $routeParams, FIREBASE_URL) {
  
  $scope.room = {};
  $scope.room.name = $routeParams.room;

	var ref = new Firebase(FIREBASE_URL + '/rooms/' + $scope.room.name + '/logs');
  var logAry = $firebaseArray(ref);

  logAry.$loaded().then(function(data) {
    $scope.logs = logAry;
  }); // room logs loaded

	$scope.addLog = function() {
    logAry.$add({
      text: $scope.log.text,
      date: Firebase.ServerValue.TIMESTAMP
    }).then(function() {
      var chat = $('.chat-window');
      chat.scrollTop(chat[0].scrollHeight);      

      $scope.log.text = '';
    });
  } // addlog

});