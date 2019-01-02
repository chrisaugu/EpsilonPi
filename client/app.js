//Creating angular module Dependencies
// var io = require('socket.io')
var EpsilonPi = angular.module('EpsilonPi', [
    'ngRoute',
    'ngSanitize',
    'ngMessages',
    // 'ui.bootstrap',
    // 'ui.router', "ui.select", 'ui.sortable', 
    'ngDialog',
    // 'Restangular',
    // 'chromeStorage',"720kb.socialshare", 'ngAnimate', 'ngScrollable','angular-clipboard'
])
.constant('API_CONFIG', {
    // url: 'https://api.sticker.market/v1/',
    url: 'http://localhost:7000/',
    key: '2578a5c404dfe67c221046bbb582ccb1bfad2458433186346db1f77b42c46ef5',
    fbID: "1201391659916237",
    googleID: "517419905583-3j1oohkatbjoic53pdg0tkl8v5hgtovt.apps.googleusercontent.com",
    appUrl: "https://sticker.market/",
    version: "1.2.1",
    users: "https://uiranking.firebaseio.com/users"
})
.constant("creator", {
    name: "Christian J.F. Augustyn",
})

// .config(['$stateProvider', function ($stateProvider) {
//     $stateProvider.state("home", {
//         url: "/",
//         templateUrl: 'templates/home.html',
//         controller: 'MainController'
//     }).state("login", {
//         url: "/login?fb_code&google_code",
//         templateUrl: "templates/login.html",
//         controller: "LoginController"
//     });
// }])

//Configuring router
.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider){
    // $locationProvider.html5Mode(true); //make our app's content SEO friendly!
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
    var resolveProjects = {
        projects: function (Projects) {
            return Projects.fetch();
        }
    };
	$routeProvider
    .when('/', {
		controller:'HomeCtrl',
		templateUrl: 'views/home.html',
        // resolve: resolveViews
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
		templateUrl: 'views/musics.html'
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
    .when("/info", {
        templateUrl: "views/info.html",
        controller: "infoController"
    })
    .when("/rating", {
        templateUrl: "views/vote.html",
        controller: "voteController"
    })
    .when("/legal", {
        templateUrl: "views/description.html",
        controller: "descriptionController"
    })
    .when('/charts', {
        controller:'ChartsCtrl',
        templateUrl: 'views/charts.html'
    })
    .when('/upload', {
        controller:'MusicCtrl',
        templateUrl: 'views/upload_music.html'
    })
    .when('/user',{
        controller:'UsersCtrl',
        templateUrl: 'views/user.html'
    })
    .when('/user/details/:id',{
        controller:'UsersCtrl',
        templateUrl: 'views/user_profile.html'
    })
    .when('/user/register',{
        controller:'UsersCtrl',
        templateUrl: 'views/add_user.html'
    })
    .when('/user/edit/:id',{
        controller:'UsersCtrl',
        templateUrl: 'views/edit_profile.html'
    })
    .when('/vote', {
        controller: "voteController",
        templateUrl: "views/vote.html"
    })
    .when('/projects', {
      controller:'ProjectListController as projectList',
      templateUrl:'list.html',
      resolve: resolveProjects
    })
    .when('/edit/:projectId', {
      controller:'EditProjectController as editProject',
      templateUrl:'detail.html',
      resolve: resolveProjects
    })
    .when('/new', {
      controller:'NewProjectController as editProject',
      templateUrl:'detail.html',
      resolve: resolveProjects
    })
    .otherwise({
        redirectTo: '/'
    })
}])

.run(['$rootScope', function($rootScope) {
    $rootScope.notify = function (type, message, persist) {
        $rootScope.$broadcast("notify", {
            type: type,
            message: message,
            persist: persist
        });
    };
}])
.config(["ngDialogProvider"/*, "uiSelectConfig"*/, function (ngDialogProvider/*, uiSelectConfig*/) {
    ngDialogProvider.setDefaults({
        className: "ngdialog-theme-default sm-ngdialog",
        closeByNavigation: true,
        trapFocus: false
    });
    // uiSelectConfig.theme = "bootstrap";
    // uiSelectConfig.searchEnabled = false;
    // uiSelectConfig.resetSearchInput = true;
}]);

// angular.bootstrap(document, ['EpsilonPi']);