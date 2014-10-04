module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	
    sass: {                                 // Task
        dist: {
			 options: {                      // Dictionary of render options
              //  outputStyle: 'compressed'
            },                             // Target
            files: {                        // Dictionary of files
                'css/global.css': 'css/css-svg-sprite.scss'     // 'destination': 'source'
            }
		}
    },
  iconizr: {
    simple: {
      src: ['icons'],
      dest: 'css'
    },
    options : {
    	preview: 'preview',
    	padding:'1px',
    	render : {
    		css : false,
    		scss : 'css'
    	},
    	verbose : 1,
    	dims: true,
    	variables : {
    		"pngfallback" : "icons/icons.png",
    		"cssPreview"   : "../global.css"  	
    	}
    }
  }
    });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-iconizr');




  // Default task(s).
  grunt.registerTask('default', ['iconizr','sass']);

};
