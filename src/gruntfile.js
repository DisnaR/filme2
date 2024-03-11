module.exports = function(grunt) {
    grunt.initConfig({
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'C:/Users/disna/Ebac/filme/src/imagens/',
                    src: ['**/*.{png,jpg,gif,jpeg}'],
                    dest: 'C:/Users/disna/Ebac/filme/src/dist/imagens/'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'C:/Users/disna/Ebac/filme/src/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'C:/Users/disna/Ebac/filme/src/dist/',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'C:/Users/disna/Ebac/filme/src/dist/main.min.js': ['C:/Users/disna/Ebac/filme/src/main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['imagemin', 'cssmin', 'uglify']);
};