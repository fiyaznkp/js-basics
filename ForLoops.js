// for(i=0;i<10;i++){
//     console.log(i)
// }

// const States =[
//     "kerala",
//     "Tamil Nadu",
//     "Karnataka"
// ]

// for(i=0;i< States.length; i ++) {
//     console.log(States[i])
// } 
//here we are using loop for arrays 

// const states = [
//     2,
//     'kerala',
//     'tn',
//     'ka',
//     1
// ]

// for(i =0;i< states.length;i++){
//     if(typeof states[i] === "string" ) continue;
//     console.log(states[i])
// } 
// here in case of continue it checks whether i = string and it returns numbers 1,2 in the array .
// if we change i ! == string tehn it returns strings like kerala,tn,ka in the array

// const states=[
//     5,
//     'tn',
//      'kerala',
//      'ka',
//      3,5
// ] 
// for(i =0;i<states.length;i++){
//   if(typeof states[i]==="string") break;
//   console.log(states[i])
// }

const states=[
    
    'tn',
     'kerala',
     'ka',
     3,5]

     for(i=0;i<states.length;i++){
        if(typeof states[i] !== "string") break;
        console.log(states[i])
     }