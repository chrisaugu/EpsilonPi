angular.module("EpsilonPi")
.directive(
    "notifier", [function () {
        return {
            restrict: "E",
            templateUrl: "../views/notifier.html",
            replace: true,
            scope: true,
            controller: ["$scope", "$rootScope", "$timeout", function ( $scope, $rootScope, $timeout ) {
                var NOTIFICATION_DURATION = 5000;

                $scope.notifications = [];

                $scope.addNotification = function ( notification ) {
                    angular.extend(notification, {
                        adding: true
                    });
                    $scope.notifications.push( notification );

                    $timeout(function () {
                        delete notification.adding;

                        if ( !notification.persist ) {
                            $timeout(function () {
                                $scope.removeNotification( notification );
                            }, NOTIFICATION_DURATION);
                        }
                    });
                };

                $scope.removeNotification = function ( notification ) {
                    angular.extend(notification, {
                        removing: true
                    });

                    $timeout(function () {
                        $scope.notifications.splice( $scope.notifications.indexOf( notification ), 1 );
                    }, 150);
                };

                registerEvents();


                function registerEvents() {
                    var eventHandlerRemovers = [];

                    eventHandlerRemovers.push($rootScope.$on("notify", function ( $event, notification ) {
                        $scope.addNotification( notification );
                    }));

                    $scope.$on("$destroy", function () {
                        angular.forEach(eventHandlerRemovers, function ( eventHandlerRemover ) {
                            eventHandlerRemover();
                        });
                        eventHandlerRemovers = null;
                    });
                }
            }]
        };
    }]
);
