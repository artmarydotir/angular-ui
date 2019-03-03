window.angularApp = window.angular.module('app', [
  'ngMaterial',
  'ngRoute',
  'ngMessages',
  'ngSanitize',
]);

// language
require('./includes/fa');

// constrollers
require('./includes/constrollers/HomeController');

// config
require('./includes/config');

// run
require('./includes/run');
