angular.module('EpsilonPi')
  .factory('API', function($http) {

    return {
      getArtistById: function(id) {
        return $http.get('http://localhost:3000/api/artists/' + id);
      },
      getArtists: function() {
        return $http.get('http://localhost:3000/api/artists');
      },
      getMusicById: function(id) {
        return $http.get('http://localhost:3000/api/musics/' + id);
      },
      getMusics: function() {
        return $http.get('http://localhost:3000/api/musics');
      },
      getFeed: function() {
        return $http.get('http://localhost:3000/api/v1/feed');
      },
      getMediaById: function(id) {
        return $http.get('http://localhost:3000/api/v1/media/' + id);
      },
      likeMedia: function(id) {
        return $http.post('http://localhost:3000/api/v1/like', { mediaId: id });
      }
    }

  });