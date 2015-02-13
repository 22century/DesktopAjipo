module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    watch: {
      scripts: {
        files: ['browserify_modules/*.js'],
        tasks: ['browserify'],
        options: {
          debounceDelay: 250
        }
      },
      styles: {
        files: ['less/*.less'],
        tasks: ['less'],
        options: {
          debounceDelay: 250
        }
      }
    },

    browserify: {
      options: {
        watch: false,
        keepAlive: false,
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
          'app/scripts/modules.js': ['browserify_modules/**/*.js']
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-node-webkit-builder');

  grunt.registerTask('default', ['watch']);

};
