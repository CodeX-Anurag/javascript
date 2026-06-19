console.log("Hey , How are you ");
console.table({name:"Anurag Soni", age:21, city:"Indore"});
console.warn({ name: "Anurag Soni", age: 21, city: "Indore" });  // it will show warning in console  you can see in browser console , generaly it is used to show some warning in console
console.error({ name: "Anurag Soni", age: 21, city: "Indore" }); // it will show error in console



/*                   {}  DATA TYPES  {}                     */ 

let score = 100;
console.assert(score < 100, { name: "Anurag Soni", age: 21, city: "Indore" }); // it will show error in console if the condition is false

let teatype = ["leamon tea, masala tea", "green tea", "black tea"];
let coffeetype = ["black coffe", "white coffe", "cappuccino"];

console.group("Tea_types","And Coffe_Type"); // it will group the logs in consoe
console.log(teatype);
console.log(coffeetype);
console.groupEnd("Tea types"); // it will end the group

let isloggedin = true;
console.log(isloggedin);

let username =[name="Anurag", Lastname="Soni", age=21, city="Gwalor"];
console.log(username);

let getscore = score ; // it will take the value of score and store it in getscore variable
console.log(getscore);