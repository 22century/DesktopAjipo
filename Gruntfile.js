module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      options: {
        watch: true,
        keepAlive: true,
        builtins:[],
        browserifyOptions: {
          fullPaths: false
        },
        external: [
          'nw.gui'
        ]/*,
        alias: [
          './modules/cache.js:cache'
        ]*/
      },
      dist: {
        files: {
          'app/scripts/app.js': ['./browserify_modules/**/*.js']
        }
      }
    },

    copy: {
      libraries: {
        files: [{
          expand: true,
          cwd: 'node_modules/sugar/release',
          src: 'sugar-full.development.js',
          dest: 'app/scripts/'
        }]
      }
    },

    nodewebkit: {
      options: {
        platforms: ['win','osx'],
        buildDir: './webkitbuilds'
      },
      src: ['./app/**/*']
    }

  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('default', ['copy:libraries', 'browserify']);

};
