function getUser(name,role){
    switch(role) {
     case "admin": 
      return `${name} is admin`
     case "subAdmin":
       return `${name} is subAdmin`  
     case "user":
       return `${name} is user`
     case "testUser":
        return `${name} is testUser`  
     default :
        return "not a user"      
    }
}
currentUser=getUser('fiyaz',"admin")

console.log(currentUser)
console.log(getUser("fiyaz","subAdmin"))