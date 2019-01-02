var EpsilonPi = angular.module('EpsilonPi');

EpsilonPi.controller("HeaderController",
    ["$scope", /*"ngDialog",*/ "$window", 
    function HeaderController( $scope, ngDialog, $window ) {
        $scope.dialogOpened = false;
        var userProfileDialog = null;
        // $scope.openUserProfile = function(){
        //     $scope.dialogOpened = true;
        //     var dialogOptions;
        //     dialogOptions = {
        //         template: "templates/dialog/userProfileDialog.html",
        //         controller: "UserProfileDialogController",
        //         appendClassName: "sm-ngdialog user-profile-dialog",
        //         data: {
        //             userData: $scope.user.userData,
        //             logOutFunction: $scope.user.signOut
        //         }
        //         /*data:{
        //          user_type:$scope.user_type
        //          }*/
        //     };
    
        //     userProfileDialog = ngDialog.open(dialogOptions);
        //     userProfileDialog.closePromise.then(function (result) {
        //          if (result.value && result.value._id) {
        //          if (result.value.privacy == "public") {
        //          $scope.$broadcast("pubicGifUploaded",result.value);
        //          } else {
        //          var gifData = UserDashboardService.parseUserGifItemData(result.value);
        //          $scope.gifList.gifs.push(gifData);
        //          }
        //          }
    
        //         $scope.dialogOpened = false;
        //     });
            
        // };
        // $scope.menu = false;
        // $scope.openUsageTipDialog = function( slide ){
        //     $scope.menu = false;
        //     var dialogOptions;
        //     dialogOptions = {
        //         template: "templates/dialog/firstTimeUseDialog.html",
        //         controller: "firstTimeUseDialogController",
        //         appendClassName: "sm-ngdialog first-time-use-dialog",
        //         showClose: false,
        //         closeByNavigation: false,
        //         data:{
        //             selectStickers: $scope.selectStickers,
        //             selectGifs: $scope.selectGifs,
        //             selectEmojis: $scope.selectEmojis,
        //             activeSlide: slide,
        //             fromInfo: true
        //         }
        //     };    
        //     var firstTimeUseDialog = ngDialog.open(dialogOptions);
        // };
        $scope.toggleInfoMenu = function ( menu, toggled ) {
            if ( angular.isUndefined( toggled ) ) {
                toggled = !$scope.menu;
            }
            $scope.menu = toggled;
        };
        $scope.isAuthenticated = function() {
            // return $auth.isAuthenticated();
        };
        $scope.logout = function() {
            // $auth.logout();
            delete $window.localStorage.currentUser;
        };
    }]
);

EpsilonPi.controller(
    "FooterController",
    ["$scope", function FooterController( $scope ) {
    }]
);

EpsilonPi.controller(
    "SidebarController",
    ["$scope", function SidebarController( $scope ) {
    }]
);

EpsilonPi.controller(
    "SidenavController",
    ["$scope", function SidenavController( $scope ) {
        $scope.selected = true;
        $scope.select = function(ev) {
            $scope.selected = true;
        }
    }]
);

EpsilonPi.controller(
    "SearchController",
    ["$scope", "$http", "$document", function SearchController( $scope, $http, $document ) {
        $scope.title = $document[0].title;
        $scope.windowTitle = angular.element(window.document)[0].title;
        var term;

        $scope.doSearch = function(){
            if ($scope.searchQuery !== '' && !angular.isUndefined($scope.searchQuery)) {
                term = $scope.searchQuery;
                // getSearchResults();
                document.location.href = "#/search";
            }
        };
        $scope.getSearchResults = function() {
            $http.get('/api/search?q=' + term + '&field=' + $scope.field).success(function(response){
                $scope.search_results = response;
            });
        };
        $scope.getRecentSearches = function(){
            $http.get('/api/search/recent').success(function(response){
                $scope.recent_searches = response;
            });
        };
        $scope.toggleFilterForm = function() {
            if (this.showFilterForm) {
                this.showFilterForm = false;
            }
            else {
                this.showFilterForm = true;
            }
        };
    }]
);

