module.exports = function (grunt) {

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
        ]
      },
      dist: {
        files: {
          'app/scripts/modules.js': ['./browserify_modules/**/*.js']
        }
      }
    },

    copy: {
      libraries: {
        files: [{
          expand: true,
          cwd: 'bower_components/sugar/release',
          src: 'sugar-full.min.js',
          dest: 'app/scripts/'
        },{
          expand: true,
          cwd: 'bower_components/zepto',
          src: 'zepto.min.js',
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
    },

    less: {
      dist: {
        options: {
          paths: ['less'],
          yuicompress: true
        },
        files: {
          'app/styles/prividenie.css': 'less/prividenie.less'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-node-webkit-builder');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['copy:libraries', 'browserify']);

};
