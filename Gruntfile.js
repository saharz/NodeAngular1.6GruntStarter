module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        concat: {
            options: {},
            build_css_vendors: {
                src: ['bower_components/bootstrap/**/**/*.css'],
                dest: 'build/bootstrap.css'
            },
            build_css: {
                src: ['src/index.css', 'src/components/**/*.css'],
                dest: 'build/main-app.css'
            },
            build_js_angular: {
                src: ['bower_components/angular/angular.js'],
                dest: 'build/angular.js'
            },
            build_js: {
                src: ['src/index.js', 'src/components/**/*.js'], //, 'src/services/*.js'],
                dest: 'build/main-app.js'
            }
        },
        clean: {
            build: ['build']
        },
        includeSource: {
            target: {
                files: {
                    'build/index.html': 'src/index.html'
                }
            }
        },
        html2js: {
            options: {
                module: 'tmpl_web_res'
            },
            main: {
                src: ['src/components/**/*.html'],
                dest: 'build/html-templates.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-html2js');
    grunt.registerTask('build', ['clean', 'html2js', 'concat', 'includeSource']);
};