EpsilonPi.controller('MostDownloadable', ["$scope", "$http", function($scope, $http) {
    $scope.getMostDownloadableMusics = function(){
        $http.get('/api/musics/most_downloadable').success(function(response){
            $scope.most_downloadable = response;
        });
    };
}]);

EpsilonPi.controller('PostsController', [
  '$scope',
  '$http',
  '$location',
  '$routeParams', function ($scope, $http, $location, $routeParams) {
    console.log('PostsController loaded...');

    $scope.getPosts = function(){
      $http.get('/api/posts').success(function(response){
        $scope.posts = response;
      });
    }

    $scope.getPost = function() {
      var id = $routeParams.id;
      $http.get('/api/posts/' + id).success(function (response) {
        $scope.post = response;
      })
    }

    $scope.addPost = function(){
      console.log($scope.post);
      $http.post('/api/posts/', $scope.post).success(function(response){
        window.location.href='#/posts';
      });
    }

    $scope.updatePost = function(){
      var id = $routeParams.id;
      $http.put('/api/posts/' + id, $scope.post).success(function(response){
        window.location.href='#/posts';
      });
    }

    $scope.deletePost = function(id){
      $http.delete('/api/posts/' + id).success(function(response){
        window.location.href='#/posts';
      });
    }
  }
]);

EpsilonPi.controller('NewPostController', function ($location, posts) {
    var editPost = this;
    editPost.save = function () {
        posts.$add(editPost.post).then(function (data) {
            $location.path('/');
    })
    }
});

EpsilonPi.controller('EditPostController',
    function ($location, $routeParams, posts) {
        var editPost = this;
        var postId = $routeParams.postId,
            postIndex;

        editPost.posts = posts;
        postIndex = editPost.posts.$indexFor(postId);
        editPost.post = editPost.posts[postIndex];

        editPost.destroy = function () {
            editPost.posts.$remove(editPost.post).then(function (data) {
                $location.path('/');
        });
    };

    editPost.save = function() {
        editPost.posts.$save(editPost.post).then(function (data) {
            $location.path('/');
        });
    };
});

EpsilonPi.controller('chatController', function (views) {
    var chatViews = this;
    chatViews.views = views;
});

EpsilonPi.controller('repeatController', function($scope) {
    $scope.friends = [
        {name:'Dolly', age:16, gender:'girl', uri:'/10001232434375', school:'Tusbab', online: true},
        {name:'John', age:25, gender:'boy', uri:'/10001232439999', school:'HSPS', online: false},
        {name:'Jessie', age:30, gender:'girl', uri:'/10001232435543', school:'Lutheran Day', online: true},
        {name:'Johanna', age:28, gender:'girl', uri:'/10001232439340', school:'HSPS', online: false},
        {name:'Joy', age:15, gender:'girl', uri:'/10001232431682', school:'Jomba', online: false},
        {name:'Mary', age:28, gender:'girl', uri:'/10001232430902', school:'HSPS', online: true},
        {name:'Peter', age:95, gender:'boy', uri:'/10001232431022', school:'Tusbab', online: false},
        {name:'Sebastian', age:50, gender:'boy', uri:'/10001232435567', school:'Brahman', online: false},
        {name:'Erika', age:27, gender:'girl', uri:'/10001232434893', school:'Kusbau', online: true},
        {name:'Patrick', age:40, gender:'boy', uri:'/10001232430183', school:'Jomba', online: true},
        {name:'Samantha', age:60, gender:'girl', uri:'/10001232438294', school:'Tusbab', online: true}
    ];
});

EpsilonPi.controller('BeerCounter', function($scope, $locale) {
  $scope.beers = [0, 1, 2, 3, 4, 5, 6, 7];
  if ($locale.id == 'en-us') {
    $scope.beerForms = {
      0: 'no beers',
      one: '{} beer',
      other: '{} beers'
    };
  } else {
    $scope.beerForms = {
      0: 'žiadne pivo',
      one: '{} pivo',
      few: '{} pivá',
      other: '{} pív'
    };
  }
});


