angular.module('EpsilonPi')
.controller('PostsController', function ($scope, $http, $location, $routeParams) {
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