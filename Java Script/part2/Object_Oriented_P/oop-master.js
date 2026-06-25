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
    class Person{
    
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
    
        greet(){
            console.log("Hello");
        }
    
    }
 /*Diagram

                Person
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
      #balance = 0;
    
      deposit(amount) {
        this.#balance += amount;
        return this.#balance;
      }
    
      getBalance() {
        return `$ ${this.#balance}`;
      }
    }
    
    let account = new BankAccount();
// console.log(account.getBalance());





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
      
      class Car{
      
          start(){
              console.log("Car Started");
          }
      
      }
      
    /*  User sirf     car.start();   karta hai.    Usko andar kya ho raha hai pata nahi.
      
  Diagram
      
      User   
      car.start()
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

  pressStartButton() {
    let msgone = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgone} + ${msgTwo}`;
  }
}

let myMachine = new CoffeMachine();
// console.log(myMachine.start());
// console.log(myMachine.brewCoffee());
// console.log(myMachine.pressStartButton());

// Polymorphism

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
// console.log(bird.fly());
// console.log(penguin.fly());

// static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}

// let miniCalc = new Calculator();
// console.log(miniCalc.add(2, 3));

// console.log(Calculator.add(2, 3));

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









