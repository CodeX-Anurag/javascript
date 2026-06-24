/*What is a Prototype?

Prototype means "parent object" or "backup object" from which another object can inherit properties and methods.

                    Father
                    │
                    ├── House
                    ├── Car
                    └── Money
                    
                            ↓ inherits
                    
                    Son
                    │
                    └── Bike
                     Son has his own bike, but if he needs a car, he can get it from his father.*/

            /*
             lenovo
            │
            ├── screen : HD
            │
            └── __proto__
                  │
                  ▼
            computer
            │
            ├── ram : 14
            └── cpu : 4 
  This means:
   lenovo has its own property:*/
   screen : "HD"
   
  // and through prototype it can access:
   ram : 14
   cpu : 4

// Example 
    let computer = {
      ram: 14,
      cpu: 4,
    };
    
    let lenovo = {
      screen: "HD",
    };
    
    lenovo.__proto__ = computer;
  console.log(lenovo);
  console.log(lenovo.screen);
  console.log(lenovo.ram);
  console.log(lenovo.cpu);


// Prototype Chain

    let livingThing = {
        breathes: true
    };
    
    let animal = {
        eats: true
    };
    
    let dog = {
        bark: true
    };
    
    animal.__proto__ = livingThing;
    dog.__proto__ = animal;

    /*dog
    │
    ├── bark : true
    │
    └─────► animal
              │
              ├── eats : true
              │
              └─────► livingThing
                        │
                        └── breathes : true*/

  console.log(dog.breathes);    // true 
  console.log(animal.bark);
  console.log(animal.breathes);



// Examole 
    let genericCar = { tyres: 4 };
    let tesla = {
      driver: "AI",
    };
    
    Object.setPrototypeOf(tesla, genericCar);
    console.log(`tesla `,tesla , Object.getPrototypeOf(tesla));


// Without prototype:

    let user1 = {
        greet() {
            return "Hello";
        }
    };
    
    let user2 = {
        greet() {
            return "Hello";
        }
    };
    
    let user3 = {
        greet() {
            return "Hello";
        }
    };
   // here The same function is copied many times.   

// With prototype:
    
    function User(name){
        this.name = name;
    }
    
    User.__proto__ = function(){
        return `Hello ${this.name}`;
    };
    
    let u1 = new User("Anurag");
    let u2 = new User("Anuj");
    console.log(u1);
    console.log(u2);

/*Real Meaning of Prototype :-

Prototype is JavaScript's mechanism for sharing properties and methods between objects.
When JavaScript doesn't find something inside an object, it automatically looks in its prototype, then the prototype's prototype, and so on. This is called the Prototype Chain.*/

