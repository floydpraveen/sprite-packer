module.exports = function(grunt) {
 grunt.initConfig({
  spritepacker: {
    default_options: {
      options: {
        // Path to the template for generating metafile:
        template: 'css/sprites.css.tpl',
        padding:3,
        background:'#ffffff',
        // Destination metafile:
        destCss: 'css/sprites.css',
        // Base URL for sprite image, used in template
        baseUrl: ''
      },
      files: {
        'images/sprites.png': ['images/*.*']
      }
    }
  }
})

  grunt.loadNpmTasks('grunt-sprite-packer');

  grunt.registerTask('default', ['spritepacker']);

}
