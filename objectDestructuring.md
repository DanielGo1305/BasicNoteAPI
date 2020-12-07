objectDestructuring is used to simplify the variable written to call/extract the value from property of object

example:

# given object

const user = {
    name : "Daniel",
    Address : "Tangerang"
}


# without object destructuring

if we want to get the value of name & address property from user object, we usually write it like this 

const name = user.name
const address = user.Address
console.log(name, address)

if we want to get many value from many properties and object, it will take a very long time.

so we use the objectDestructuring to simplify it.

# with object destructuring

const{name, address} = user

console.log(name, address)

with objectDestructuring, we doesn't need to make 2 variable and retype the object & properties many time to get the value