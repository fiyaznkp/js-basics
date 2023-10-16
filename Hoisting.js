// const sum = function(a,b){
//     const result = a + b
//      console.log(result)
// }
   
// sum(2,3)

// console.log(name)
// const name = "Fiyaz"
 //here it will not work this is hoisting only variables can be called after variable declaration otherwise it will show undefined

//  name("fiyaz")
//  function name (a){
//     console.log(a)
//  }
// name("fiyaz")

// but incase of functions it will work 

console.log(name)
var name = "fiyaz"

function myName(){
    var name = "ali"
    console.log(name)
}

 myName()

 console.log(name)

 // here first variable name is shown as undefined and all others were displayed 