module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        //DOCUMENTAÇÃO DO SASS
        sassdoc: {
            default: {
                src: './src/assets/scss/**/*.scss'
            },
        },
    });

    //loading tasks
    grunt.loadNpmTasks('grunt-sassdoc');

    // tasks
    grunt.registerTask('default', 'sassdoc');
};