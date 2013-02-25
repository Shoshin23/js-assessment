if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
	    return arr.indexOf(item); 
    },

    sum : function(arr) {
	    return eval(arr.join('+'));


    },

    remove : function(arr, item) {
	for(var i in arr) {
		if(arr[i] == item) {
			arr.splice(i,1);
			break;
		}
	}
return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
 	
    },

    append : function(arr, item) {
	    arr.push(item);
	    return arr;

    },

    truncate : function(arr) {
	 arr.pop();
	 return arr;
    },

    concat : function(arr1, arr2) {
	var arr3 = arr1.concat(arr2);
	return arr3;
    },

    insert : function(arr, item, index) {

    },

    count : function(arr, item) {
	var count = 0;
	for(var i = 0;i < arr.length;i++){
		if(arr[i] == item){
			count++
		}
	}
	return count;

    },

    duplicates : function(arr) {

    },

    square : function(arr) {
	for (var i =0; i<arr.length; i++) {
		arr[i] = arr[i]*arr[i];
    }
	return arr;

    },

    findAllOccurrences : function(arr, target) {

    }
  };
});
