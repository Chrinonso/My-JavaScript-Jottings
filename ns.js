const header = document.querySelector('.bigie')


// let list = ["tiger", "lion", "dog", "bird"];
// let firstName = "chinonso";
// let lastName = "ukaegbu";
// console.log(firstName,lastName);

// const now = 2037;
//  ageNonso = now - 1995; 
//  ageIfeka = now - 1994;

//  console.log(ageNonso, ageIfeka, ageNonso ** 2, ageIfeka * 4 );

// console.log(typeof[now])

// // assignment opertors//

// let x = 10 + 5; // 15
// x += 10; //x = x + 10 = 25
// x *= 4; // x = x multiplied by 4 = 100
// x--; // x is reduced by 1//
// console.log(x);

// console.log(ageNonso > ageIfeka);// means nonso age isnt greater than ifeka's
// console.log(ageNonso >= 40, ageIfeka >= 50);
// const averageAge = (ageNonso + ageIfeka) / 2;
// console.log(ageNonso, ageIfeka, averageAge);

// const firstName = 'Nonso';
// const job = 'techbro';
// const birthYear = '1995';
// const year = '2022';
// const nonso = "i\'m " +  firstName + ', a ' + (year - birthYear) + ' years old ' + job; 
// console.log(nonso)

// const nonsoNew = `i'm ${firstName} a ${year-birthYear} years old ${job}`; 
// console.log(nonsoNew);
// const nonsoNeld = `i was born in ${year-birthYear} and i am a ${job} and my name is ${firstName}`;
// console.log(nonsoNeld);

// console.log(`this is
// another
// line`);
// const age = 10;
// const yearsLeft = 18 - age;
// // const isOldEnough = age >= 18;
// if(age>= 18) {
//     console.log('serah can start driving license');
// } else {
    
//     console.log(`oops you are not old enough.. wait another ${yearsLeft} years`);
// }

// const inputYear = '1991'
// console.log(Number(inputYear) + 18);
// console.log(typeof inputYear);
// let n = '1' + 1;
// n = n - 1;
// console.log(n);

// eguality operators//
// const age = 11;
// const yearsLeft = 18 - age;

// if(age >= 18) {
//     console.log(`you are mad`);
// } else {
//     console.log(`you are not off age and you have ${yearsLeft} years left`);
// }

// const age = 18;
// if (age === 18) console.log("you just became an adult")

//equality operators//

// == loose operator, === strict operator, !== not strict operator.//

