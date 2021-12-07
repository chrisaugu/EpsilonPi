angular.module('EpsilonPi').factory('API', function($http, $resource, API_CONFIG) {
  return {
    Artists: function() {
      return $resource(API_CONFIG.url + '/api/artists', {}, {
        get: {method: 'GET', cache: false, isArray: false},
        save: {method: 'PPOST', cache: false, isArray: false},
        update: {method: 'PUT', cache: false, isArray: false},
        delete: {method: 'DELETE', cache: false, isArray: false},
      })
    },
    getArtistById: function(id) {
      return $http.get(API_CONFIG.url + '/api/artists/' + id);
    },
    getArtists: function() {
      return $http.get(API_CONFIG.url + '/api/artists');
    },
    getMusicById: function(id) {
      return $http.get(API_CONFIG.url + '/api/musics/' + id);
    },
    getMusics: function() {
      return $http.get(API_CONFIG.url + '/api/musics');
    },
    getFeed: function() {
      return $http.get(API_CONFIG.url + '/api/feed');
    },
    getMediaById: function(id) {
      return $http.get(API_CONFIG.url + '/api/media/' + id);
    },
    likeMedia: function(id) {
      return $http.post(API_CONFIG.url + '/api/like', { mediaId: id });
    },
    savePlaylist: function(options) {
      return $http.post(API_CONFIG.url + '/api/playlists', options);
    },
    deletePlaylist: function(id) {
      return $http.delete(API_CONFIG.url + '/api/playlists/' + id);
    },
    getPlaylists: function() {
      return $http.get(API_CONFIG.url + '/api/playlists');
    },
    getPlaylistById: function(id, options) {
      return $http.get(API_CONFIG.url + '/api/playlists/' + id, options);
    },
    getUserPlaylists: function(options) {
      return $http.get(API_CONFIG.url + '/api/user/' + options.userID, {
        populate: 'playlists'
      });
    },
  }
});