// Creating angular module Dependencies
// var io = require('socket.io')
angular.module('EpsilonPi', [
    'ngRoute',
    'ngSanitize',
    'ngMessages',
    'ngDialog', 
    'ngDraggable',
    'ngResource',
    // 'ngAnimate', 
    // 'ngScrollable',
    // 'Restangular', 
    'ui.bootstrap', 
    // 'chromeStorage', "720kb.socialshare", 'angular-clipboard', 'ui.router', "ui.select", 'ui.sortable'
])

//Configuring router
.config(function(/*$stateProvider, */$routeProvider, $locationProvider){
    'use strict';
    // var resolveProjects = {
    //     projects: function (Projects) {
    //         return Projects.fetch();
    //     }
    // };
    var resolveViews = {
        views: function (Views) {
            return Views.fetch();
        }
    };
    var resolveVotes = {
        votes: function (Votes) {
            console.log(Votes.fetch());
            return Votes.fetch();
        }
    };
    var resolveMusics = {
        fetch: function(Musics) {
            console.log("hello")
            return Musics.fetch();
        },
        playlists: function(Musics) {
            return Musics.getPlaylists();
        }
    };

    // $stateProvider.state("home", {
    //     url: "/",
    //     templateUrl: 'templates/home.html',
    //     controller: 'MainController'
    // }).state("login", {
    //     url: "/login?fb_code&google_code",
    //     templateUrl: "templates/login.html",
    //     controller: "LoginController"
    // });

    $routeProvider
    .when('/', {
        controller: 'HomeCtrl',
        templateUrl: 'views/browse.html',
        // resolve: resolveMusics.fetch
    })
    .when('/browse', {
        controller: 'HomeCtrl',
        templateUrl: 'views/browse.html',
        // resolve: resolveMusics.fetch
    })
	.when('/albums', {
        // controller:'AlbumCtrl',
        templateUrl: 'views/albums.html',
        // resolve: resolvealbums
    })
    .when('/albums/details/:id', {
        // controller:'AlbumCtrl',
        templateUrl: 'views/album_details.html'
    })
    .when('/artists', {
		controller: 'ArtistCtrl',
		templateUrl: 'views/artists.html'
	})
	.when('/artists/details/:id', {
		controller: 'ArtistCtrl',
		templateUrl: 'views/artist_details.html'
	})
	.when('/artists/edit/:id', {
		controller:'ArtistCtrl',
		templateUrl: 'views/edit_artist.html'
	})
	.when('/musics', {
		controller:'MusicCtrl',
		templateUrl: 'views/musics.html',
        resolve: resolveMusics
	})
	.when('/musics/details/:id', {
		controller:'MusicCtrl',
		templateUrl: 'views/music_details.html'
	})
	.when('/musics/add', {
		controller:'MusicCtrl',
		templateUrl: 'views/add_music.html'
	})
	.when('/musics/edit/:id', {
		controller:'MusicCtrl',
		templateUrl: 'views/edit_music.html'
	})
    .when('/now_playing', {
        controller:'NowPlayingCtrl',
        templateUrl: 'views/now_playing.html'
        // templateUrl: 'views/detail.html'
    })
    .when('/disclaimer', {
        // controller:'BooksController',
        templateUrl: 'views/dmca_disclaimer.html'
    })
    .when('/search', {
        controller:'SearchController',
        templateUrl: 'views/search.html'
    })
    .when("/about", {
        templateUrl: 'views/about.html'
    })
    .when("/vote", {
        controller: "voteController",
        templateUrl: "views/vote.html",
        resolve: resolveVotes
    })
    .when('/charts', {
        controller:'ChartsCtrl',
        templateUrl: 'views/charts.html'
    })
    .when("/playlists", {
        controller: "PlaylistController",
        // templateUrl: "views/description.html"
        templateUrl: "views/playlist.html",
        resolve: resolveMusics.playlists
    })
    .when("/playlists/details/:id", {
        controller: "PlaylistController",
        // templateUrl: "views/description.html"
        templateUrl: "views/playlist_details.html"
    })
    .when("/login", {
        templateUrl: "views/login.html",
        controller: "LoginController"
    })
    .when('/user',{
        controller:'UserCtrl',
        templateUrl: 'views/user.html'
    })
    .when('/user/edit/:id',{
        controller:'UserCtrl',
        templateUrl: 'views/edit_profile.html'
    })
    .when('/user/register',{
        controller:'UserCtrl',
        templateUrl: 'views/add_user.html'
    })
    .when('/projects', {
      controller:'ProjectListController as projectList',
      templateUrl:'list.html',
      // resolve: resolveProjects
    })
    .when('/edit/:projectId', {
      controller:'EditProjectController as editProject',
      templateUrl:'views/detail.html',
      // resolve: resolveProjects
    })
    .when('/new', {
      controller:'NewProjectController as editProject',
      templateUrl:'views/detail.html',
      // resolve: resolveProjects
    })
    .when('/radio', {
        templateUrl: 'views/lastfm.html'
    })
    .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsController'
    })
    .when('/audio-player', {
        templateUrl: 'views/aOyRYx.html'
    })
    .otherwise({
        // redirectTo: '/'
        template: "<h1>Oops</h1>" + 
        "<p>Sorry, page not found</p>"
    });

    // $locationProvider.html5Mode(true); // make our app's content SEO friendly!
})
.constant('API_CONFIG', {
    // url: 'https://api.sticker.market/v1/',
    url: 'http://localhost:7000',
    key: '2578a5c404dfe67c221046bbb582ccb1bfad2458433186346db1f77b42c46ef5',
    fbID: "1201391659916237",
    googleID: "517419905583-3j1oohkatbjoic53pdg0tkl8v5hgtovt.apps.googleusercontent.com",
    appUrl: "https://sticker.market/",
    version: "1.2.1",
    users: "https://uiranking.firebaseio.com/users",
    appName: "EpsilonPi",
    creator: "Christian Augustyn"
})
.constant('buttonConfig', {
  activeClass: 'active',
  toggleEvent: 'click'
})
// .constant('MY_COLOURS', ['red', 'blue', 'grey'])
// .value('ADMIN_USER', 'admin')
// .value('RoleLookup', { admin: 0, writer: 1, reader: 2 })

// .run(['$rootScope', function($rootScope) {
//     $rootScope.notify = function (type, message, persist) {
//         $rootScope.$broadcast("notify", {
//             type: type,
//             message: message,
//             persist: persist
//         });
//     };
// }])

// .config(["ngDialogProvider"/*, "uiSelectConfig"*/, function (ngDialogProvider/*, uiSelectConfig*/) {
//     ngDialogProvider.setDefaults({
//         className: "ngdialog-theme-default sm-ngdialog",
//         closeByNavigation: true,
//         trapFocus: false
//     });
//     // uiSelectConfig.theme = "bootstrap";
//     // uiSelectConfig.searchEnabled = false;
//     // uiSelectConfig.resetSearchInput = true;
// }]);
.config(['$logProvider', function($logProvider){
    $logProvider.debugEnabled(false);
}]);

// angular.bootstrap(document, ['EpsilonPi']);
