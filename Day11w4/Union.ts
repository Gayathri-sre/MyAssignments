let Apistatus:number|string|boolean
Apistatus='ok'
console.log(`Apistatus value is ${typeof(Apistatus)} and the value is ${Apistatus}`)

//Intersection -> AND condition (&)
let studDet:boolean&string
//It shows let StudDet as 'never' as we need to go for type alias

//Type alias -> create custom typeof data
type studDet={
    stdStatus:boolean
    stdName:string
}

type details={
    profStatus?:boolean
    profName:string
}

//optional value-> after variable name ?
//type db=studDet|details
type db1=studDet&details
let info:db1={
    stdName:"Harry",
    stdStatus:true,
    profName:"Hagrid",
    profStatus:true
}
console.log(info)
console.log(`Retrieve all the values ${info}`)