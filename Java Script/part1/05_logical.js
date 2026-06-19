// &  ->  and   req both of them are true 
// || ->  or    one of them is true so the condition is true 
//  ! ->  reverse

let islogedin = true ;
let ismembership = false ; 
console.log(islogedin && ismembership);  // only give true if both are true 

let use_phonepay = true ;
let use_googlepay = false ; 
console.log(use_phonepay || use_googlepay)  

// Notes 
/* Always use parentheses when we are doing calculation */

let score = 2 * 3 + 2 -1    // ans 7 
console.log(score);
let P_score = (2 * (3 + 2)) -1    // ans 9
console.log(P_score);
// so like this calculation always use parentheses like a good boy to get a correct result .
