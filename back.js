'use strict'

// 1) number
var num1 = 5;
var num2 = 10;
var res = num1 + num2;

// 2) string
var valStr = 'hello'

// 3) boolean
var result = 5 > 6

// 4) undefined
var resValue;

// 5) null
var resValue2 = null;

// 6) Object array
var names = ['leonard', 'antonios', 'lampros']
names.push('olya', 'katya');
names[1] = 'shankar'

// 6.1) Object object
var user = {name: 'Aretos', age: 30, email: 'aretos@loopme.com'}



console.log(user.name);


'use strict'

var num1 = + prompt('input num1');
var num2 = + prompt('input num2');
var result = num1 + num2;


if(result && result !== 10){
    alert(result)
}
else if(result === 10) {
    alert('result 10');
}
else {
    alert('value should be a number');
}


var username = 'hello ';

username += prompt('what\' is your name?');

alert(username);

console.log(a);



'use strict'

var a = 5;
var b = 4;
            //6    //6   //5
var result = ++a + a++ - ++b;

console.log(result);




var a = 5;
var b = 4;
            
var result = a || b;

console.log(result);



var cities = ['Dnipro','Odessa','Kiev','Lviv']
          of
for(var i in cities){
    console.log(cities[i]);
}



function sum(a, b) {
    var res = a + b;

    return res;
}

var res = sum(4, 5);
var res2 = sum(4, 10);

console.log(res, res2);


'use strict'

var cities = ['Dnipro','Odessa','Kiev','Lviv'];
var names = ['Vasa','Anna','Alex','Kate'];

function show(){
    render(cities, '#list');
}


var btn = document.querySelector('#list-btn');

btn.onclick = show;






render(names, '#list2');



function render(data, id) {
    var container = document.querySelector(id);

    var html = '';

    for(var item of data){
     html+= '<li>' + item + '</li>';
    }
    container.innerHTML = html;
}


console.log(btn);




function handler(a,b){
    var result = a * b;

    return result;
}

var res = handler(5, 8);



console.log(res);



// Object {name: 'An', age: 25};

// Array ['Dnipro','Odessa', 'Kiev', 'Lviv'];

// Function function(){};



var a = {name: 'Ann', age: 25};

var b = a;

b.name = 'Peter';

console.log(a);





function han() {
    alert('hi');
}

var han2 = han;

han();

console.log(a);





Handler();

function Handler() {
    alert('hi');
}

console.log(a);





'use strict'
var str = prompt('enter values (n1, n2, ...)');


console.log(str.split(','));


function Sum(strValue){
    var result = 0;

    var ar = strValue.split(',');

    for(var num of ar) {
        result += (+num);
    }

    return result;
}

var res = Sum(str);

alert(res);









function mmassive(city, name){
    var mergeresult = city + name;
    
    return mergeresult;
}

var mergeresult = mmassive(cities, names);

console.log(mergeresult);


function render(data, id){
    var container = document.querySelector(id);

    var html = '';

for(var item of data){
    html+= '<li>' + item + '</li>';
   }
container.innerHTML = html;
}

render(mergeresult, '#list2');



___________________________________--



var cities = ['Dnipro','Odessa','Kiev','Lviv'];
var names = ['Vasa','Anna','Alex','Kate'];
var container = document.querySelector('#list');

var arres = [];

for(var c of cities){
   arres.push(c);
}
for(var n of names){
    arres.push(n);
}

var string = '';

for(var a of arres){
    string+= '<li>' + a + '</li>';
    
}
container.innerHTML = string;




var cont = document.querySelector('#slider');

var element = document.createElement('h1')

element.innerHTML = 'dadadada'

element.onclick = function(){
    alert('')
}

cont.appendChild(element);


console.dir(element);


___________________________________



function CreateUser(userName, userAge) {


    this.name = userName;
    this.age = userAge;

    this.send = function(){
        alert(`data send: ${this.name}${this.age}`)
    }
}

var User1 = new CreateUser ('vasa', 25);
var User2 = new CreateUser ('kolya', 35);

//User1.send();
//User2.send();

console.log(User1);
console.log(User2);








___________________________________



var mainMenu = [
    {name:'Home', link:'/home'},
    {name:'Contacts', link:'/contacts'},
    {name:'Products', link:'/products'},
    {name:'Gallery', link:'/gallery'},
    ]


var sidebarMenu = [
    {name:'Phones', link:'/phones'},
    {name:'Laptops', link:'/laptops'},
    {name:'Tablets', link:'/tablets'},
    {name:'Displays', link:'/displays'},
]


function CreateMenu(data, className, menuId) {

    this.data = data;
    this.clicked = [];
    this.className = className;
    this.menuId = menuId;
    this.container = document.querySelector(menuId);
    this.list = document.querySelector(menuId + 'Clicked');
    this.listBtn = document.querySelector(menuId + 'Clicked button');

    this.onClickHandler = function(e){
        e.preventDefault();
        console.log(e.currentTarget.innerText);
        this.clicked.push(e.currentTarget.innerText);
    }


    this.init  = function(){

        for(var item of this.data){
            var li = document.createElement('li');
            var a = document.createElement('a');
            a.innerHTML = item.name;
            a.href = item.link;

            a.onclick = this.onClickHandler.bind(this);

            li.appendChild(a);
            this.container.appendChild(li)
        }
        this.container.classList.add(this.className);

        this.listBtn.onclick = function() {
            this.list.append(this.clicked);
        }.bind(this);
    }
}

var sidebar = new CreateMenu(sidebarMenu, 'sidebar-menu', '#sidebarMenu');
var main = new CreateMenu(mainMenu, 'main-menu', '#mainMenu');

sidebar.init()
main.init()


console.log(sidebar);
console.log(main);



_____________________________________


fucntion show () {
    console.log(this.name)
}


var user = {name:'USER'};
var car = {name:'CAR'};

user.myshow = show;

car.toshow = show;

user.myshow();








___________________________________


var btn = document.querySelector('#btn');
var text = document.querySelector('#text-block');
var color = document.querySelector('#color-block');
var container = document.querySelector('#block-list');


function remove () {
    this.parentElement.remove();

    console.log(this);
}


btn.onclick = function () {
    
    var block = document.createElement('p')
    var rem = document.createElement('span')

    rem.innerHTML = 'x';

    rem.onclick = remove;

    block.innerHTML = text.value;
    block.appendChild(rem);

    block.style.backgroundColor = color.value;
    
    container.appendChild(block);




    ___________________________________


    var lists = document.querySelectorAll('h1');

var myClick = function() {
    alert(this.innerHTML)
}

lists.forEach (function (el) {
    el.onclick = myClick;
});