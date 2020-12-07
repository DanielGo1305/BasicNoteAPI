object shorthand is used to make the object looks more clean,neat and simple because it divide the property into the object and the value into variabel

example :

# we usually type the object like this

const user = {
    name : "Daniel",
    Address : "Tangerang"
}

# with object shorthand

const name = "Daniel"
const age = 29
const location = 'Tangerang'
  
const user = { 
    name,       
    age, 
    location 
} 
  
console.log(user)  ==> the output will be {name : "Daniel", age : 29, location : "Tangerang"}