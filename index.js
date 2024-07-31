// // const x = 231;
// // console.log(x);
// // console.log(typeof x);

// // const x = 123;
// // const result = x.toString();
// // console .log (result);
// // console.log(typeof result);

// // const x = 123;
// // const result = String(x);
// // console.log(result);
// // console.log(typeof result);

// // let x = 2;
// // let y = true
// // console.log(true + x);

// // let x = "";
// // let result = Boolean(x);
// // console.log(x);
// // console.log(typeof x);

// // let result = true;
// // let output = String(result);
// // console.log(output)
// // console.log(typeof output);

// // let date = new Date();
// // let result = date.toString();
// // console.log(result);
// // console.log(typeof result);



// // string method

// const result = "hello world";
// // length
// console.log(result.length);

// // charAt

// console.log(result.charAt(2));

// // indexof

// console.log(result.indexOf("o"));

// // lastindexof

// console.log(result.indexOf("o"));

// // lowercase

// console.log(result.toLowerCase());

// // uppercase

// console.log(result.toUpperCase());

// // split
// console.log(result.split("  "));

// // includes
// console.log(result.includes("Worlds"));
// // replace
// console.log(result.replace("world",  "Everyone"));

//  slice
// console.log(result.slice(1, 6));

//  sub string
// console.log(result.substring(1, 6));

// // trim
// const output = "              lammooo";
// console.log(output.trim());

// // concatination
// console.log(result.concat("   I  am Javascript!"));

// operators
// Assignment operator 

// let y = 90;
// y += 20;
// console.log(y);

// comaprison operator
// let a = 10;
// let b = 5;
// let c = "10";

// //
// console.log(a == b);
// console.log(a === b);
// console.log(a != b);
// console.log(a  !== c);
// console.log(a >  b);
// console.log(a >=  b);
// console.log(a <= 10);

// // logical operator
// let x = true;
// let y = false;

// console.log(x && y);
// console.log(x || y);
// console.log(!x);

// concatination

// const strl1 = "hello";
// const strl2 = "world";

// console.log (strl1 + " " + strl2);

// // conditional(Ternary) operator

// let ageVote = 18;
// let result = ageVote >= 18 ? "Vote in" : "Vote out";
// console.log(result);

// 
//  const result = "hello world "
//  const output = " i live  life";
//  const Str3 = "i love javascript"
//  const Str4 = " whats up"

//  console.log(result + " " + output + " " + Str3 + " " + Str4);

//  console.log(`${result} ${output} ${Str3}`);

//  const a = 90;
//  const b = 80;
//  const c = 40;
//  const ans = a + b + c;
//  console.log(`The sum of number is: ${ans}`);

// unary operator 

// let ans ="234";
// let output = -ans;
// console.log(output);
// console.log(typeof output);

// const obj  ={
//       name : "Tika Ram Bhatrai",
//       age : 35

// }

// delete obj.age 

// console.log(obj)

//  statusCode

// let statusCode = 200;
// switch (statusCode) {
//     case 201:
//     console.log("Created!");
//     break;

//   case 401:
//   console.log("Unauthorized!"); 
//   break;

//   case 403:
//   console.log("Forbidden!"); 
//   break;

//   case 500:
//   console.log("Internal Server Error!"); 
//   break;

//   case 200:
//   console.log("ok!"); 
//   break;

//   default:
//     console.log("Invalid StatusCode!")
//     break;
// }

// loop
// for loop

    // for (let i = 1; i <= 10; i++){
    //     console.log(`I love javascript: ${i}`);
    // }

// for (let i = 1; i<=10; i++){
//   console.log(`3*${i} = ${3 * i}`); 
// }

// even number 
// for(let i = 1; i<20; i++){
//     if(i % 2 !== 0){
//         console.log(`The odd Number is : ${i}`);
//     }
// }

// while loop
//   let i = 0;
//   while (i <= 10 ){
//     console.log("hello world"+ i);
//     i++;
//   }
 
// do while
// let i = 1;
// do{
//     console.log("hello web" + i);
//     i++;
//  }  while (i <= 10);

// Array
// let result = [3,4,5,6,7,8];
// let sum = 0;
//  for(let  i = 0; i < result.length; i++) {
//     sum += result[i];

//  }

//  console.log(`The sum of Arr is : ${sum}`);

// arrey method\

// let arr = [4,5,6,7,8,9,4];
// length
// console.log(arr.length);

