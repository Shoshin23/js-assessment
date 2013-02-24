if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
   if (typeof num != "number") { 
	   return false; 
   }
// because if first or the second part of the condition fails then the entire expression fails returning num.
      if (num % 3 && num % 5) {
        return num;
      }

      if (num % 5) {
        return 'fizz';
      }

      if (num % 3) {
        return 'buzz';
      }

      return 'fizzbuzz';
    }
  };
});
