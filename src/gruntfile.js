module.exports = function(grunt) {
    // Configuração do Grunt
    grunt.initConfig({
        // Configuração para otimização de imagens
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'C:/Users/disna/Ebac/filme/src/imagens/', // diretório de origem das imagens
                    src: ['**/*.{png,jpg,gif,jpeg}'], // padrão de seleção de arquivos de imagem
                    dest: 'C:/Users/disna/Ebac/filme/src/dist/imagens/' // diretório de destino para imagens otimizadas
                }]
            }
        },
        // Configuração para minificação de arquivos CSS
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'C:/Users/disna/Ebac/filme/src/', // diretório de origem dos arquivos CSS
                    src: ['*.css', '!*.min.css'], // padrão de seleção de arquivos CSS
                    dest: 'C:/Users/disna/Ebac/filme/src/dist/', // diretório de destino para arquivos CSS minificados
                    ext: '.min.css' // extensão para arquivos CSS minificados
                }]
            }
        },
        // Configuração para minificação de arquivos JavaScript
        uglify: {
            options: {
                mangle: false
            },
            my_target: {
                files: {
                    'C:/Users/disna/Ebac/filme/src/dist/main.min.js': ['C:/Users/disna/Ebac/filme/src/main.js'] // arquivo JavaScript de origem e destino para minificação
                }
            }
        }
    });

    // Carrega os plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registra as tarefas
    grunt.registerTask('default', ['imagemin', 'cssmin', 'uglify']);
};