// push
// arr.push(12);
// console.log(arr);

// pop
// arr.pop();
// console.log(arr);

// shift
// arr.shift();
// console.log(arr);

// unshift
// arr.unshift(15);
// console.log(arr);

// splice
// arr.splice(1,3);
// console.log(arr);
  
// let result = ["Javascript", "is","Funny", "language"];
// console.log(result.join("-"));

// slice 
// let result = arr.slice(1,4);
// console.log(result);

// includes
// let result = arr.includes(4);
// console.log(result);

// concat
// console.log(arr.concat("hello"));

// let arr = [];
// let sum = 0;
// for (let i = 1; f<=10; i==){
//     arr.push(i);

// }
// console.log(arr);

// for(let i=0;i<arr.length;i++){
//       sum >=arr(i);

// }
  




// object

// const person ={
//     name : "Ram Yadav",
//     age : "12",
//     occupation :"programmer",
//     ismarried : "no",
//     address:{
//         street:"kalmati",
//         city:"kathmandu",
//         country:"Nepal"
//     },
//     greet:function (){
//         console.log(`hello my name is :${this.name} and i am : ${this .age}years old`);
//        },
        
//     };

//     // Destructure
//     const{
//         name,
//         age,
//         occupation,
//         ismarried,
//         address: {street,city,country},

//     }=person;
//     console.log(name, age , occupation, ismarried, street, country, city );
//     person.greet();


// function

// function myFunc(a , b){
//     return a + b;

// }
// let result= myFunc(10 , 9);
// console.log(result);

// function circle(radious){

//     return Math.PI * radious *radious;

// }
// let result=circle(5)
// console.log(`the area of circle is :${result}`);


// function Greet(name , age , education){
//     console.log(`Hello my name is:${name}.I am : ${age} years old. I have completed my collage in :${education}From Software collage of IT & E-commerce`);

// }
// Greet("Sohan Maharjan ", 17, "BCA ");

// javaScript ma three ways print message
// console.log()
// alert
// prompt

// function myfunc(){
//     let a = prompt("Enter your number");
//     let b = prompt("Enter your number");
//     let result = Number(a) + Number(b);
//     if (result);
//     alert(`The Sum of two number is : ${result}`);

// }

// myfunc();

// calculatingcartValue
// function calculationCartValue(){

// function CalculateTotal(cartItems, taxRate){
//     let total = 0;
//     for(let i = 0; i < cartItems.length; i++){
//         total += cartItems[i].price * cartItems[i].quantity;
//     }
//     total += total * taxRate;
//     return total;

// }

// let cart = [
//     {name :"Dr Sohan", price: 8000, quatity: 1 },
//     {name:"BUDO jutta", price: 85000, quantity: 2 },
// ]

// let ans = CalculateTotal(cart, 0.02);
// console.log(`your full and total payment is: ${ans}`);


// Scoping;
// function myfunc() {
// if (true){   

// var x = 100;
// let ans = 80;
// const y = 20;
//   console.log(y);
    
   
// }
// console.log(x);

// }
// myfunc();
 
// DOM manipulation

// let ans = document.getElementsByClassName("mydiv")[0];
// ans.innerText = " I love u babe " ;
// ans.style.backgroundColor = "red";
// ans.style.color = "white";
// ans.style.textAlign = "center";

// ans.setAttribute("class", "newclass");

// let output = document.getElementsByClassName("mydiv")[0];
// output.innertext = "I love u babe";
// output.style.backgroundColor = "red";
// output.style.color = "white";
// output.style.textAlign = "center";
// output.style.padding = "10px";

// let show = document.getElementsByTagName("span")[0];
// show.innerText = "I love u babe";
// show.style.backgroundColor = "green";
// show.style.color = "orange";

// // let h2 = document.createElement("h2");
// // h2.innerText = "Task1";
// // document.body.append(h2);

// function AddTask(){
// let h2 = document.createElement("h2");
// h2.innerText = "Task1";
// document.body.prepend(h2);
// }

// function RemoveTask(){
//     let div = document.querySelector("h2")
//     div.remove();
// }


// let btnAdd =  document.querySelector("#btn");
// btnAdd.style.backgroundColor = "blue";
// btnAdd.style.color = "orange";
// btnAdd.style.padding = "20px";
// btnAdd.style.border = "none";
// btnAdd.style.cursor = "pointer";
// btnAdd.onclick =  AddTask;

