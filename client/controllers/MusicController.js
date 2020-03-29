angular.module('EpsilonPi')
.controller('MusicCtrl', function MusicCtrl($scope, $http, $location, $routeParams, MusicService, AudioPlayer/*, Tracks*/, buttonConfig) {
    console.log('musicController loaded...');

    $scope.artists = ['morpheus', 'neo', 'trinity'];
    $scope.genres = [];

    this.activeClass = buttonConfig.activeClass || 'active';
    this.toggleEvent = buttonConfig.toggleEvent || 'click';

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

    $scope.getMusics = function(){
        $http.get('/api/musics').success(function(response){
            $scope.musics = response;
        });
    };
    
    $scope.getMusic = function(){
        var id = $routeParams.id;
        $http.get('/api/musics/'+id).success(function(response){
            $scope.music = response;
        });
    };

    $scope.uploadMusic = function(music){
        console.log(music)
        // $http.post("/api/musics/").success(function(response){
        //   window.location.href='#/musics';
        // }).error(function(error){})
        // $http.post('/api/musics/', music).success(function(response){
        //     // window.location.href='#/musics';
        // });
    };

    $scope.updateMusic = function(){
        var id = $routeParams.id;
        $http.put('/api/musics/'+id, $scope.music).success(function(response){
            window.location.href='#/musics';
        });
    };

    $scope.removeMusic = function(id){
        $http.delete('/api/musics/'+id).success(function(response){
            window.location.href='#/musics';
        });
    };

    $scope.suggestArtists = function() {
        $scope.example = {
            word: /^\s*\w*\s*$/
        };
        $http.get("/api/artists?stage_name__regex=/^"+ $scope.artists +"/i").success(function(response){
            angular.forEach(response, function(e, i){
                console.log(e)
                $('input.autocomplete').autocomplete('', {
                    data: {
                        // e['stage_name']: e.picture
                    }
                });
                $scope.artists.push(e.name);
            })
        })
    };

    $scope.getArtworkUrl = function() {
        $http.get('/api/musics/', $routeParams.id).success(function(response){
            return response[0]['album_art'];
        });
    };

    $scope.getMusicSrc = function() {
        $http.get('/api/musics/', $routeParams.id).success(function(response){
            return response[0].url;
        });
    };

    $scope.play = function(attrs) {
        console.log(attrs);
        // when the button is clicked the particular music is added to the top of the play queue
        // var audio-player = new MusicPlayer();
        // audio-player.setSrc(music);
    };

    $scope.playMusic = function() {
        AudioPlayerCtrl.initializePlayer();
        AudioPlayerCtrl.play();
    };

    $scope.getGenre = function() {
        $http.get('/api/genres').success(function(response){
            angular.forEach(response, function(e){
                $scope.genres.push(e);
            })
            // return response;
        });
    };
    
    $scope.change = function(e) {
        console.log(e)
        console.log(image_file)
    };

    $scope.onDropMusicComplete = function(data, evt) {
        console.log(data);
    }

});
