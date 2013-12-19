module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig(
    {
      "browserDependencies": {
        "options": {},
          "jquery": {
            "dir": "vendor/js/lib/jquery",
              "files": [
               {
                  "jquery-1.10.2.js": "http://code.jquery.com/jquery-1.10.2.js"
                },
                {
                   "jquery-2.0.3.js": "http://code.jquery.com/jquery-2.0.3.js"
                 }
              ]
              },
          "modernizr": {
            "dir": "vendor/js/lib/modernizr",
              "files": [
               {
                  "modernizr-2.6.2.js": "https://raw.github.com/Modernizr/Modernizr/v2.6.2/modernizr.js"
               }
             ]
           }
      },
      cssmin: {
        combine: {
          files: {
            'themes/dita-d4p-classic/css/style.css': 
            [
              'libs/modules/960js/code/css/reset.css', 
              'libs/modules/960js/code/css/text.css', 
              'libs/misc/fonts/vegur/css/vegur.css', 
              'libs/misc/fonts/vegur/css/typography.css',
              'libs/modules/features/layout/css/ui-icons.css',
              'libs/modules/features/d4p/css/d4p.css', 
              'libs/modules/features/d4p/css/tools.css',
              'libs/modules/features/columns/css/columns.css',
              'libs/modules/DITA/notes/css/notes.css',
              'libs/modules/DITA/css/dita.css', 
              'libs/modules/DITA/tables/css/table.css', 
              'libs/modules/DITA/example/css/example.css',
              'libs/modules/DITA/list/css/list.css',
              'libs/modules/DITA/buttons/css/buttons.css',
              'libs/modules/DITA/images/css/images.css',
              'libs/modules/DITA/pre/css/pre.css',
              'libs/modules/DITA/reltable/css/reltable.css',
              'libs/modules/DITA/tasks/css/task.css',
              'libs/modules/jQuery-ui/themes/d4p-default/jquery.ui.accordion.css',
              'libs/modules/jQuery-ui/themes/d4p-default/jquery.ui.core.css',
              'libs/modules/jQuery-ui/themes/d4p-default/jquery.ui.theme.css',
              'libs/modules/jQuery-ui/themes/d4p-default/jquery.ui.accordion.css',
              'libs/modules/jQuery-widgets/navigation/classic/css/collapsible-navigation.css',
              'libs/themes/d4p-classic/css/theme.css'
            ]
          }
        },
        minify: {
          expand: true,
          cwd: 'themes/dita-d4p-classic/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'themes/dita-d4p-classic/css/',
          ext: '.min.css'
        }
      },
      concat: {
        dist: {
          src: [
           'vendor/js/lib/modernizr/modernizr-2.6.2.js',
           'vendor/js/lib/jquery/jquery-1.10.2.js',
           'libs/modules/960-Responsive-Grid/js/adapt.js', 
           'libs/modules/prefixFree/prefixFree.js', 
           'libs/modules/jQuery/jquery-1.7.1.min.js',
           'libs/modules/jQuery-widgets/navigation/classic/js/navigation.js',
           'libs/modules/jQuery-ui/ui/jquery.ui.core.js',
           'libs/modules/jQuery-ui/ui/jquery.ui.widget.js',
           'libs/modules/jQuery-ui/ui/jquery.ui.accordion.js'
          ],
          dest: 'themes/dita-d4p-classic/js/script.js'
        }
      },
      uglify: {
        my_target: {
          files: {
            'themes/dita-d4p-classic/js/script-min.js': ['themes/dita-d4p-classic/js/script.js']
          }
        }
      },
      jshint: {
        beforeconcat: [
            'libs/modules/jQuery-widgets/navigation/classic/js/navigation.js'
        ]
      }
    }
  );

  // loadNpmTasks
  grunt.loadNpmTasks('grunt-browser-dependencies');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // default Task is dita-d4p-classic
  grunt.registerTask('default', ['browserDependencies', 'cssmin', 'concat', 'uglify', 'jshint']);

};

