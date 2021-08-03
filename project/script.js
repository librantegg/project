'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше number');

// const ref = /\d/ig;
// console.log(ans.match(ref));
let regexp = /^(\w+\s?)*$/;
let str = "An input string that takes a long time or even makes this regexp to hang!";

console.log( regexp.test(str) ); // false
// \D
// \W  

// \d
// \w
// \s

// i
// g
// m 

// console.log(ans.search(ref));

// console.log(ans.match(ref));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));

// console.log('12-43-56'.replace(/-/g, ':'));

