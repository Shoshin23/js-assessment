if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
	     return /\d+/.test(str);
	   

    },

    containsRepeatingLetter : function(str) {

    },

    endsWithVowel : function(str) {
	    return /[aeiou]$/i.test(str);


    },

    captureThreeNumbers : function(str) {

    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