// Boolean logic& Logical operators//
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense || hasGoodVision;
// if(shouldDrive) {
//     console.log('she can drive');
// } else {
//     console.log('someone else should drive befroe she kills someone');
// }
// const isTired = false; //C
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if(hasDriversLicense || hasGoodVision || !isTired) {
//     console.log('she can drive');
// } else {
//     console.log('she can not drive');
// }

// expressions and statements// expressions are lines of codes that produce values
// 3 + 4 
// 1991 
// true
// statements are lines of codes that do not produce values

// the conditional (ternary) operators//

// const age = 23;
// const drink = age >= 18 ? 'give me water' : 'give me wine';
// console.log(drink);

// const drink2 = age>= 25 ? 'give me water' : 'give me star';
// console.log(drink2);
// // inputing the ternary conditionals in a template literal//
// console.log(`i like to drink ${age >= 18 ? 'give me water' : 'give me wine'}`);
// const drive = age>= 18 ? 'drive away' : 'wait till you become';
// console.log(drive);
// console.log(`i like to drive ${age>= 18 ? 'drive away' : 'wait till you become'}`);

//functions// functions can hold on or more complete line of code
// function logger() {
//     console.log('Nonso na starboy');
// }
// logger();
// const nonso = ukaegbu (4, 5)
// function ukaegbu(a, b) {
//     return a + b;
// }
// ukaegbu();

// function foodProcessor(rice, beans) {
//     // console.log(rice, beans);
//     const food = `give me ${rice} cups and ${beans} bags`;
//     return food;
// }


// console.log(foodProcessor(500, 300));

// function dataCompany(MTN, Airtel) {
//     const networkProvider = `give me ${MTN} cards and ${Airtel} cards`;
//     return networkProvider;
// }


// console.log(dataCompany(7000, 8000));

// function nonsoSpeaks(precious, sunday) {
//     const nonsoLifestory = "ifeka ebelechukwu";
//     return nonsoLifestory;
// }

// console.log(nonsoSpeaks(28, 89));

// function addMe(a, b) {
//     const nonso = a + b;
//     return nonso;
// }

// console.log(addMe(10,5));

// function addMe(a, b) {
//     const nonso = (a +=b);
//     return nonso;
// }
// console.log(addMe(10,5));

//function declaration
// function calcAge1(birthYear) {
//     const age = 2037 - birthYear;
//     return age;
// }
// age1 = calcAge1(1995);
// console.log(age1);

//function expression//return

// const calcAge2 = function(birthYear) {
//     age2 = 2037 - birthYear
//     return age2;
// }
// age2 = calcAge2(1990);
// console.log(age2);

//Arrow functions
// const calcAge3 = birthYear => 2037 - birthYear;
// age3 = calcAge3(1991);
// console.log(age3);

// const yearsLeft = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     retirement = 70 - age;
//     // return retirement;
//     return `${firstName} will retire in ${retirement} years. `;
// }
// console.log(yearsLeft(1995, 'nonso'));

// const ageRange = () => {

// }

// Arrays
// const friends = ['michael', 'nonso', 'ifeka'];
// friends[2] = 'ode';
// console.log(friends);

// const nonso = ['he', 'is', 'an', 'incredible', friends];
// console.log(nonso);
// friends.push('deck');
// console.log(friends);
// friends.pop();
// console.log(friends);
// friends.unshift('caro');
// console.log(friends);

// const yearsLeft = function(apple, banana) {
//     const age = `fruits consist of ${apple} apple and ${banana} banana. `;
//     return age;
// }

// console.log(yearsLeft(34, 56));

// const fruits = [
//     {
//         firstName: 'mike',
//         occupation: 'student',
//         status: 'single',
//     },

//     {
//         school: 'lag',
//         babe: 'motty',
//         sexCount: 'none',
//         friends: ['krane', 'dammy', 'fleet'],
//     }
// ]

// console.log(fruits[0].occupation, fruits[1].friends);

//Objects// Object methods//
// const grapes = {
//     firstName: 'mike',
//     lastName: 'sean',
//     occupation: 'student',
//     status: 'single',
//     hasDriversLicense: true,
//     birthYear: 1995,
// objects and functions in an array
//     calcAge: function (birthYear) {
//         return 2022 - birthYear;
//     }

// }

// console.log(grapes.calcAge(1995));

//loops




// console.log(grapes.calcAge(1995));
// grapes['location'] = 'lagos'// here i added a new item to the object methods
// console.log(grapes);

//LOOPS////////////////////////////////
// LOOPS TAKES 3 EXPRESSIONS 
// the first is constant, the second shows how many times the arry is run

// for (let rep = 1; rep<=10; rep++) {
//     console.log(`nonso is just an idiot ${rep} `)
// }

// for (let i = 0; i <= 5; i++){
// console.log(`the number is ${i}`);
// }

// //LOOPING ARRAYS
// const nonso = [
//     'Nonso',
//     'ukaegbu',
//     '1995',
//     'developer',
//     'youngman',
//     ['mike', 'leao', 'ibra']
// ];

// for (let i = 0;i < nonso.length; i++) {
//     console.log(nonso[i]);
// }

// const years = [1995, 1997, 2001, 2004];
// const ages = [];
// for (i = 0; i < years.length; i++) {
//     ages.push(2037-years[i]);
// }
// console.log(ages);  

// BREAK AND CONTINUE////

// function booWho(bool) {

//     return typeof bool === "boolean"
    
// }
// console.log(booWho(true));

// const add = (a,b) => a+b;
// console.log(add(5,4));

//ADVANCED JAVASCRIPT////////////////
// ADVANCED ARRAYS////////////////

// const array = [2,4,6,8];

// const mapArray = array.map((num) => {
//     return (num*2);
// })

// console.log(mapArray);

// const mapArrays = array.map((num) => {})

// FILTER//
// const filterArrayss = array.filter((num) => {
//     return num*2;
// })

// const filterArray = array.filter (num => num > 5);

// console.log(filterArray);
// const filterArrays = array.filter (num => num > 5);

//Reduce ///

// const reduceArray = array.reduce((accumulator, num) => {
//     return accumulator + num;
// },5);
// console.log(reduceArray);

// SCOPE// CURLY BRCKETS REFERENCES OR MEANS SCOPE

//ADVANCE LOOPS////////////////////////////////
// const basket = ["apples", "oranges", "grapes"];

// for (let i = 0; i < basket.length; i++) {
//     console.log(basket[i]);
// }

// basket.forEach(item => {
//     console.log(item);
// })
// FOR OF.. IT IS USED TO LOOP TO.. ALSO KNOWN AS ITERATING WHICH MEANS TO GO OVER AN ARRAY ONE BY ONE/////
// you can iterate over arrays and strings.. they are iterables//

// for (item of basket) {
//     console.log(item);
// }

// FOR IN LOOP////////////////////////////////
// THE FOR IN LOOP IS USED TO LOOP OVER OBJECTS//
// with an object we enumerate not iterate.. items in an object are enumerables//

// ENUMERATING IS FOR OBJECTS

// const detailedBasket = {
//     apples: 20,
//     banana: 40,
//     oranges: 70,
// }

// for (items in detailedBasket) {
//     console.log(items);
// }

//DATA STRUCTURES AND MODERN OPERATORS// JONAS
// DESTRUCTURING//

// const restaurant = {
//     name: "Classico italiano",
//     location: "lagos, abuja bariga",
//     categories : ["swallow", "chips", "chops", "western"],
//     starterMenu: ["fries", "coffe", "dessert"],
//     mainMenu: ["eba", "amala", "poundo"],
    
// };
// const [index1, , index3]= restaurant.starterMenu;
// console.log(first,second);

// nested destructuring//
// const nested =[8,9,[4,5]];
// const [p, q,[j,k]] = nested;
// console.log(p,q,j,k);

//SPREAD OPERATOR//
// WE USE THE SPREAD OPERATOR TO EXPAND AN ARRAY INTTO ALL ITS ELEMENTS.. BASICALLY UNPACKING ALL THE ELEMENTS// 

// const arr = [7, 6, 5]; 

// const newArr = [1,2,...arr];
// console.log(newArr);

// const newStarterMenu = [...restaurant.starterMenu, "eba", "amala"];
// console.log(newStarterMenu);

// const joinArr = [...newArr, ...newStarterMenu];
// console.log(joinArr);

//ITERABLES ARE ARRAYS, STRINGS,MAPS,SET AND NOT OBJECTS// AND THE SPREAD OPERATOR WORKS ON ALL ITERABLES 
//USING A SPREAD OPERATOR ON A STRING// AND
// const str = "Nonso"
// const newStr = [...str, " "];
// console.log(newStr);
// console.log(...str);

// const newRes = {...restaurant, founded: 1989,};
// newRes.name = "starboy classic";
// console.log(newRes);

//REST PARAMETERS//
// const [p, q,...others]=[1,2,3,4,5,6,7,8,9,10]
// console.log(p,q, others);
// // REST IS ALWAYS ON THE LEFT HAND SIDE OF THE = WHICH IS THE ASSIGNMENT VARIABLE//
// const [a, ,d,...otherFoods]= [ ...restaurant.mainMenu,...restaurant.starterMenu,]
// console.log(a,d,otherFoods);

//SHORT CIRCUITING && AND || 

// NULLISH COALESCING OPERATOR////
//WORKS WITH NULLISH VALUES WHICH ARE NULL AND UNDEFINED//

// LOGICAL ASSIGNMENT OPERATORS//
// const rest1 = {
//     name: "starboy",
//     guests: 20,
// };

// const rest2 = {
//     name: "Nonso",
//     owner: "odeman",
// };
// rest1.owner &&= "anonymous";
// rest2.guests &&= "anonymous";


//FOR OF LOOP///
// menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// // console.log(menu);

// for(const item of menu) {
//     console.log(item);
// }

//OPTIONAL CHAINING//
// const users = [{
//     name: 'John', email: 'john@example.com'
// }];

// console.log(users[0]?.email ?? 'there is no name');

//SETS//

// WORKING WITH STRINGS//
// const airplane = "Starboy Air"
// const plane = "A320";
// // console.log(plane[0]);

// console.log(airplane.slice(4,7));

// const bookings = [];

// const createBooking = function (flightNum, numPasseners = 1, price = 1) {
    
//     const booking = {
//         flightNum,
//         numPasseners,
//         price,
//     };
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking("LH342");

// THE BIND METHOD////////

// const  money = [100, 450, 200,430,230];

// money.forEach(function (coins) {
//     if (coins > 200) {
//         console.log(`you deposited ${coins}`)
//     }else{
//         console.log(`you deposited ${coins}`)
//     }
// })

// console.log(money.forEach);


// const Currency = [200,500,100,1000,50,20,10,5];

// Currency.forEach(function (naira, i, arr) {
//     if (naira === 200) {
//         console.log(`you have ${naira} which is no longer a legal tender`)
//     } else if(naira=== 500) {
//         console.log(`you have ${naira} which is no longer a legal tender`)
//     } else if(naira=== 1000) {
//         console.log(`you have ${naira} which is no longer a legal tender`)
//     } else {
//         console.log(`You be ritualist!! where you see money`)
//     }
// })



// OBJECT ORIENTED PROGRAMMING//
// TRYING TO CREATE A CONSTRUCTOR//

// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

// }

// const starBoy = new Person ("Nonso", 1999);
// const machala = new Person ("wizzy", 2000);

// console.log(starBoy);

// BELOW IS WHAT HAPPENED//
// 1. A NEW {OBJECT} IS CREATED////
// 2. FUNCTION IS CALLED,.... THIS = {} ////
// 3. {OBJECT} CREATED IS LINKED TO PROTOTYPE
// 4. FUNCTION AUTOMATICALLY RETURN PROTOTYPE////

// console.log(starBoy instanceof Person); 

//PROTOTYPES//
// Prototype inheritance.. all the objects created through the "person" constructor will have access
// and inherit all the properties and methods that are defined in the prototype

// Person.prototype.calcAge = function () {
//     console.log(2023 - this.birthYear);
// }

// Person.prototype.changeName = function () {
//     console.log(`na starboy be ` + this.firstName);
// }

// starBoy.calcAge();
// starBoy.changeName();
// machala.calcAge ();
// machala.changeName();

// Person.prototype.changeSpecies = "G.O.A.T";
// console.log(starBoy.changeSpecies);

// USING ES6 CLASSES TO DO THE OBJECT ORIENTED PROGRAMMING//

// class PersonCl {
//     constructor (firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     calcAge () {
//         console.log (2023 - this.birthYear);
//     }
// }

// const Nonso = new PersonCl ("starboy", 1996);
// console.log(Nonso);
// Nonso.calcAge();


// class Carmatch {
//     constructor(diesel, engine) {
//         this.engine = engine;
//         this.diesel = diesel;
//     }

//     cartype () {
//         console.log(this.diesel+=10);
//     }
// }

// const cars = new Carmatch (20,"horsepower");
// console.log(cars);
// cars.cartype();

// Object.Create

// const PersonProto = {
//     calcAges () {
//         console.log(2037 - this.birthYear);
//     }

    
// }


// const dotun = Object.create(PersonProto)
// console.log(dotun);


// const Person = function (firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;

// };

// Person.prototype.calcage = function () {
//     console.log(2037-this.birthYear);
// }

// const nonso = new Person("starboy", 1995);
// console.log(nonso);
// nonso.calcage();


// const Student = function (firstName, birthYear, course) {
//     Person.call(this, firstName, birthYear)
//     this.course= course;
// };

// //LINKING PROTOTYPES
// Student.prototype = Object.create(Person.prototype);

// // CREATING A METHOD FOR THE STUDENT CONSTRUCTOR

// Student.prototype.introduce = function () {
//     console.log(`my name is ${this.firstName} and i am studying ${this.course}`)
// }

// // CREATING A NEW STUDENT
// const dotun = new Student ("dotun", 1998, "business administration");
// console.log(dotun);
// dotun.introduce();
// dotun.calcage();
// nonso.introduce();


// // EXAMPLE OF PROTOTYPE INHERITANCE BETWEEN CONSTRUCTOR FUNCTIONS>> FROM A PARENT TO CHILD.. CAR IS THE PARENT
// const Car = function (make, speed) {
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function () {
//     this.speed+= 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// Car.prototype.break = function () {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
// }

// const mines = new Car ("Benzo", 500);
// console.log(mines);
// mines.accelerate();


// const EV = function (make, speed, charge) {
//     Car.call (this, make, speed);
//     this.charge = charge;
// }

// // LINKING PROTOTYPES

// EV.prototype = Object.create(Car.prototype);

// const tesla = new EV ("Tesla", 300, 30);
// console.log(tesla);
// tesla.break();
// tesla.accelerate();


// EXAMPLE OF PROTOTYPE INHERITANCE BETWEEN CONSTRUCTOR FUNCTIONS USING ES6 CLASSES>> FROM A PARENT TO CHILD.. CAR IS THE PARENT
// INHERITANCE BETWEEN CLASSES USING (ES6 CLASSES)
// class PersonCl {
//     constructor (firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }

//     calcAge () {
//         console.log (2023 - this.birthYear);
//     }
// }



// class Students extends PersonCl {
//     constructor (firstName, birthYear, course) {
//         super(firstName, birthYear)
//         this.course = course;
//     }
// }

// const Kagbo = new Student ("starboy", 1996, "BAM");
// console.log(Kagbo);
// // has access to all the methods in the constructor function
// Kagbo.calcAge();



// ASYNCHRONOUS JAVASCRIPT////////////////
// SYNCHRONOUS MEANS A CODE IS EXECUTED LINE BY LINE... IT IS EXECUTED IN THAT ORDER//
// Async function keeps running in the background while perfomring the code that is inside of it.. and when it is done it returns a promise
// we can also have one or more await inside an async function. 

const whereAmI = async function (country) {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    console.log(res);
    const data = await res.json();
    console.log(data);
};

whereAmI("portugal");
console.log('first');

const areYouokay = async () => {

    try{

    } catch (error) {
        console.error (error)
    }
};








// // Building my first Promise,, the promise takes in one argument which is the executor function

// const lotteryPromise = new Promise(function() {

// })









