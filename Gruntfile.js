module.exports = function(grunt) {
    grunt.initConfig({
        //PACK IMAGES INTO ONE SPRITE SHEET
        spritepacker: {
            default_options: {
                options: {
                    // Path to the template for generating metafile:
                    template: 'css/sprites.css.tpl',
                    padding: 3,
                    background: '#ffffff',
                    // Destination metafile:
                    destCss: 'css/sprites.css',
                    // Base URL for sprite image, used in template
                    baseUrl: ''
                },
                files: {
                    'images/sprites.png': ['images/*.*']
                }
            }
        },
        //COMPRESS IMAGES
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['images/*.png'],
                    dest: '',
                    ext: '.png'
                }]
            },
            jpg: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: '',
                    src: ['images/*.jpg'],
                    dest: '',
                    ext: '.jpg'
                }]
            }
        }

    })

    grunt.loadNpmTasks('grunt-sprite-packer');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['spritepacker', 'imagemin']);

}
