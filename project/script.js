 'use strict';

//filters

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
// console.log(names);
// const shortNames = names.filter(function(name) {
//         if (name.length < 5) {return item;}
//     });


// console.log(shortNames);


//map 
// let answers = ['ivAN', 'anNA', 'HEllo'];

// answers = answers.map(item => item.toLowerCase());


// console.log(answers);

// // every/some

// const some = [4, 43, 643];

// console.log(some.every(item => typeof item === 'number'));

//reduce

// const arr = [4,5, 6, 1,5];

// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);


// const arr = ['apple', 'pear', 'p;um'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] == 'persone')
.map(item => item[0]);

console.log(newArr);
console.log(obj);