// //Declaration style

// function show () {
//     alert('hi')
// }

// //Expression style 

// var show = function () {
//     alert('hi')
// }

// //Call-back function

// var show = function () {
//     alert('hi')
// }

// var cart = fucntion (x){
//     x();
// }

// cart(show);

// //Anonymous function

// var result = (function (){
//     var a = 5;
//     var b = 10;

//     return a + b;
// })();

// console.log(a)

// //Стрелочная функция


// var hi = function (message){
//     return `hello ${message}`;

// }

// var hi2 = (name, message) => {
//     return `hello ${name} ${message}`;
// }
// alert(hi('vasa', 'friend'));

var name = 'HELLO VAR';

var user = {
    name: 'USER',

    getName: () => {
        alert(this.name)
    }
}

user.getName();

console.log(name);