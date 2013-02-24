if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    createModule : function(str1, str2) {
	    return { //this part becomes an exposed interface
		   sayIt : function() {
		return this.greeting +', '+ this.name; //the space after the comma gave me a headache. 
	},
	name : str2,
	greeting : str1
	    };
    }
  };
});

