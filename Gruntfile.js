"use strict";

module.exports = function( grunt ){
    grunt.initConfig({
        clean: {
            build: {
                src: ["target"]
            }
        },
        uglify: {
            scripts: {
                options: {
                    mangle: false,
                    compress: false,
                    beautify: true
                },
                files: {
                    'target/main.js': ['lib/**/*.js', 'config/**/*.js', 'src/**/*.js']
                }
            }
        },
        copy: {
            statics: {
                files : [
                    {
                        expand : true,
                        cwd : 'static',
                        src : ['**'],
                        dest : 'target/'
                    }
                ]
            }
        },
        watch: {
            scripts: {
                files: ['src/**','test/**'],
                tasks: ['default','test'],
                options: {
                    interrupt: true,
                    event: ['added', 'deleted', 'changed']
                }
            }
        },
        jasmine: {
            pivotal: {
                src: ['lib/**/*.js', 'config/**/*.js', 'src/**/*.js'],
                options: {
                    specs: 'test/**/*.spec.js',
                    helpers: ['test/**/*.js', '!test/**/*.spec.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jasmine');

    grunt.registerTask('default', [ 'uglify', 'copy']);
    grunt.registerTask('test', [ 'jasmine']);
}