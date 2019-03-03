window.angularApp.config([
  '$routeProvider',
  function configRouteProvider($routeProvider) {
    $routeProvider.when('/', {
      controller: 'HomeController',
      templateUrl: 'lib/templates/HomeController.html',
    })


      .otherwise({
        redirectTo: '/',
      });
  },
]);
