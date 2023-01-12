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

let arr = [2,3,45]
let obj = {...arr}
console.log(obj)

function sum(v1,v2,v3){
    return v1+v2+v3;
}
console.log(sum(...arr))