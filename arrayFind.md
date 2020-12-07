The find method is used to get the first value from array based on the function we made
example:
const value = [10, 12, 8, 25, 30]

const find = value.find(element => element < 20)

console.log(find)

the output is 10 (because it get only the first value from array that fit the function)