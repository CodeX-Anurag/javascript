/*
Types
│
├── Primitive
│   ├── String
│   ├── Boolean
│   ├── Number
│   ├── null
│   ├── undefined
│   └── Symbol
│
└── Non-Primitive
    │
    └── Objects
        ├── Array
        ├── Functions
        └── Objects
*/

                   //     Primitives    

const types = {
  Primitive: ["String", "Boolean", "Number", "null", "undefined", "Symbol"],

  NonPrimitive: {
    Objects: ["Array", "Functions", "Objects"],
  },
 };
 console.log(types);


/*                         Number                    */ 
  let balance  = 100 ;
  let another_balance = new Number(999);
  
  console.log(balance);
  console.log(typeof balance);   // type batayega char hai ya number 
  
  console.log(another_balance);
  console.log(typeof another_balance);    //  Number : 999  # so this become a object this means every   premetive can become a adv data type or non premetive i.e. is object 


/*                         Boolean                    */ 
 let isAnuragPro = true ;
 let ismotaPro = new Boolean(false) ;
 
 console.log(isAnuragPro);
 console.log(ismotaPro);  


/*                   Null & Undefined                 */ 

 let firstrname ;
 console.log(firstrname);

 let lastname = null ; 
 console.log(lastname);


/*                         String                      */ 

 /*
  Why use backticks?  ``
1. Variable insertion (Template Literals)
 */
 
 let username = "Anurag";
 console.log(username);
 let greetMessage = `Hello ${username} !`;
 console.log(greetMessage)


 let Second_username = "gappu";
 console.log("Hello ${Second_username}"); // Prints exactly this   --> Hello ${username}
 console.log(`Hello ${Second_username}`); // Print --> Hello gappu


 let oldGreet = "Hello " + username + " !";  //Without backticks:
 let greet_Message = `Hello ${username} !`;   //With backticks:
 console.log(oldGreet);
 console.log(greet_Message);
 
//2. Multiple variables
 let name = "Anurag";
 let age = 20;
 
 console.log(`My name is ${name} and I am ${age} years old.`);


//3. Multi-line strings

 let text = "Hello\nHow are you?\nI'm fine"; //Without backticks
 
 let te_xt = `Hello  
 How are you?
 I'm fine`;    //With backticks:
 console.log(text);
 console.log(te_xt);



//                   Non - Primitives 
 
 let obj = {
  name: "Anurag", // this is primitive
  age: 21,        // this is primitive
};

console.log(obj);
console.log(obj.name);
console.log(typeof obj);
    /*  so why we get object if its is primitive inside because while creading a obj we get a certain fix space inside it can be either premitive or non-primitive 
 Note : if we declare a variable whit const 
  const obj = {
  name: "Anurag", // this is primitive
  age: 21,        // this is primitive
};   we cant change it but in obj we can change it  for ex.  name age etc */

obj.branch = "CSE"
console.log(obj.branch);
console.log(obj);  // adding a branch in obj 




//                                  Array      

let tittle = ["Learning Basics of Array",true];
console.log(tittle[0]);



console.log("1" + 1 );    // 11
console.log(1 + "1");     // 11


let isvalue = true;
console.log(isvalue + 1);   

                          



