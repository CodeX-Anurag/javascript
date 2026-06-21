/*A function is a block of code that performs a specific task. Instead of writing the same code again and again, we write it    once inside a function and use it whenever we need.     
 
1. function :
  This keyword tells JavaScript that we are creating a function.*/
  
  function greet() {
  
  }
  
  // 2. Function Name :
  //The name used to call the function.
  
  function greet() {
  
  } /* Here, greet = function name
  
  
  3. Parameters :
  Parameters are variables that receive values when the function is called.*/
  
  function greet(name) {
  
  }/*Here,name is a parameter.
  
  
  4. Function Body :
  Code inside { } is called the function body.*/
  
  function greet(name) {
      console.log("Hello " + name);
  }
  
  /*5. Calling a Function :
  To run a function, we call it.*/
  
  greet("Anurag");
  
  // Output: Hello Anurag
  
  
  
/*
1. Write a function named `makeTea` that takes one parameter, `typeOfTea`, and returns a string like "Making green tea" when called with "green tea".  Store the result in a variable named `teaOrder`.
*/
 
    
    function makeTea (typeofTea){
       return " Making "+ typeofTea ;
    }
    let teaOrder = makeTea("green tea ")    // yaha function call hua maketea   , call gaya funtion pe and then `typeofTea` phir     retun hua making ke sath typeof Tea       Making  typeofTea --> maketea  --> greentea 
    console.log(teaOrder);
    

/*
2. Create a function named `orderTea` that takes one parameter, `teaType`.Inside this function, create another function named `confirmOrder` that returns a message like "Order confirmed for chai". Call `confirmOrder` from within `orderTea` and return the result.
*/

                            
        // ! Note every function crete the own work space inside a funtion it create another work space 
  
  function orderTea (teaType){
     function confirmOrder (){
        return `Order Confirmed for  ${teaType}` ;  
     }
     return confirmOrder();
    }
   console.log(orderTea("chai"));


/*
3. Write an arrow function named `calculateTotal` that takes two parameters: `price` and `quantity`. The function should return
the total cost by multiplying the `price` and `quantity`. Store the result in a variable named `totalCost`.
*/
    
    const calculateTotal = (price , quantity) => {
            return "Total cost is :"+ price * quantity ;
    }
    let totalcost = calculateTotal(500,5);
    console.log(totalcost);
    

/*
4. Write a function named `processTeaOrder` that takes another
function, `makeTea`, as a parameter and calls it with the argument
"earl grey". Return the result of calling `makeTea`.
*/


function makeTea(teaType) {
    return "Making " + teaType;
}

function processTeaOrder(makeTea) {
    return makeTea("earl grey");
}

console.log(processTeaOrder(makeTea));

/*Step 1 : console.log(processTeaOrder(makeTea))
        Sabse pehle ye execute hota hai:    processTeaOrder(makeTea)

    Diagram:
        Global Scope
        │
        ├── makeTea()        ← Function
        │
        └── processTeaOrder(makeTea)
        
        Yahan jo makeTea pass hua hai, wo poori function hai.
        
Step 2 : Control processTeaOrder() ke andar gaya
        function processTeaOrder(makeTea) {
        
        Ab jo parameter makeTea hai, wo ek placeholder hai. Uske andar actual function aa gaya hai.
        
    Diagram:
        Global Scope
        │
        └── processTeaOrder()
              │
              │
              └── makeTea
                   ↑
                   Placeholder
                   jisme actual makeTea()
           function store hai
            function makeTea(teaType){
           return "Making " + teaType;
       }
        
Step 3 : Return statement  Ab ye line execute hogi: return makeTea("earl grey");

    Diagram:    
     processTeaOrder()
     │
     │
     └── makeTea("earl grey")
             │
             ▼
             Control upar makeTea() function mein gaya
        
 Step 4 : makeTea() function execute hua
        function makeTea(teaType) {
            return "Making " + teaType;
        }
    Ab:   teaType = "earl grey"
    Diagram:
     makeTea()
     │
     ├── teaType = "earl grey"
     │
     └── return "Making earl grey"

Step 5 : Value wapas processTeaOrder() mein aayi

     processTeaOrder()
     │
     └── return makeTea("earl grey")
                    │
                    ▼
           "Making earl grey"
                    │
                    ▼
           processTeaOrder() return    
Ab processTeaOrder() bhi yehi string return karega.
     
            
        Complete map :
                ├── processTeaOrder(makeTea)
                │         │
                │         │ Parameter makeTea
                │         │ (placeholder)
                │         ▼
                │    makeTea("earl grey")
                │         │
                │         ▼
                │   ┌───────────────────┐
                │   │     makeTea()     │
                │   │                   │
                │   │teaType="earl grey"│
                │   │                   │
                │   │ return            │
                │   │ "Making earl grey"│
                │   └───────────────────┘
                │         │
                │         ▼
                │ return to processTeaOrder()
                │         │
                │         ▼
                │ return "Making earl grey"
                │
                ▼
                console.log()
                │
                ▼
                Making earl grey*/



/*
5. Write a function named `createTeaMaker` that returns another function.
The returned function should take one parameter, `teaType`, and return a
message like "Making green tea".

Store the returned function in a variable named `teaMaker`
and call it with "green tea".
*/

function createTeaMaker() {
    return function (teaType) {
        return `Making ${teaType}`;
    };
}

let teaMaker = createTeaMaker();      
     //let result = teaMaker("green tea");
     //console.log(result);    
  console.log(teaMaker("green tea"));                        

