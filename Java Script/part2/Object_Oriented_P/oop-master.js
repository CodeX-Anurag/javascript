//01
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
 console.log(car.start());    // ! Note : yaha () small bracet es liye kyuki dhyan se dekho star funtion hai agr  nahi hota tho bracket nahi lagate 

//02
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);
 console.log(john.name);   // jese yaha koi function nahi hai alag se john mein tho bracket nahi lagega 
 console.log(john.age);     
 console.log(john);



//03
function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

Array.prototype.aaku = function () {
  return `Custom method ${this}`;
};

let janwar = new Animal("Labradour")
 console.log(janwar);
 console.log(janwar.speak());

let myArray = [1, 2, 3];
 console.log(myArray.aaku());
let myNewArray = [1, 2, 3, 4, 5, 6];
 console.log(myNewArray.aaku());




 /*            OOP

      ┌──────────────┐
      │ Encapsulation│
      ├──────────────┤
      │ Abstraction  │
      ├──────────────┤
      │ Inheritance  │
      ├──────────────┤
      │ Polymorphism │
      └──────────────┘
*/

//04   Inheritance 
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {    //! here we are doing a inhetance , geeting some  values from vechicle class   so by using  [exdent] we can inherit 
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
 console.log(myCar.start());
 console.log(myCar.drive());

let vehOne = new Vehicle("Toyota", "Corolla");
 console.log(vehOne.make);


/*1. Encapsulation

    Encapsulation means:   Data aur methods ko ek hi box (class/object) ke andar rakhna.
    
    Real Life Example
    Phone 📱
    Tum phone use karte ho,  Tum dekhte ho
    
    Call Button
    Camera
    Gallery
    Settings
    
    Lekin andar kya chal raha hai?
    
    Processor
    RAM
    CPU
    Algorithms
    
    Tumhe nahi pata.

    Sab ek box ke andar pack hai.  -->  Ye hi encapsulation hai.
    
    Without Encapsulation*/
    let name = "John";
    let age = 20;
    
    function greet(){
    }
    
 //Sab alag-alag pada hua hai.  With Encapsulation
    class N_Person{
    
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
    
        greet(){
            console.log("Hello");
        }
    
    }
 /*Diagram

                N_Person
      ┌──────────────────────────┐
      │ name                     │
      │ age                      │
      │                          │
      │ greet()                  │
      └──────────────────────────┘
      
      Memory      
      person1
      ┌─────────────────────┐
      │ name = John         │
      │ age = 20            │
      │ greet()             │
      └─────────────────────┘
 */
        class BankAccount {
      #balance = 0;      // # so ye private ho jayega es variable ko ab koi aur access nahi kar sakta , for accessing it we have to use a custom method   ,  -->  we can only access it wiht inside the class that is the whole  idea of encapsulationdata or method  ko  ek hi class/Object  ke andar  rakhna 
     
      deposit(amount) {
        this.#balance += amount;
        return this.#balance;
      }
      getBalance() {
        return `only This Method ${this.#balance}`;
      }
    }
    
    let account = new BankAccount();
    //console.log(account.#balance);   ye error dega kyuki balance is private we can only access inside by class or  by
    console.log(account.getBalance());   // this method 





/*2. Abstraction

Abstraction means
      
      Show only what is necessary.
      Hide unnecessary implementation.
      
      Real Life
      
      Car
      Tum sirf:
      
      Start Button
      Brake
      Steering

      use karte ho.
      
      Tumhe ye nahi pata
      Fuel Injection
      Engine Timing
      Gear Mechanism
      
      JavaScript me bhi same.
      
      Example*/
      
      class N_Car{
      
          start(){
              console.log("Car Started");
          }
      
      }
      
    /*  User sirf     car.start();   karta hai.    Usko andar kya ho raha hai pata nahi.
      
  Diagram
      
      User   
      N_car.start()
            │
            ▼
      ┌──────────────┐
      │ Car          │
      │              │
      │ Engine code  │
      │ Fuel system  │
      │ Sensors      │
      └──────────────┘    
      Hidden.
      
      Ye abstraction hai.
      
      Flow
      User
       │
       ▼
      start()
       │
       ▼
      Internal Logic
       │
       ▼
      Car Starts

                  Difference
      Encapsulation  -->   Pack everything together.
      
      Abstraction    -->   Hide unnecessary details.
  */
class CoffeMachine {
  start() {
    // call DB
    // filter value
    return `Starting the machine...`;
  }
  brewCoffee() {
    // complex calculation
    return `Brewing coffee`;
  }

  pressStartButton() {           //  accessing together 
    let msgone = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgone} + ${msgTwo}`;
   }
 }

 let myMachine = new CoffeMachine();
   console.log(myMachine.start());
   console.log(myMachine.brewCoffee());
   console.log(myMachine.pressStartButton());





/* What is Polymorphism?
    
    Sabse pehle word ko todte hain.
    Poly  = Many (bahut saare)
    Morph = Forms (roop ya behavior)
    
    Matlab:
    Ek hi cheez ke bahut saare forms ya behaviors ho sakte hain.
    
    Simple language me:
    Same method name, but different behavior depending on the object.
    
    Real Life Example 1
    
    Tumhare ghar me ek button hai. 
    Play Button
    
    Phone me:
    ▶ Play Song
    
    YouTube me: 
    ▶ Play Video
    
    Game me:
    ▶ Resume Game
    
    Button ka naam same hai.
    play()
    
    Lekin kaam alag-alag.

Ye hi Polymorphism hai.*/
    class Bird {
      fly() {
        return `Flying....`;
      }
    }
    
    class Penguin extends Bird {
      fly() {
        return `Penguins can't fly`;
      }
    }
    
    let bird = new Bird();
    let penguin = new Penguin();
     console.log(bird.fly());
     console.log(penguin.fly());

  /*POLYMORPHISM Meaning

         Same method

           fly()
     
     Different behaviour
     
           Bird
     
            ↓
        
         Flying...
     
       Penguin (Bird)
     
           ↓
     
     Penguins can't fly
  */   


