// what you need to reasearch after class
//OOP Foundations object orineted programming
//class
// make fields private add a #befor the field property
// class Duck{
//     //fields / properties
//     #id
//     #name
//     #species
//     #weight
//     #ammunition
//     #secretKey = "shootfirst123"

//     //constructor
//     constructor(id,name){
//         this.#id = id
//         this.#name = name
//         this.#ammunition = "12/70 24g"
//         this.#species = "Anas platyrhynchos"
//         this.#weight = "24kg"
//     }



//     //method

// set ammunition(value) {
//     this.#ammunition = value
// }
// set weight (value){
//     this.#weight = value
// }
// get id(){
//     return this.#id
// }

// get name(){
//     return this.#name
// }

// set name(value){
//     this.#name = value
// }
// Quack(){
//     console.log(`${this.#name} ist totalty quacking power`);
// }
// #SomeSecretOperation(){
// console.log("shhhh");
// }
// }

// const duck1 = new Duck(1, "Stokkand");
// const duck2 = new Duck(2, "Kvinand");

// duck2.setAmmunition = ("12/70 40g")
// duck2.setWeight = ("8kg")
// duck1.Quack()
// duck2.Quack()
// duck1.name = ""

//TASK
// class Person {
//     firstname;
//     lastname;

//     constructor(firstname, lastName){
//         this.firstname = firstname
//         this.lastname = lastName
//     }

//     introduce(){
//         console.log(`${this.firstname} ${this.lastname}`);
//     }

//     get firstname(){
//         return this.firstname;
//     }
//     set firstname (value){
//         this.firstname = value;
//     }
//     get lastname(){
//         return this.lastname;
//     }
//     set lastname(value){
//         this.lastname = value;
//     }


// }
// const person1 = new Person("Ola", "Nordmann")
// person1.firstname = "Ola"
// person1.lastname = "Nordmann"
// person1.introduce()


// class Duck{
//     #id
//     #name
//     #species
//     #weight

//     constructor(id,name){
//                 this.#id = id
//              this.#name = name
//             this.#ammunition = "12/70 24g"
//         this.#species = "Anas platyrhynchos"
//     }
//     set ammunition(value) {
//             this.#ammunition = value
//          }
//          set weight (value){
//             this.#weight = value
//         }
//         get id(){
//              return this.#id
//          }
        
//          get name(){
//              return this.#name
//          }
        
//          set name(value){
//             this.#name = value
//          }
//          Quack(){
//             console.log(`${this.#name} ist totalty quacking power`);
//          }
// }
// const duck1 = new Duck(1, "Stokkand");
// const duck2 = new Duck(2, "Kvinand");

// duck2.setAmmunition = ("12/70 40g")
// duck2.setWeight = ("8kg")
// duck1.Quack()
// duck2.Quack()

// class Mallard extends Duck{
//     MallardMatingCall(){
//         console.log("wuack baby");
//     }
// }
// const mallardDuck = new Mallard()
// console.log(mallardDuck.n);




// class



// class Armory {
//     id;
//     name;
//     caliber;

//     constructor(id, name){
//         this.id = id
//         this.name = name
//         this.caliber = "Undefined"
//     }
//     subMachine(){
//         console.log(`${this.name} this is a submachine gun`);
//     }

//     caliberOfWeapons(){
//         console.log(`${this.caliber} this is the caliber`);
//     }

// }
// class Assult extends Armory{
//     constructor(id, name){
//         super(id, name)
//     }
//     subMachine(){
//         console.log(`${this.name} this is a assult rifle`);
//     }
//     caliberOfWeapons(){
//         console.log(`${this.caliber} this is the cal`);
//     }
// }
// class Smg extends Armory {
//     constructor(id, name){
//         super(id, name)
//     }
//     subMachine(){
//         console.log(`${this.name} this is a SMG`);
//     }
//     caliberOfWeapons(){
//         console.log(`${this.caliber} this is the cal`);
//     }
// }

// const assult1 = new Assult (1, "MTZ")
//  const subMachine1 = new Smg(2, "cronen")
//  assult1.subMachine()
//  subMachine1.subMachine()


// class Football{
//     id;
//     name;

//     constructor(id, name){
//         this.id = id;
//         this.name = name;
//     }
//     fieldPosition(){
//         console.log("left winger");
//     }
    
//     rumours(){
//         console.log("rumored to RB leibzig");
//     }

// }
// class United extends Football{
//     constructor(id, name){
//         super (id, name);
//     }
//     fieldPosition(){
//         console.log("Right winger");
//     }
//     rumours(){
//         console.log("rumored to Arsenal");
//     }


// }
// const footballTeam = new Football(1, "Marius")
// const unitedTeam = new United (1,"Mazaraoi")
// console.log(footballTeam);
// console.log(unitedTeam);
// footballTeam.fieldPosition()
// footballTeam.rumours()
// unitedTeam.fieldPosition()
// unitedTeam.rumours()


//function Constructor
// function Human(briansValue){
//     this.brain = briansValue
// }
// Human.prototype
// const humanObj = new Human("some decent brain and rizz")
// console.log(humanObj)

// Create a Function Constructor Called Animal:
// Define a function constructor that initializes name and sound.
// Attach a method makeSound to the prototype to log the sound.
// Create an Instance of Animal:
// Instantiate the Animal constructor with specific values.
// Invoke the makeSound method to test functionality.
//Add Private Fields Using an IIFE:
// Use an IIFE to encapsulate the Animal constructor.
// Define private variables for name and sound.
// Add getter and setter methods within the IIFE to access and modify these private variables.

const Animal = (function(){

    function Animal(name, sound){
        let newName = name;
        let newSound = sound;
        this.getName = function(){
            return newName;
        };
        this.setName = function(newname){
            newName = newname;
        };
        this.getSound = function(){
            return newSound; 
        };
        this.setSound = function(newsound){
            newSound = newsound;
        };
    };
    
    Animal.prototype.makeSound = function(){
        console.log(`${this.name} makes this sound: ${this.sound}`);
    }
    return Animal
})();

const animalObj = new Animal("Dog", "woof")
console.log(animalObj.getName());
console.log(animalObj.getSound());
animalObj.setName("Cat")
animalObj.setSound("meouw")
animalObj.makeSound();
console.log(animalObj);

