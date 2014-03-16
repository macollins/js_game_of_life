module.exports = function (grunt) {

  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'spec/**/*.js'],
      options: {
        predef: [
          // Jasmine
          'describe',
          'expect',
          'it']
      },
    },

    jasmine: {
      src: 'src/**/*.js',
      options: {
        specs: 'spec/**/*Spec.js',
        helpers: 'spec/**/*Helper.js'
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Register tasks
  grunt.registerTask('default', ['lint', 'spec']);
  grunt.registerTask('spec', 'jasmine');
  grunt.registerTask('lint', 'jshint');

};
