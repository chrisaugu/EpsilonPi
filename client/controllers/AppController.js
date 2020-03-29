var EpsilonPi = angular.module('EpsilonPi');

EpsilonPi.controller('MainCtrl', function($scope, $window, $rootScope, $http, $location, API_CONFIG, arrayToSentence, ngDialog) {
    console.log('EpsilonPiController loaded...');
    
    var isLoggedin = false;
    $scope.showModal = false;
    $scope.currentUser = {
        username: 'kitten',
        picture: "http://localhost/christianaugustyn/images/DSCF0811.jpg"
    }

    $scope.isAuthenticated = function() {
        return isLoggedin;
        // return $auth.isAuthenticated();
    };

    $scope.linkInstagram = function() {
        // connect email account with instagram
        $auth.link('instagram')
        .then(function(response) {
            $window.localStorage.currentUser = JSON.stringify(response.data.user);
            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        });
    };

    $scope.instagramLogin = function() {
        $auth.authenticate('instagram')
        .then(function(response) {
            $window.localStorage.currentUser = JSON.stringify(response.data.user);
            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        })
        .catch(function(response) {
            console.log(response.data);
        });
    };

    $scope.emailLogin = function() {
        $auth.login({ email: $scope.email, password: $scope.password })
        .then(function(response) {
            $window.localStorage.currentUser = JSON.stringify(response.data.user);
            $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        })
        .catch(function(response) {
            $scope.errorMessage = {};
            angular.forEach(response.data.message, function(message, field) {
            $scope.loginForm[field].$setValidity('server', false);
            $scope.errorMessage[field] = response.data.message[field];
            });
        });
    };

    $scope.signInWithFb = function() {
        var dialogOptions;
        isLoggedin = true;

        var start = false;
        var fabLoginParams = {
            clientId: API_CONFIG.fbID,
            code: 'code',
            redirectUri: API_CONFIG.appUrl
        };
        // Restangular.setDefaultHeaders({
        //  'x-key': API_CONFIG.key,
        //  'x-app-version': API_CONFIG.version
        // });
        // var user = {};
        $http.post(angular.toJson(fabLoginParams))
        $http.get('/api/auth/facebook')
        .then(function resolved(data) {
            console.log("Logging in...")
            isLoggedin = true;
            dialogOptions = {
                template: "views/notifier.html",
                // controller: "LoginCtrl",
                appendClassName: "xsm-ngdialog xuser-profile-dialog login-dialog",
                data: {
                    icrop: "icrop"
                }
            };
            ngDialog.open(dialogOptions);
            // return $q.reject('existed')
        },
        function reject(e) {
            dialogOptions = {
                template: "views/notifier.html",
                // controller: "LoginCtrl",
                appendClassName: "login-dialog",
                data: {
                    message: e
                }
            };
            ngDialog.open(dialogOptions);
            // return true;
        });
    };

    $scope.showShareDialog = function (icrop) {
        var dialogOptions;

        dialogOptions = {
            template: "views/shareDialog.html",
            controller: "ShareDialogController",
            appendClassName: "sm-ngdialog share-icrop-dialog",
            data: {
                icrop: "icrop"
            }
        };

        ngDialog.open(dialogOptions);
    };

    $scope.arrayToSentence = function(arr, opts) {
        return arrayToSentence.arrayToSentence(arr, opts);
    };

    $scope.openMusicPlayer = function() {
        return true;
    };
});

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

