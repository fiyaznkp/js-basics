// // A) two ways to declare an array are

//  1  array = [1,2,3,]

// //console.log(array[0]) 
// //we can declare arrays in two types this is the common type 
// //here it returs 1 , that is the zeroth position of the array,
// //if we console array instead of single position it displays whole array elements

// 2 let array = new Array(1,2,3) 

// //console.log(array) 
//  //here this the second type we can define an array 
//  //here the array returns the whole array because we calls the whole array in console

//  //B) how to find length of an array

//  var array = [1,2,3]
// console.log(array.length) 
// syntax for finding array length is arrayname.length 

//  here it returns 3 arrray length count starts from 1 and array position statrts from 0

//  C) how to change an element of an array with another element 

//  const states = ["kerala","Tn","ka"]
//  // here we are changing kerala and instead of kerala we are adding delhi 

//  states[0] = "Delhi"

//  console.log(states) it returns an array with delhi in place of kerala

// D) how to remove the last element of an array

// const array = [1,2,3,4]

// array.pop()

// console.log(array) here it returns a new array without last value 4 
//  if use pop twice two elements from last  will be removed ,
//  if its 3 then three like that it will be removed from the array

//  const array = [1,2,3,4]

//  array.pop()
//  array.pop() here it returns array with last 2 elements removed 

//  console.log(array)
//  adding a new element to an array it is know as array unshift

//  const array = [1,2,3]

//  array.unshift(0)
//  array.unshift(1)

//  console.log(array) here we can add a new element to an array using array unshift method 

// array shift => to remove first element of an array 

// const array = [1,2,3,4]

// array.shift()
// array.shift()
// console.log(array) 

// // here we have used array shift twice and it removed 2 elements of the array at the beginning

// // how to find index number of an array

// var array = [1,2,3]

// // console.log(array.indexOf(2)) 

// // how to convert a string to an array 

// // console.log(Array.from("fiyaz"))
// // here Array captial is must otherwise it will not work 

// // to add a new element to the last of an array 

// var array = [ 1,2,3]

// array.push(4)

let x=679
let y =3601

let sum = x + y

console.log(sum)

let result = sum -450

console.log(result)