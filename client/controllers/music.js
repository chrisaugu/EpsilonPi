angular.module('EpsilonPi')
.controller('MusicCtrl', function MusicCtrl($scope, $http, $location, $routeParams) {
  $scope.genres = [
    { name: 'Suspense', discription: '' },
    { name: 'Drama', discription: '' },
    { name: 'Romance', discription: '' },
    { name: 'NonFiction', discription: '' },
    { name: 'Other', discription: '' }
  ];

  $scope.music = {
    genre: $scope.genres[2].name
  }

  $scope.items = ['settings', 'home', 'other'];
  $scope.selection = $scope.items[0];

  function SettingsController1() {
    this.name = "John Smith";
    this.contacts = [
      {type: 'phone', value: '408 555 1212'},
      {type: 'email', value: 'john.smith@example.org'} ];
  }
 
  SettingsController1.prototype.greet = function() {
    alert(this.name);
  };
 
  SettingsController1.prototype.addContact = function() {
    this.contacts.push({type: 'email', value: 'yourname@example.org'});
  };
 
  SettingsController1.prototype.removeContact = function(contactToRemove) {
    var index = this.contacts.indexOf(contactToRemove);
    this.contacts.splice(index, 1);
  };
 
  SettingsController1.prototype.clearContact = function(contact) {
    contact.type = 'phone';
    contact.value = '';
  };
  console.log('musicController loaded...');

  $scope.getMusics = function(){
    $http.get('/api/musics').success(function(response){
      $scope.musics = response;
    });
  }

  $scope.getMusic = function(){
    var id = $routeParams.id;
    $http.get('/api/musics/'+id).success(function(response){
      $scope.music = response;
    });
  }

  $scope.addMusic = function(music){
    $http.post('/api/musics/', music).success(function(response){
      window.location.href='#/musics';
    });
  }

  $scope.updateMusic = function(){
    var id = $routeParams.id;
    $http.put('/api/musics/'+id, $scope.music).success(function(response){
      window.location.href='#/musics';
    });
  }

  $scope.removeMusic = function(id){
    $http.delete('/api/musics/'+id).success(function(response){
      window.location.href='#/musics';
    });
  }

  $scope.suggestArtists = function(query) {
    $scope.example = {
      word: /^\s*\w*\s*$/
    };

    $http.get('/api/artist', query).success(function(response){
      $scope.artists = response;
    })
  };
  
  $scope.fetch = function() {
    $scope.code = null;
    $scope.response = null;

    $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
      then(function(response) {
        $scope.status = response.status;
        $scope.data = response.data;
      }, function(response) {
        $scope.data = response.data || "Request failed";
        $scope.status = response.status;
    });
  };

  $("#music").on('change', function() {
    var self = this;
    if ($(this).val()) {
      if (this.files && this.files[0]) {
        var m = new FileReader;
        m.addEventListener("load", function(l) {
          var N = l.target.result;
          $("#player").attr("src", N).attr("controls", true);
          // $scope.music = {
          //   image_file: l.target.result
          // }
        });
        m.readAsDataURL(this.files[0])
      }
    };
  });

  $scope.change = function() {
    console.log("this")
  }
  
  $scope.uploadMusic = function(){
    console.log($scope.music)
    // $http.post("/api/musics/").success(function(response){
    //   window.location.href='#/musics';
    // }).error(function(error){})
  }

});