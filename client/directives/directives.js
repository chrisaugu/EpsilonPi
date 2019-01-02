angular.module('EpsilonPi')
  .directive("tabs", function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function($scope, $element) {
        var panes = $scope.panes = [];
 
        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
            pane.selected = false;
          });
          pane.selected = true;
        }
 
        this.addPane = function(pane) {
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      },
      template:
        '<div class="tabbable">' +
          '<ul class="nav nav-tabs nav-justified">' +
            '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
              '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
            '</li>' +
          '</ul>' +
          '<div class="tab-content" ng-transclude></div>' +
        '</div>',
      replace: true
    };
  })
  .directive('pane', function() {
    return {
      require: '^tabs',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsController) {
        tabsController.addPane(scope);
      },
      template:
        '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
        '</div>',
      replace: true
    };
  })
  .directive("footerTemplate", function () {
    return {
      restrict: 'E',
      replace: false,
      scope: true,
      templateUrl: "../views/footer.html",
      controller: "FooterController"
    };
  })
  .directive(
    "headerTemplate", [function () {
      return {
        restrict: "E",
        replace: false,
        scope: false,
        templateUrl: "../views/navbar.html",
        controller: "HeaderController"
      }
    }]
  )
  .directive(
    "recentSearchTemplate", [function () {
      return {
        restrict: "E",
        replace: false,
        templateUrl: "../views/recent_search.html",
        scope: true,
        controller: "SearchController"
      }
    }]
  )
  .directive(
    "mostDownloadableTemplate", [function () {
      return {
        restrict: "E",
        templateUrl: "../views/most_downloadable.html",
        replace: false,
        transclude: true,
        scope: true,
        controller: "MostDownloadable"
      }
    }]
  )
  .directive('chatmeNavbar', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {},
      controller: function($scope, $element) {
        var panes = $scope.panes = [];

        $scope.select = function(pane) {
          angular.forEach(panes, function(pane) {
              pane.selected = false;
          });
          pane.selected = true;
        }

        this.addPane = function(pane) {
          if (panes.length == 0) $scope.select(pane);
          panes.push(pane);
        }
      },
      template:
        '<div class="tabbable">' +
        '<ul class="nav nav-tabs">' +
        '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">'+
        '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
        '</li>' +
        '</ul>' +
        '<div class="tab-content" ng-transclude></div>' +
        '</div>',
      replace: true
    };
  })
  .directive('pane3', function() {
    return {
      require: '^chatme-navbar',
      restrict: 'E',
      transclude: true,
      scope: { title: '@' },
      link: function(scope, element, attrs, tabsController) {
          tabsController.addPane(scope);
      },
      template:
      '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
      '</div>',
      replace: true
    };
  })
  .directive('sidenavTemplate', function() {
    return {
      restrict: 'E',
      templateUrl: "../views/sidenav.html",
      scope: false,
      controller: "SidenavController"
    };
  })
  .directive('sidebarTemplate', function() {
    return {
      restrict: 'E',
      templateUrl: "../views/sidebar.html",
      scope: true,
      controller: "SidebarController"
    };
  })
  .directive("loadingScreen", [function () {
    return {
      restrict: "E",
      replace: true,
      templateUrl: "../views/loading_screen.html",
      link: function ( $scope, $element, attrs ) {
        $element.addClass( "loading-screen" );
      }
    };
  }])
  .directive('suggestPanel', function(){
    return {
      restrict: 'E',
      transclude: true,
      scope: true,
      templateUrl: "../views/suggest_panel.html",
      controller: "SuggestionController"
    };
  })
  .directive('musicPlayer', [function(){
    return {
      restrict: 'E',
      scope: true,
      replace: false,
      templateUrl: "../views/player.html",
      controller: "MusicPlayerCtrl"
    }
  }])
  .directive('isActive', [function() {
    
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        if (element.href == location.hash) {
          element.className = "active";
        }
      }
    }
  }])
  .directive('notificationTemplate', function() {
    return {
      restrict: 'E',
      transclude: true,
      replace: false,
      template: ' <div class="alert alert-{{type}}" role="alert">{{message}}</div>',
      // controller: "notifier"
    }
  })