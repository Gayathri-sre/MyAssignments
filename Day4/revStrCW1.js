//Classrom activity 1
//1. Reverse a string

let name = "Playwright"
let rev=""
console.log("Actual String : "+name)
for(let i=name.length;i>=0;i--) {
    rev=rev+name.charAt(i)
}
console.log("Reversed String : "+rev)


//Classrom activity 2
//2. Count the alphabets in a word

let lang="javascript"
let count=0
let count1=0
for(i=0;i<lang.length;i++) {
    if(lang.charAt(i)=='a') {
        count++
    }
    else if(lang.charAt(i)=='s') {
        count1++
    }
}
console.log(`Total count of 'a' : ${count} and Total count of 's' : ${count1} in the work "Javascript".`)

