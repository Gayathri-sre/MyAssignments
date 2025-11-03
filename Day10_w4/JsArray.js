//Javascript Array Class tasks

/* let value-[23,true,'a','r','test',57]
find Length
unshift -> 34
push ->'js'
splice(2,2,"a","b")
shift
pop */

let myVal=[23,true,'a','r','test',57]
console.log("Value length is "+myVal.length)

//Push and Unshift -> Add
myVal.push("Js")
myVal.unshift(34)
console.log("Using Push and Unshift "+myVal)
//console.log(myVal)

//Splice -> From 2nd element remove 2 value and replace 2 values
myVal.splice(2,2,"a","b")
console.log("Replaced 2 values from the position 2 "+myVal)

//Pop and Shift -> Remove
myVal.shift()
myVal.pop()
console.log("Using Pop and Shift "+myVal)