// let btnRemove =  document.querySelectorAll("button")[1];
// btnRemove.style.backgroundColor = "blue";
// btnRemove.style.color = "orange";
// btnRemove.style.padding = "20px";
// btnRemove.style.border = "none";
// btnRemove.style.cursor = "pointer";
// btnRemove.onclick = RemoveTask;

// ADvance Array method

// function Add(a,b)=> {
//     let result = a + b;
//     return result;


// };
// let output = Add(4,5);
// console.log(output);

// let arr = [4,5,2,3,7,8,9]
// // find

// let ans =arr.reduce((accum , curValue) =>  accum + curValue );
 
   


// console.log(ans);

// const product = [
//     {id:1, name:"Goldstar",price:9000, instock:true},
//     {id:2, name:"Air force",price:10000, instock:false},
//     {id:3, name:"Vans",price:6000, instock:true},
//     {id:4, name:"Goldstar",price:9000, instock:false}, 
//     {id:5, name:"Sandals",price:3000, instock:true},

// ];

// let output = product.some= product.some((value)=>!value.instock);
// console.log(output);


// every
// console.log(ans);

// const product = [
//     {id:1, name:"Goldstar",price:9000, instock:true},
//     {id:2, name:"Air force",price:10000, instock:false},
//     {id:3, name:"Vans",price:6000, instock:true},
//     {id:4, name:"Goldstar",price:9000, instock:false}, 
//     {id:5, name:"Sandals",price:3000, instock:true},

// ];

// let output = product.every= product.every((value)=>!value.instock);
// console.log(output);



// some
// console.log(ans);

// const product = [
//     {id:1, name:"Goldstar",price:9000, instock:true},
//     {id:2, name:"Air force",price:10000, instock:false},
//     {id:3, name:"Vans",price:6000, instock:true},
//     {id:4, name:"Goldstar",price:9000, instock:false}, 
//     {id:5, name:"Sandals",price:3000, instock:true},

// ];

// let output = product.some= product.some((value)=>!value.instock);
// console.log(output);

// // forEach
// console.log(ans);

// const product = [
//     {id:1, name:"Goldstar",price:9000, instock:true},
//     {id:2, name:"Air force",price:10000, instock:false},
//     {id:3, name:"Vans",price:6000, instock:true},
//     {id:4, name:"Goldstar",price:9000, instock:false}, 
//     {id:5, name:"Sandals",price:3000, instock:true},

// ];

// let output = product.forEach= product.forEach((value)=>!value.instock);
// console.log(output);


// map
// console.log(ans);

// const product = [
//     {id:1, name:"Goldstar",price:9000, instock:true},
//     {id:2, name:"Air force",price:10000, instock:false},
//     {id:3, name:"Vans",price:6000, instock:true},
//     {id:4, name:"gtr",price:9000, instock:false}, 
//     {id:5, name:"Sandals",price:3000, instock:true},

// ];

// let output = product.map= product.map((value)=> value.name);
// console.log(output);
// let h1 = document.createElement("h1");
// h1.innerHTML = output;
// document.body.append(h1);

// reduce nethod
// console.log(ans);

// const product = [
//     {id:1, name:"Goldstar",price:9000, instock:true},
//     {id:2, name:"Air force",price:10000, instock:false},
//     {id:3, name:"Vans",price:6000, instock:true},
//     {id:4, name:"gtr",price:9000, instock:false}, 
//     {id:5, name:"Sandals",price:3000, instock:true},

// ];

// let output = product.reduce= product.reduce((total,curValue)=> total + curValue.price, 0);
// console.log(output);


// event list

// const heading =  document.getElementById("heading");
// const BOX1  = document.getElementById("box1");
// const addBtn = document.getElementById("btnAdd");
// let input = document.getElementById("newInput")

// // console.log(heading);
// // console.log(box1);
// // console.log(btnAdd);
// btnAdd.addEventListener("click", () =>{
//     console.log("clicked");
//     heading.innerText = "Who are u";
//     heading.style.backgroundColor = "yellow";
//     heading.style.color ="white";
//     heading.style.padding="20px";
// });
//  addBtn.addEventListener("dblclick", ()=>{
//     addBtn.style.backgroundColor ="red";
//      addBtn.style.color = "white";
//      addBtn.style.padding= "20px";
//      addBtn.style.border ="none";
//  })


// input.addEventListener("change", (e) => {
//     console.log(e.target.value);
// });


