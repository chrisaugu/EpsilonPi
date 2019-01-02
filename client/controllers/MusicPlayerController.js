angular.module('EpsilonPi')
.controller('MusicPlayerCtrl', ["$scope", "$http"/*, "MusicPlayer"*/, function MusicCtrl($scope, $http/*, MusicPlayer*/) {

  $scope.playerInitialized = false;
  $scope.state = null;
  $scope.playing = true;
  $scope.stopped = true;
  $scope.paused = true;
  var myMusic;

  $scope.initializePlayer = function() {
    console.log("Initializing MusicPlayer")
    myMusic = new MusicPlayer();
    $scope.playerInitialized = true;
    myMusic.setSrc("/assets/502081975.mp3");
    $scope.showDuration = myMusic.player.duration;
    $scope.showCurrentTime = myMusic.player.showCurrentTime;
  };
  $scope.updateCurrentTime = function(a) {
    var duration = a;
    var min = Math.floor(duration / 60);
    if (min < 10) {
      min = "0" + min;
    }
    var diff = Math.floor(duration % 60);
    if (diff < 10) {
      diff = "0" + diff;
    }
    var _duration = min + ":" + diff;
    return _duration;
  };
  $scope.updateVolume = function(volume) {
    if (volume == undefined) {
      volume = 0
    } else {
      volume /= 100; // convert to percentage
    }
    
    myMusic.setVolume(volume);
  };
  $scope.pause = function() {
    // if ($scope.paused){
    //   $scope.stopped = false;
    //   $scope.paused = true;
    //   $scope.playing = false;
    // }
    myMusic.pause();
  };
  $scope.play = function(src){
    // if ($scope.stopped || $scope.pause){
    //   $scope.stopped = false;
    //   $scope.pause = false;
    //   $scope.playing = true;
    // }
    if (!this.playerInitialized) {
      MusicPlayerCtrl.initializePlayer();
      myMusic.setSrc("/assets/502081975.mp3");
    }
    if (!myMusic instanceof MusicPlayer) {
    }
    try {
      myMusic.play();
    } catch (e) {
      alert("EpsilonPi Play Error: " + e);
    }
  };
  $scope.stop = function() {
    // if ($scope.playing || $scope.paused) {
    //   $scope.paused = false;
    //   $scope.stopped = true;
    //   $scope.playing = false;
    // }
    myMusic.stop();
  };
  $scope.desc_size = function(b){
    return b.match(/^.*Size: (.+?) MB/i)[1]
  };
  $scope.playMusic = function() {
    MusicPlayerCtrl.initializePlayer();
    MusicPlayerCtrl.play();
  };
}]);