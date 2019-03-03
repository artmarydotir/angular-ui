// const theme = require('./theme');

module.exports = {
  initJs: {
    src: [
      'node_modules/lodash/lodash.js',
      'node_modules/google-libphonenumber/dist/libphonenumber.js',
      'node_modules/async/dist/async.js',
      'node_modules/jquery/dist/jquery.js',
      'node_modules/axios/dist/axios.js',
      'node_modules/angular/angular.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-messages/angular-messages.js',
      'node_modules/angular-material/angular-material.js',
      'node_modules/angular-aria/angular-aria.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-sanitize/angular-sanitize.js',
      'node_modules/angular-touch/angular-touch.js',
      'node_modules/persian-date/dist/persian-date.js',
      'node_modules/imask/dist/imask.js',
      'node_modules/ui-select/dist/select.js',
      // 'node_modules/adm-dtp/dist/ADM-dateTimePicker.js',
    ],
    dest: 'tmp/js/framework.js',
  },
  initCssRtl: {
    src: [
      'node_modules/angular-material/angular-material.css',
      'node_modules/ui-select/dist/select.css',
      'node_modules/font-awesome/css/font-awesome.css',
      'node_modules/animate.css/animate.css',
    ],
    dest: 'tmp/css/framework.css',
  },
};