// const input = document.getElementById("myinput");
// const addbtn= document.getElementById("addbtn");
// const removeBtn = document.getElementById("removeBtn");

// const myFunc = ()=>{
//     localStorage.setItem("key1",JSON.stringify({name:"Bikram Shrestha",age: 24,}));
//     localStorage.setItem("key1" ,
//         JSON.stringify({name: "Bikram Don", age: 24, isMarried:true}));

// };
// addbtn.addEventListener("click",myFunc);
// removeBtn.addEventListener("click",()=> {
//     localStorage.clear();
// });
// if(localStorage.getItem("key1")){
//     alert(localStorage.getitem("key1"))
// };

// Math(Object)
// console.log(Math.random());
// // pow
// console.log(Math.pow(2,6));
// // square
// console.log(Math.sqrt(25));

// round
// let num = 4.7;
// let result=Math.round(num);
// console.log(result);

// floor
// let num = 4.2;
// let result=Math.floor(num);
//  console.log(result);

// ceil
//  let num = 4.10000000000000000000;
//  let result=Math.ceil(num);
// console.log(result);

// trunc
// let num = 4.1300000;
// let result=Math.trunc(num);
// console.log(result);

//abs
// function AbsValue(a,b){
//     return Math.abs(a - b);
// }

// let result = AbsValue(3 ,7);
// console.log(result);

// console.log(Math.PI)

// // Area of circleS
// function AreaofCircle(radious){
//     return Math.PI * radious * radious;

// }

// let result = AreaofCircle(5);
// console.log(result);

// OTP
// function generateOTP() {
//     return Math.floor(1000000 + Math.random()*9000000);
    
// }
// let output = generateOTP();
// console.log(output);

// Date
// const now = new Date();
// console.log(now);


// let year = now.getFullYear();
// console.log(year);


// let month = now.getMonth();
// console.log(month);


// let day = now.getDay();
// console.log(day);


// let hours = now.getHours();
// console.log(hours);

// settimeout

// setTimeout( () =>{
//     console.log("SUARYA AIRLINES HOTEST CRASH");

// }, 2000);

// let intervalId = setInterval(() => {
//     console.log("SUARYA AIRLINES HOTEST CRASH");

// }, 1000);

// setTimeout(() =>{
//     clearInterval(intervalId);
// }, 5000);

// clock

// function updateClock(){
//   ;let clock=  document.querySelector(".clock");
//     let now = new Date()
//  let hours = now.getHours().toString().padStart(2,"0");
//  let minutes = now.getMinutes().toString().padStart(2,"0");
//  let seconds = now.getSeconds().toString().padStart(2,"0");

//  clock.innerHTML =`${hours}:${minutes}:${seconds}`;
// }

// // setInterval(updateClock, 1000);

// function BankAccount(costumerName, balance){
//   this.costumerName = costumerName;
//   this.balance = balance;
//   this.accountNumber = Date.now();
// }

// const ramAccount = new BankAccount("Ram Thapa", 5000);
// const sitaAccount = new BankAccount("Sita Devi", 9000);

// console.log(ramAccount);
// console.log(sitaAccount);

// function Array(){

// }
// new Array()


// class(OOP)
class BankAccount{
  constructor(customerName,balance){
    this.customerName = customerName;
    this.balance = balance;
    this.accountNumber = Date.now();
   }
   deposit(amount){
    this.balance +=amount;
   }
   withdraw(amount){
    this.balance -=amount;
   }
  }
const sohanAccount = new BankAccount("Sohan Maharjan", 33000000);
const PutaliAccount = new BankAccount("Putali ", 31000000);
console.log(sohanAccount.balance);
sohanAccount.deposit(500000);
PutaliAccount.deposit(300);
PutaliAccount.withdraw(30000);

console.log(sohanAccount, PutaliAccount);

class SavingAccount extends BankAccount {
  constructor(customerName,balance){
     super(customerName,balance);
     this.transactionLimit = 50000
   }
  takePersonalLoan(amount, taxRate){
    console.log(`You Personal loan is:${amount}`);
    let ans = amount + (amount * taxRate) /100;
    console.log(`You Personal loan with Interest is:${ans}`);
  }
}
const sohanAccount  = new SavingAccount("Sohan Maharjan", 33000000);
const PutaliAccount = new SavingAccount("Putali ", 31000000);
PutaliAccount.takePersonalLoan(90000, 12);
console.log(PutaliAccount);
























    

   



   












