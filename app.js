// console.log(a)
// console.log(b)
// sum();

// let a = 2;
// const c = 6;
// var b = 3;
// var sum = 0;

// function sum(){
// sum = a+b;
// }

function getSum(a){
   return function(b){
      return function(c){
         console.log(a*b*c)
      }
   }
}

getSum(2)(3)(4)

// =========================================CALL ============================================================
// =========================================FUNCTION BURROWING ============================================================

// let name1 = {
//    firstName : "ram",
//    lastName : "dev",
// }

// let getName =  function(){
//    console.log(this.firstName + " " + this.lastName)
// }

// let name2 = {
//    firstName : "rameshwari",
//    lastName : "devi",
// }
// getName.call(name1)
// getName.call(name2)

// =====================If we want to add more parameter==================================

// let name1 = {
//       firstName : "ram",
//       lastName : "dev",
//    }

//    let getName =  function(city,state){
//       console.log(`${this.firstName}  ${this.lastName} is from ${city} ${state}` )
//    }

//    let name2 = {
//       firstName : "rameshwari",
//       lastName : "devi",
//    }
//    // getName.call(name1, "dehradun")
//    // getName.call(name2 , "maharastra")

// ======================================apply========================================================

//    getName.apply(name1, ["dehradun","jharkhand"])
//    getName.apply(name2, ["maharastra","uttar pradesh"])

// ========================================bind========================================================

// let getNameLater = getName.bind(name2, ["maharastra","uttar pradesh"])
// console.log(getNameLater)
// getNameLater()

// let count = document.querySelector(".count")

// function increment(){
// count.innerHTML++;
// }


const val = [1,2,3,5,6,8]
// const [a,b,c,d]= val;
// console.log(a,b,c,d)




// const val2 = [9,6,5, ...val]
// console.log(val2)


// let obj = {
//     name : 'vishal',
//     id : 1,
//     age : 23
// }

// const {name,id} = obj
// console.log(name,id)


// const obj2 = {
//     degree : "Btech",
//     ... obj
// }

// console.log(obj2)

// const [v1 ,v2 ,...v3] = [1,2,3,4,5]
// console.log(v1,v2,v3)

// let arr = ["ram" , "shyam" , "kaka", 1,3,4,5]
// let [ a,b,c,...d] = arr;
// console.log(a,b,c,d)

// let {m,n} = {m:2,n:6}
// console.log(m,n)

// const num = [1,3,4,56,7]
// const [one,two,...three] = num
// console.log(one,two,three)

// let arr = [2,3,45]
// let obj = {...arr}
// console.log(obj)

// function sum(v1,v2,v3){
//     return v1+v2+v3;
// }
// console.log(sum(...arr))

//=========================================== hoisting===========================================================
// getName();
// console.log(getName)
// console.log(getArrowName)
// console.log(getFunctionName)
// console.log(a)

// var a = 2;
//  function getName(){
//     console.log('hello')
//  }
//  var getArrowName = ()=>{
//     console.log('hello')
//  }
//  var getFunctionName = function(){
//     console.log('hello')
//  }

//  console.log(getArrowName)
// console.log(getFunctionName)
// console.log(a)

// =============================================scope chaining=====================================

// function fun1(){
//     let a = 2;
//     function fun2(){
//        console.log(a)
//     }
//     var z = fun2()
//    }
//    fun1()

// let age = 12;
// const beverage = age>=30 ? "beer" : "juice";
// console.log(beverage)

// let x = 10;
// let sum = 0
// while (x>0){
//    sum+= x;
//    x--;

// }
// console.log(sum)

// =======================================set time out===================================================================

// function set1(){
//    let i = "hello form set1";
//    setTimeout(function(){
// console.log(i)
//    },1000)

//    console.log('hello to set1')
// }
// set1();

// function set2(){
//    for(var i = 0 ; i<=5 ; i++){
//       setTimeout(function(){
//          console.log(i)
//             },i*1000)
//    }
// }
// set2()

