let string = "strings";
let sentence = "hello " + "Junshen";
let sentence2= " and Ema";
//console.log(sentence + sentence2);

/* const longSentence = `${student1}` and `${student2}` are amazing and will be taking `${courseName}` with `$`
*/

/*
let year = 2020;
let nextYear = 2020 + 1;
let past = 2020 / 2;
let farFuture = 2020 * 50;
*/


/////Booleans
/* let trueStatement = true;
let falseStatement = false; */

////Null and Undefined
//let Ron; //declared Ron but not defined Ron
//console.log(Ron);
//console.log(Sarah);
/////////Boolean Logic
/* let student = "Caroline";
let age = 15; */
//console.log(student === "Caroline");
//console.log(student === "caroline");
/* console.log(age === "15");
console.log(age <= 17); */

/////If statements
/* let school = "HS"
if(school === "Elementary"){
    console.log("You are in k-5")
} else if (school === "Middle"){
    console.log("You are in 6,7 or 8th grade");
} else{
    console.log("you are in HS");
}
let ron = "Ron";
console.log(ron === "Ema");
 */



///formative assessment 

//light

let light = "green"
if(light === "green"){
    console.log("go")
} else if ( light === "yellow"){
    console.log("caution")
} else if ( light === "red"){
    console.log ("stop")
} 

//coffee
/* let lactose = "one lactose"
if(lactose === "lactose"){
    console.log("almond milk")
} else if ( lactose === "not lactose"){
    console.log("milk")
} else if (lactose === "one lactose") {
    console.log( "one almond milk")
}
    
let temp = "68"
if (temp <= 72 && temp >= 68){
    console.log("perfect")
}
else if (temp < 68){
    console.log("too cold")
}
if (temp <= 76 && temp >= 73){
    console.log("warm")
}
if (temp > 76){
    console.log("too hot")
}
*/

////functions
/* function test() {
    console.log("TEST");
}
test();

function argument (argument) {
    console.log(argument);
}

const add = function(x, y){
    return x + y; //immediately ends the function

};
console.log(add(10, 3)); */
/*const hello = function() {
    alert("hello");
};

const bye = function() {
    alert("bye");
};

const beatles = function() {
    hello();
    bye();
    hello();
    bye();
};
beatles();
*/

////scope

/*function makeFunc(){
    //closure
    //function scope
    const name = "Sun"; 
    function displayName(){
        alert(name); //still has access to outer variable name
    }
    return displayName; //returning the inner function
}

const myFunc = makeFunc(); //closure
makeFunc();

*/

/////arrays
const names = [ 
    "Diego" , 
    "Frid" , 
    "Christian" , 
    "Valerie" ,
    "Haoran" , 
    "Brian" , 
    "Caroline"
];
//names.push("Caroline");
//let newNames = names.unshift("Brian");
names.forEach(name => console.log (name));
/*names.filter(//somecode).forEach( => console.log (el))
*/
///spread operator
const numbers = [1, 2, 3];

const add = function(x, y, z){
    return x + y + z;
};
console.log(add(...numbers));