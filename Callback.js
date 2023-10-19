// Callback function is a function that is passed as an argument to another function and is executed after the execution that function.
// they are normally used in asynchronous operations

// const result = [2,4,6,8].every((even) =>{
//     return even %2 === 0
// })

// console.log(result)

// const result = [2,4,6,7].every((even) =>{
//     return even %2 ===0
// })
// console.log(result)

// const result = [2,3,4,5].every((even)=>{
//     return even %2 === 0
// })

// console.log(result)

// console.log("one")
// setTimeout(() => {
//     console.log("two")
// },3000)
// console.log("three")

// setTimeout(()=>{
//     console.log("one")
// },3000)
// console.log("two")
// setInterval(()=>{
//     console.log("three")
// },4000)

// console.log("start")
// function getData(){
//     return "data received"
// }
// console.log(getData())

// console.log("end")

// console.log("start")
// function getData(cb){
//     setTimeout(()=>{
//         cb("hai")
//     },2000)
// }
// console.log(
//     getData((value)=>{
//      console.log(value)})
// )
// console.log("end")

// var date = new Date()

// console.log("start")
// for(i=0;i<1000;i++){
//     console.log("loop")
// }
// console.log('end')

// var totalTime= new Date() - date

// console.log(totalTime)

//here we checked how much time it take to display the result in the terminal it takes just 79 milli seconds

// setTimeout(()=>{
//     console.log("one")
// },4000)
// function x(y){
//   console.log("two")
// }
// x(function y(){
  
// }) 
// console.log("three")


function x(y){
    console.log("one")
}
x(function y(){
  
})
console.log("two")