//Controller for demographic form and userId assignment
EpsilonPi.controller("infoController", ["$scope", "$rootScope", "angularFireCollection", "firebase_url", "$location",
    function ($scope, $rootScope, angularFireCollection, firebase_url, $location) {

        $rootScope.users = new Firebase(firebase_url.users);

        if (!$rootScope.user) {
            $rootScope.user = {};
        }

        $rootScope.users.once("value", function (snapshot) {
            if (!$rootScope.idSaved) {
                if (snapshot.hasChildren()) {
                    var value = snapshot.val();
                    $rootScope.user.id = value.nextId;
                } else {
                    $rootScope.user.id = 1;
                }
                $rootScope.users.child("nextId").set($rootScope.user.id + 1);
                $scope.$apply();
            }
        });

        $scope.submit = function () {
            $rootScope.idSaved = true;
            $rootScope.techniqueId = 0;
            $location.path('/description')
        }
    }
]);

EpsilonPi.controller("descriptionController", ["$scope", "angularFireCollection", "firebase_url", "$rootScope",
 function ($scope, angularFireCollection, firebase_url, $rootScope) {
        $rootScope.technique = techniques[$rootScope.techniqueId].name;
        if ($rootScope.techniqueId + 1 < techniques.length) {
            $rootScope.rankingAvailable = false;
            $rootScope.nextTechnique = techniques[$rootScope.techniqueId + 1].name
        }
        $scope.description = techniques[$rootScope.techniqueId].description;

 }]);

//Controller for showing statistics
EpsilonPi.controller("voteController", ["$scope", "angularFireCollection", "firebase_url", "$rootScope", "$route",
 function ($scope, angularFireCollection, firebase_url, $rootScope, $route) {

        $rootScope.techniques = techniques;


        $scope.Math = window.Math;
        var firebase_init = function () {
            $scope.pictures = new Firebase(firebase_url.base_url);
            $scope.users = new Firebase(firebase_url.users);
        }
        firebase_init();
        $scope.pictures.once("value", function (snapshot) {
            $scope.uiset = snapshot.val();
            $scope.$apply();
        });

        $scope.users.once("value", function (snapshot) {
           $scope.participants = Object.keys(snapshot.val()).length-1;
           $scope.$apply();
        });
     
        $scope.refreshRanking = function(){
            $route.reload();   
        }

        activate_nav(".stats");
 }
]);

//Transforming object to array with a filter
EpsilonPi.filter('object2Array', function () {
    return function (input) {
        var out = [];
        for (i in input) {
            out.push(input[i]);
        }
        return out;
    }
})

var app = angular.module('app.Chatroom', []);

app.controller('ListController', ['$scope', '$http', function ($scope, $http) {
    $http.get('../client/js/chatrooms.json').success(function (data) {
        $scope.chatrooms = data.public_chatrooms;

        for (var i = 0; i < chatrooms.length; i++) {
            if (chatrooms[i].id === item.id) {
                chatroooms[i] = item;
                return;
            }
        }
        $scope.toogleStar = function (item) {
            item.star = !item.star;
        }
    });
}])

app.controller('ShareDialogController', ['$scope', function ($scope) {
    $scope.shareNative = function () {
        if (window.plugins && window.plugins.socialsharing){
            window.plugins.socialsharing.share("", function(){
                console.log("Success")
            },
             function (error) {
                 console.log("Share failed " + error )
             });
        }
        else console.log("Share plugin not available");
    }
}])

app.controller('AboutController', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/info.json').success(function (data) {
        $scope.credit = data;

        $scope.phone = {
            phoneNumber : '+67570523228'
        };

        $scope.dialNumber = function (number) {
            window.open('tel:' + number, '_system');
        }
    });
}])

app.controller('EmailController', function ($scope) {
    $scope.sendFeeback = function () {
        if (window.plugins && window.plugins.emailComposer) {
            window.plugins.emailcomposer.showEmailComposerWithCallback(function(result) {
                console.log("Response -> " + result);
            },
                "Feedback from your App", // Subject
                "", // Body
                ["chrisaugu61@gmail.com"], // To
                null,   // CC
                null,   // BCC
                false,  // isHTML
                null,   // Attachments
                null);  // Attachment Data
        }
    }
});

EpsilonPi.controller('hctrl', function($scope, $http, $location, $routeParams) {
    $scope.addMusic = function() {
        $http.post('/api/musics', $scope.music)
    }
});