window.angularApp.controller(
  'HomeController',
  [
    '$scope',
    '$rootScope',
    function HomeController($scope, $rootScope) {
      $rootScope.title = window.i18n.home;
    },
  ],
);
