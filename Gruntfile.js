/**
 * @author Maryam Haghgou <m@artmary.ir>
 * @copyright (c) 2019, Maryam Haghgou <m@artmary.ir>
 * @link http://artmary.ir Maryam Haghgou
 */

// require node
const fs = require('fs');
const path = require('path');
const { exec, execSync } = require('child_process');


// require package
const pug = require('pug');

// require my task
const concat = require('./config/grunt/concat.js');
const copy = require('./config/grunt/copy.js');
const sass = require('./config/grunt/sass.js');
const shell = require('./config/grunt/shell.js');
const stringReplace = require('./config/grunt/string-replace.js');
const stripCssComments = require('./config/grunt/stripCssComments.js');
const uglify = require('./config/grunt/uglify.js');
const webpack = require('./config/grunt/webpack.js');
const watch = require('./config/grunt/watch.js');

const manifest = require('./src/app.webmanifest');

const iconsSizes = [16, 24, 32, 48, 57, 64, 96, 120, 128, 144, 152];


const getIcons = () => {
  const icons = [];
  iconsSizes.forEach((size) => {
    icons.push({
      s: size,
      src: `lib/icon-${size}.png`,
      sizes: `${size}x${size}`,
      type: 'image/png',
    });
  });
  return icons;
};

module.exports = function gruntFunction(grunt) {
  grunt.initConfig({
    'string-replace': stringReplace,
    concat,
    copy,
    sass,
    shell,
    watch,
    stripCssComments,
    uglify,
    webpack,
  });

  grunt.registerTask('watch-js', 'Generate favicon', () => {
    const commands = [
      'rm -rf dist/lib/js/main.pack.js',
      'ln -fs $(pwd)/src/js/main.pack.js ./dist/lib/js/main.pack.js',
    ];
    execSync(commands.join(' && '));
    grunt.task.run(['webpack:dev']);
  });

  grunt.registerTask('watch-css', 'Generate favicon', () => {
    const commands = [
      'rm -rf dist/lib/css',
      'ln -fs $(pwd)/src/css ./dist/lib/css',
    ];
    execSync(commands.join(' && '));
    grunt.task.run(['watch']);
  });

  grunt.registerTask('favicon', 'Generate favicon', function favicon() {
    const done = this.async();
    const commands = [
      'rm -rf tmp/icons',
      'mkdir -p tmp/icons',
      'convert src/logo.png -define icon:auto-resize=64,48,32,24,16 tmp/icons/favicon.ico',
    ];
    iconsSizes.forEach((size) => {
      commands.push(`convert src/logo.png -resize ${size}x${size} tmp/icons/icon-${size}.png`);
    });
    exec(commands.join(' && '), (error) => {
      if (error) {
        grunt.log.error([error]);
        return;
      }
      done();
    });
  });

  grunt.registerTask('pug', 'Render pug files', function pugRender() {
    const done = this.async();
    exec(`find ${__dirname}/src -type f -name "*.pug"`, (err, lines) => {
      const files = lines.trim().split('\n');

      files.forEach((file) => {
        const htmlPath = file.replace('/src', '/dist').replace('.pug', '.html');
        const htmlDir = path.dirname(htmlPath);
        execSync(`mkdir -p ${htmlDir}`);
        try {
          const html = pug.renderFile(file, {
            manifest,
            icons: getIcons(),
            cache: process.env.NODE_ENV !== 'dev',
            pretty: process.env.NODE_ENV === 'dev',
          });
          fs.writeFileSync(htmlPath, html.trim());
        } catch (e) {
          console.log(e);
          grunt.log.writeln(e);
        }
      });
      const manifestData = manifest;
      manifestData.icons = getIcons();
      manifestData.icons.forEach((e, i, ar) => {
        delete ar[i].s;
      });
      fs.writeFileSync('dist/app.webmanifest', JSON.stringify(manifestData, null, 2));
      done();
    });
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-strip-css-comments');
  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('build', [
    'shell:init',
    'concat',
    'pug',
    'favicon',
    'webpack:prod',
    'uglify',
    'copy:init',
    'string-replace:init',
    'stripCssComments:init',
    'copy:postCopy',
    'sass',
    'copy:final',
    'shell:last',
  ]);
};
