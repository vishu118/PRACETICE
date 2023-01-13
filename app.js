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


// function getSum(a){
//    return function(b){
//       return function(c){
//          console.log(a*b*c)
//       }
//    }
// }

// getSum(2)(3)(4)



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

let name1 = {
      firstName : "ram",
      lastName : "dev",
   }
   
   let getName =  function(city,state){
      console.log(`${this.firstName}  ${this.lastName} is from ${city} ${state}` )
   }
   
   let name2 = {
      firstName : "rameshwari",
      lastName : "devi",
   }
   // getName.call(name1, "dehradun")
   // getName.call(name2 , "maharastra")
   getName.apply(name1, ["dehradun","jharkhand"])
   getName.apply(name2, ["maharastra","uttar pradesh"])
  
   
let getNameLater = getName.bind(name2, ["maharastra","uttar pradesh"])
console.log(getNameLater)
getNameLater()



// let count = document.querySelector(".count")

// function increment(){
// count.innerHTML++;
// }
// const val = [1,2,3,5,6,8]

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



