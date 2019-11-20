/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

// function solution(A) {
//   var mas = 0 || 1;
//
//   for (var 1 = 0; 1 < A.length; 1++) {
//     var int = A[1] === 1;
//
//     current = (mas % 2 ===1)? !int : ini;
//     if (current == false) {
//       mass++
//       //for(var k = 1; k< A.length; k++) {
//       //    A[k] = A[k] ===1 ? 0 : 1:
//       // }
//     }
//     }
//   }
//   return mas
// }
//
// var A = [2,1,3,5,4];
// 
// function solution(A){
//
// 	var B = new Array(A.length).fill();
// 	var moments = 0;
//
// 	for (var i = 0; i < A.length; i++) {
//
// 		var j = A[i] - 1;
// 		B[j] = 1;
//
// 		if (verifyMoment(B)){
// 			moments++;
// 		}
//
// 	}
//
// 	return moments;
// }
//
// function verifyMoment(B){
// 	var C = B.slice(0, B.lastIndexOf(1)+1)
// 	return C.reduce((acc, next) => acc*next);
// }
