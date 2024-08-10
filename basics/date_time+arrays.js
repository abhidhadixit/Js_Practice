// Date and time
let mydate=new Date()
console.log(mydate)
console.log(mydate.toString())
console.log(mydate.toDateString())
console.log(mydate.toLocaleString())
console.log(typeof mydate); 
console.log(mydate.getDay())
console.log(mydate.getMonth())
console.log(mydate.getFullYear())

// arrays
const myarr=[1,2,9,8,6,5]
// myarr.shift()
console.log(myarr) 
// slilce and splice 
const arr2=myarr.slice(1,3);
console.log(myarr)
console.log(arr2)

const fruit=("apple","banana","strawberry")
const vegetable=("ladyfinger","potato","cabbage","brocoli")
const food=fruit.concat(vegetable)
console.log(food)

// objects
const summary={
    name:"Abhidha",
    age:18,
    location:"Pune",
    email:"abc@gmail.com",
    mysym:"abhidha"
}
console.log(summary["name"])
console.log(summary["age"])
console.log(summary["email"])
console.log(summary["location"])
console.log(summary["sysym"])

const target={a:1,b:2,c:8};
const source={d:55,g:56,h:7};
const course={
    coursename:"js",
    courseprice:"999",
    courseinstructor:'abhidha'
}

