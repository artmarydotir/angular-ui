window.angularApp.run([
  '$rootScope',
  function rootScopeConfig($rootScope) {
    $rootScope.i18n = window.i18n;
    $rootScope.breadcrumb = [];
    $rootScope.progress = 0;
    $rootScope.routePath = '/';

    $rootScope.$on('$routeChangeSuccess', (e, current) => {
      $rootScope.routePath = current.$$route.originalPath;
    });


    // close loading
    window.$('#loading').fadeOut('slow', () => {
      window.$('#loading').remove();
      window.$('body').css('overflow', 'visible');
    });
  },
]);
