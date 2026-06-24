/*1. OOP Kya Hai?
  OOP = Object Oriented Programming
  Real world ki cheezon ko objects ki form me represent karna.

Example:

  Real World :
    Aadmi (Person)
    Name
    Age
    City
    
    aur uske actions:
    Walk()
    Talk()
    Eat()

Programming me:

Person
│
├── name
├── age
├── city
│
├── walk()
├── talk()
└── eat()

Properties + Functions = Object


#] Without OOP  Suppose 100 students hain.
*/
let name1 = "Aaku";
let age1 = 20;
let city1 = "Delhi";

let name2 = "Anu";
let age2 = 25;
let city2 = "Mumbai";

/*Bahut messy ho jayega.

#] Using Object */

    let student1 = {
        name: "Aaku",
        age: 20,
        city: "Delhi"
    };
    
    let student2 = {
        name: "Anu",
        age: 25,
        city: "Mumbai"
    };
/*    
Diagram:
            
            student1
            ┌────────────┐
            │ name = Aaku|
            │ age = 20   │
            │ city=Delhi │
            └────────────┘
            
            student2
            ┌─────────────┐
            │name=Anu     │
            │age=25       │
            │city=Mumbai  │
            └─────────────┘

#] Problem?

Suppose 1000 students hain.   Har baar object manually banana boring hai.   Isliye Class use karte hain.

Class = Blueprint

Class ek template hai.

Diagram:

             Class Person
        ┌───────────────────┐
        │ name              │
        │ age               │
        │ city              │
        │ greet()           │
        └───────────────────┘
                    │
         ┌──────────┴──────────┐
         │                     │
         ▼                     ▼
    Object 1               Object 2

    Anurag                   Anuj
      21                      19
    Gwalior                 Indore*/

class Person {

}


// #]Constructor :  Constructor object banne ke time automatically call hota hai.

class Person{

    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }

}

/* Meaning of this

     this.name = name
     
     Means :  Object ka name = parameter ka name
     
  Diagram:
     constructor("Anu",21,"Gwl")
     
     parameter
     │
     ├── name = Anu
     ├── age = 21
     └── city = Gwl
     
               │
               ▼
              Object
          ┌────────────┐
          │name=Anu    │
          │age=21      │
          │city=Gwl    │
          └────────────┘
*/     

class Person {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  greet() {
    return `Hello ${this.name} ${this.age} ${this.city}`;
  }
}


//Creating Object   :Using new

let user1 = new Person("Anuj",19,"Indore");

  /*Flow:

       new Person("Anuj",19,"Indore")
                    │
                    ▼
             constructor called
                    │
                    ▼
             this.name = "Anuj"
             this.age = 19
             this.city = "Indore"
                    │
                    ▼
             Object created*/

 let user2 = new Person("Anurag",25,"Gwalior");

     console.log(user1.greet());
     /*Flow:
          
          user1.greet()
                │
                ▼
             greet()
                │
                ▼
          this.name = John
                │
                ▼
          return "Hello John"*/
    console.log(user2.greet());
    
/* Full Diag
                  Person Class
                ┌────────────────────┐
                │ name               │
                │ age                │
                │ city               │
                │ greet()            │
                └────────────────────┘
                         │
              ┌──────────┴──────────┐
              │                     │
              ▼                     ▼
            user1                  user2
        ┌──────────────┐       ┌──────────────┐
        │name=Anuj     │       │name=Anurag   │
        │age=19        │       │age=21        │
        │city=Delhi    │       │city=Mumbai   │
        └──────────────┘       └──────────────┘
               │                    │
               └────── greet() ─────┘         
 */



// Example1
     function Person(name, age) {
       this.name = name;
       this.age = age;
     }
     
     function Car(make, model) {
       this.make = make;
       this.model = model;
     }
     
     let myCar = new Car("Toyota", "Camry");
      console.log(myCar);
     
     let myNewCar = Car("Tata", "Safari");
      console.log(myNewCar);
     
     
     
// Example2
     function Tea(type) {
       this.type = type;
       this.describe = function () {
         return `this is a cup of ${this.type}`;
       };
     }
     let lemonTea = new Tea("lemon tea");
     console.log(lemonTea.describe());
     
     
     
// Example3  
     function Animal(species) {
       this.species = species;
     }
     
     Animal.prototype.sound = function () {
       return `${this.species} makes a sound`;
     };
     
     let dog = new Animal("Dog");
      console.log(dog.sound());
     
     let cat = new Animal("cat");
      console.log(cat.sound());



// Example4

function Drink(name) {
  if (!new.target) {      // if there is a no new in the target 
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}
 let tea = new Drink("tea");
 let coffee = Drink("coffee");