EpsilonPi.controller("SearchController", function SearchController( $scope, $http, $document, $location) {
    $scope.title = $document[0].title;
    $scope.windowTitle = angular.element(window.document)[0].title;
    var term;

    $scope.doSearch = function(){
        if ($scope.searchQuery !== '' && !angular.isUndefined($scope.searchQuery)) {
            term = $scope.searchQuery;
            // getSearchResults();
            $location.path("/search");
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
});

EpsilonPi.controller('MostDownloadable', ["$scope", "$http", function($scope, $http) {
    $scope.getMostDownloadableMusics = function(){
        $http.get('/api/musics/most_downloadable').success(function(response){
            $scope.most_downloadable = response;
        });
    };
}]);

EpsilonPi.controller('PostsController', ['$scope','$http','$location','$routeParams', 
    function($scope, $http, $location, $routeParams) {
        console.log('PostsController loaded...');

        $scope.getPosts = function(){
            $http.get('/api/posts').success(function(response){
                $scope.posts = response;
            });
        };

        $scope.getPost = function() {
            var id = $routeParams.id;
            $http.get('/api/posts/' + id).success(function (response) {
                $scope.post = response;
            })
        };

        $scope.addPost = function(){
            console.log($scope.post);
            $http.post('/api/posts/', $scope.post).success(function(response){
                $location.path('/posts');
            });
        };

        $scope.updatePost = function(){
            var id = $routeParams.id;
            $http.put('/api/posts/' + id, $scope.post).success(function(response){
                $location.path('/posts');
            });
        };

        $scope.deletePost = function(id){
            $http.delete('/api/posts/' + id).success(function(response){
                $location.path('/posts');
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
EpsilonPi.controller("voteController", function($scope, /*angularFireCollection, firebase_url,*/ $rootScope, $route) {

    // $rootScope.techniques = techniques;

    $scope.Math = window.Math;
    // var firebase_init = function () {
    //     $scope.pictures = new Firebase(firebase_url.base_url);
    //     $scope.users = new Firebase(firebase_url.users);
    // };
    // firebase_init();
    // $scope.pictures.once("value", function (snapshot) {
    //     $scope.uiset = snapshot.val();
    //     $scope.$apply();
    // });
    //
    // $scope.users.once("value", function (snapshot) {
    //     $scope.participants = Object.keys(snapshot.val()).length-1;
    //     $scope.$apply();
    // });

    $scope.refreshRanking = function(){
        $route.reload();
    };

    function expectedScore(Ra, Rb) {
        return parseFloat((1 / (1 + Math.pow(10, (Rb - Ra) / 400))).toFixed(2));
    }
    $scope.vote = function(Ra, Rb){
        $scope.score = expectedScore(Ra, Rb);
    };
    $scope.draw = function (Ra, Rb) {
        return true;
    };

    $scope.finished = true;
    $scope.rankingAvailable = true;
    $scope.description = true;

    // activate_nav(".stats");
});

EpsilonPi.controller('ListController', ['$scope', '$http', function ($scope, $http, List) {
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
}]);

EpsilonPi.controller('ChartsController', ['$scope', '$http', function ($scope, $http, List) {
    $http.get('../client/js/chatrooms.json').success(function (data) {
        $scope.chatrooms = data.public_chatrooms;

        for (var i = 0; i < chatrooms.length; i++) {
            if (chatrooms[i].id === item.id) {
                chatroooms[i] = item;
                return;
            }
        }
    });
}]);

EpsilonPi.controller('ShareDialogController', ['$scope', function ($scope) {
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
}]);

EpsilonPi.controller('AboutController', ['$scope', '$http', function ($scope, $http) {
    $http.get('js/info.json').success(function (data) {
        $scope.credit = data;

        $scope.phone = {
            phoneNumber : '+67570523228'
        };

        $scope.dialNumber = function (number) {
            window.open('tel:' + number, '_system');
        }
    });
}]);

EpsilonPi.controller('EmailController', function ($scope) {
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

EpsilonPi.controller("LoginController", [function LoginCtr($scope, $location, API, setCreds){
    $scope.submit = function() {
        $scope.sub = true;
        var postData = {
            "username": $scope.username,
            "password": $scope.password
        };
        API.login({}, postData, 
            function success(response){
                console.log("Success " + JSON.stringify(response));
                if (response.authenticated) {
                    setCreds($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = "Login failed";
                }
            },
            function error(errorResponse) {
                console.log("Error: " + JSON.stringify(errorResponse));
            }
        );
    }
}])

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