// function set2(){
//    for(let i = 0 ; i<=5 ; i++){
//       setTimeout(function(){
//          console.log(i)
//             },i*1000)
//    }
// }
// set2()

// function set() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("hello");
// }

// set();

// function x(){

//    console.log('hello')
// }

// x(y())

//  function y(){
//    let i = 1;
//    setTimeout(function () {
//               console.log(i);
//             }, 5000);
// }

// setTimeout(function (){
//    console.log('hello')
// },2000)

// function xyz(z){
//    console.log('hello')
//    return xyz;
// }

// function x(){
//    function y(){
//       console.log('y')
//    }
// }

//   let n = function y(){
//    console.log('hello')

// }

// let obj1 = {
//    first : "Hi",
//    Sec : "obj1"
// }
// let obj2 = {
//    first : "Hello",
//    Sec : "obj2"
// }

// let getHello = function(city){
//    console.log(`${this.first} from ${this.Sec} in ${city}`)
// }

// getHello.call(obj1,"ranchi")
// getHello.call(obj2, "jharkhand")

// getHello.apply(obj1,["ranchi"])
// getHello.call(obj2, ["jharkhand"])

// let getHi = getHello.bind(obj1,["ranchi"])
// getHi();

// function func1() {
//   setTimeout(() => {               
//     console.log(x);
//     console.log(y);
//   }, 3000);
//   var x = 2;
//   let y = 12;
// }
// func1();

// function x(){
//    var a= 2;
//    function y(){
//       console.log(a)
//    }
// }








// call / apply / bind

// call function helps us to change the context of the "this " keyword  invocking funtion

// let name1 = {
//    firstName : "Ram",
//    lastName : "Avtaar"
// }
// let name2 = {
//    firstName : "Rameshwari",
//    lastName : "Devi"
// }

// let getName = function(city){
//    console.log(`${this.firstName} ${this.lastName} is from ${city}`)
// }

// getName.apply(name1,["dehradun"])
// getName.apply(name2,["Jharkhand"])

// let getName1 = getName.bind(name1,["dehradun"])
// getName1()


// currying is the transformation of the multiple argument of several function of single argument in asequence


// function volume(length){
//    return function(breadth){
//       return function(height){
//           console.log(length * breadth * height)
//       }
//    }
// }

// volume(2)(3)(4);


// combination of function enclosed with its outer environment or lexical environment is called closures
// each and every function in js has a reference to its lexical environment mainly to variable and function this phenomenan is known as 

// let a = "Ram"
// function sayHello(){
//    function sayHi(){
//       function sayNothing(){
//         console.log(`Say hello to ${a}`)
//       }
//       sayNothing();
//    }
//    sayHi()
// }
// sayHello()


// scope chain() => Function always have a access to the variable and function present in its scope or lexical scope

var Name = "Ram"

function sayName(){
   function name1(){
      console.log(Name)
      var Name = "raj"
      console.log(Name)
      function name2(){
            console.log(Name)
      }
      name2()
   }
   name1()
}
sayName()

// console.log(y)
function xyz(){
   let y = 3;
}



// callback function => if a function take function as parameter then it is called  Callback function.


// function getData(){
//    setTimeout(function(){
//       console.log("hello")
//    },2000)
// }
// getData();


// function set(){
//   let i = 2;
//   setTimeout(function() {
//     console.log(i)
//   }, 4000);
//   console.log('hello')
// }
// set();





obj1= {
   Name : "XYZ",
   class : "1"
}
obj2= {
   Name : "abc",
   class : "2"
}

let getData = function(city){
   console.log(`My Name is ${this.Name} and class is ${this.class} and city is ${city}` )
}

// getData.call(obj1,"panipuri")
// getData.call(obj2,"golgappe")

// getData.apply(obj1,["panipuri"])
// getData.apply(obj2,["golgappe"])


let getData1 = getData.bind(obj2,["golgappe"])
getData1()