// static kya hai , Sabse pehle Normal Method
    class Calculator {
        add(a, b) {
            return a + b;
        }
    
    }
    
    // Object banana padega.
    
    let calc = new Calculator();
    
    console.log(calc.add(2, 3));
    
    /*Flow:
    
    new Calculator()
           │
           ▼
       Object bana
           │
           ▼
      calc.add(2,3)
           │
           ▼
           5
    
    Question:
    Agar add() sirf numbers add karta hai...  ,To object banane ki kya zarurat?   Object ke andar koi data hi nahi hai.
    
    Static Method*/
    class S_Calculator {
        static add(a, b) {
            return a + b;
        }
    
    }
    //Ab directly:
    console.log(S_Calculator.add(2,3));

    /*
    Flow:
    Calculator Class
           │
           ▼
       static add()
           │
           ▼
          2+3
           │
           ▼
           5
  */
    class SCalculator {
      static add(a, b) {
        return a + b;
      }
    }
    
     let miniCalc = new SCalculator();
     console.log(miniCalc.add(2, 3));
     console.log(SCalculator.add(2, 3));

 /*Kab Static Use Karte Hain?
  Jab function object ke data (this) par depend nahi karta.

Example:*/

  class NCalculator {
  
      static add(a,b){
          return a+b;
      }
  
  }
  
 //Yahan this ka use hi nahi hai. Isliye static perfect hai. Kab Static Use Nahi Karna Chahiye?



    class Student {
    
        constructor(name){
            this.name=name;
        }
    
        greet(){
            return `Hello ${this.name}`;
        }
    
    }
    
   // Yahan   this.name  use ho raha hai. Isliye  greet() ko static nahi bana sakte.
    
   // Kyuki static methods ke paas kisi specific object ka this.name nahi hota.
    
   /* Easy Rule (Interview Trick)
    Agar method...
    
    ✅ Object ki information use karta hai (this.name, this.age, etc.)   
    ➡️ Normal method
    
    Agar method...
    
    ✅ Sirf koi utility ka kaam karta hai (addition, validation, formatting, conversion)
    ➡️ Static method
    
                                        Final Comparison
               Normal Method	                                           Static Method
          Object se call hota hai                                    	Class se call hota hai
                new required	                                           new not required
            this use kar sakta hai                       	Usually this object data ke liye use nahi hota
           Example: student.greet()                         	Example: Math.max() or Calculator.add()
 */


// Getters and setters
class Employee {
  #salary;
  constructor(name, salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be in negative");
    }
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}
let emp = new Employee("Alice", -50000);
console.log(emp._salary);
emp.salary = 60000;

