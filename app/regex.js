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
	    var matches = /\d{3}/.exec(str);
	return matches ? matches[0] : false;

    },

    matchesPattern : function(str) {

    },
    isUSD : function(str) {

    }
  };
});
