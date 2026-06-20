// &  ->  and   req both of them are true
// || ->  or    one of them is true so the condition is true
//  ! ->  reverse

let islogedin = true;
let ismembership = false;
console.log(islogedin && ismembership); // only give true if both are true

let use_phonepay = true;
let use_googlepay = false;
console.log(use_phonepay || use_googlepay);

// Notes
/* Always use parentheses when we are doing calculation */

let score = 2 * 3 + 2 - 1; // ans 7
console.log(score);
let P_score = 2 * (3 + 2) - 1; // ans 9
console.log(P_score);
// so like this calculation always use parentheses like a good boy to get a correct result .





//                              Conditions
/*   
      ┌───────┐
      │ Check │
      └───────┘
       │     │
 false │     │ true
       ▼     ▼
 Output B  Output A
               │
               ▼
           ┌───────┐
           │ Check │
           └───────┘
            │     │
      false │     │ true
            ▼     ▼
       Output C  Output D*/

let condition1 = true;
let condition2 = false;

 if (condition1) {
   console.log("Output A");

   if (condition2) {
     console.log("Output D");
   } else {
     console.log("Output C");
   }
 } else {
   console.log("Output B");
 }


/*  Example1 
Checking if a number is greater than another number or not */

let num1 = 8;
let num2 = 5;

if(num1 > num2){
    console.log("Num1 is greater than num2")
}else{
    console.log("num2 is greater than num1")
}


/*  Example2
Checking if a string is equal to another string or not 
*/


let game_name = "valo" 
let another_name = "Csgo"

if(game_name == another_name){
    console.log("Pick another name");
}else{
    console.log("You can pick this name");
}


/* Example3
Checking if a variable is a number or not 
*/

let variable = 18 ;

if(typeof variable === Number){            // === (Strict Equality)  It checks both value and type:
    console.log("YES, this is a number ");
}else{
    console.log("No, this is not a number");
}


/* Example4
Check if a Boolean value is true or not 
*/

let is_Anurag_Pro = true;

if(is_Anurag_Pro){     //  true 
    console.log("Yes , Anurag is pro")
}else{                 // false
    console.log("No , Anurag is  noob");
}


/* Example5
Check if a array is empty or not
*/

let arr1 = [1,2];
console.log("Length of an array :",arr1.length);

if(arr1.length === 0){      // ! Dont use === null  because arr1 → an empty array ([])  null →is absence of a value
    console.log("Yes, array is empy")
}else{
    console.log("No, array is not empty")
}