/*#   Getter and Setter ?

  Suppose tumhare paas ek Employee class hai.*/
    
    class Employee {
    
        constructor(name, salary) {
            this.name = name;
            this.salary = salary;
        }
      }
    let emp = new Employee("Anurag", 50000);
    
    /*Memory:
    
           emp
    ┌────────────────────┐
    │ name = "Anurag"    │
    │ salary = 50000     │
    └────────────────────┘
   #] Problem 1
    Koi bhi salary change kar sakta hai.
    
    emp.salary = -100000;
    
    Memory
           emp
    ┌────────────────────┐
    │ name = "Anurag"    │
    │ salary =-100000 ❌ │
    └────────────────────┘ 
    #  Ye galat hai.   Salary negative nahi honi chahiye.
    
   #] Problem 2
    Koi bhi salary dekh sakta hai.
    
    console.log(emp.salary);
    
    Output  : 50000
    
    Ho sakta hai company nahi chahti ki salary sab dekh saken.
    
    Solution : JavaScript ne diya   
        Getter    Aur   Setter



    Setter ka kaam hai:
    Jab koi value SET kare (assign kare), tab kuch rules check karo.
    
    Example*/
    
    class Employee {
    
        constructor(name, salary) {
            this._salary = salary;
        }
    
        set salary(value) {
    
            if (value < 0) {
                console.log("Invalid Salary");
            }
            else {
                this._salary = value;
            }
    
        }
    
    }
    /*Execution
    emp.salary = 60000;
    
    Dhyan do,  Tumne   salary = likha.   JavaScript automatically   set salary(value)  call karega.
    
    Flow
    emp.salary = 60000
    
            │  
            ▼
       Setter Call
            │
      value = 60000
            │  
       value < 0 ?
            │
            ▼
          false
            │
            ▼
     _salary = 60000
    
    Memory :
           emp 
    ┌────────────────────┐
    │ _salary = 60000    │
    └────────────────────┘

    */ 
  /*Invalid Salary
    emp.salary = -5000;
    
    Flow
    emp.salary=-5000
          │
          ▼
        Setter 
          │  
     value=-5000
          │
       value<0 ?   
          │  
         YES 
          ▼
    Invalid Salary
    
    Memory
          emp
    ┌────────────────────┐
    │ _salary = 60000    │
    └────────────────────┘
    
    Notice :  Salary change hi nahi hui.

Why Setter?

Normal assignment

emp.salary=-5000;

↓

Koi checking nahi.

Setter

↓

Har assignment pe validation.

Getter

Ab maan lo company salary hide karna chahti hai.

Normal

console.log(emp.salary);

Output

60000

Company nahi chahti.

To

get salary(){

    return "Salary is Private";

}

Execution

console.log(emp.salary);

JavaScript automatically

get salary()

call karega.

Flow

emp.salary

     │

     ▼

Getter

     │

     ▼

return

"Salary is Private"

Output

Salary is Private
Important Thing

Notice

Getter ko call karne ke liye

emp.salary

likhte hain.

Not

emp.salary()

❌

Because getter function nahi lagta.

Wo property ki tarah behave karta hai.

Complete Code
class Employee {

    constructor(name, salary) {
        this.name = name;
        this._salary = salary;
    }

    get salary() {
        return this._salary;
    }

    set salary(value) {

        if (value < 0) {
            console.log("Invalid Salary");
        }
        else {
            this._salary = value;
        }

    }

}

let emp = new Employee("Anurag", 50000);

console.log(emp.salary);

emp.salary = 60000;

console.log(emp.salary);

Output

50000

60000
Memory Diagram

Initially

emp

┌──────────────────────┐
│ name = Anurag        │
│ _salary = 50000      │
└──────────────────────┘

Read

emp.salary

Flow

emp.salary

      │

      ▼

Getter

      │

      ▼

_salary

      │

      ▼

50000

Write

emp.salary=70000

Flow

emp.salary=70000

        │

        ▼

Setter

        │

        ▼

_salary=70000

Memory

emp

┌──────────────────────┐
│ name = Anurag        │
│ _salary = 70000      │
└──────────────────────┘
Why _salary?

Tum notice karoge ki maine likha:

this._salary

instead of

this.salary
Agar hum likhen:
set salary(value){
    this.salary = value;
}

To kya hoga?

this.salary = value
        │
        ▼
Setter call
        │
        ▼
this.salary = value
        │
        ▼
Setter call
        │
        ▼
Setter call
        │
        ▼
Setter call...

Infinite loop! 💥

Isliye hum actual value ko kisi aur property me rakhte hain, jaise:

this._salary

Ya modern JavaScript me:

#salary
_salary vs #salary
_salary
this._salary = 50000;
Bas naming convention hai.
Bahar se access ho sakta hai.
console.log(emp._salary); // 50000
#salary
#salary;

Ye private field hai.

console.log(emp.#salary);

❌ Syntax Error

Sirf class ke andar access kar sakte ho.

Final Flow Diagram
                Employee

        ┌──────────────────────┐
        │ name                 │
        │ _salary / #salary    │
        │                      │
        │ get salary()         │
        │ set salary(value)    │
        └──────────────────────┘

              Reading

emp.salary
      │
      ▼
Getter
      │
      ▼
Return salary

────────────────────────────────

              Writing

emp.salary = 70000
      │
      ▼
Setter
      │
      ▼
Validation
      │
      ▼
Store salary
Interview Definition (Easy)
Getter → Automatically runs when you read a property. (emp.salary)
Setter → Automatically runs when you assign a property. (emp.salary = 60000)







