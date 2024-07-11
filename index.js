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
 










    

   



   












