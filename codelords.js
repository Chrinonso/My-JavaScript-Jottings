// const person = {
//     name: "femi",
//     gender: 'male',
//     age: 70
// }
// console.log(person.gender, person.age);

// const colors = ["pink, blue, red, green, yello"];
// console.log(colors);

// const colors = ["pink", "blue", "red", "green", "yellow"];
// console.log(colors.indexOf("blue"));

// const properties = [
//     car = "toyota",
//     house = "duplex",
//     clothes = [
//         "vuitton", 
//         "G & B"
//     ],
//     company = [
//         "google", 
//         "Gomycode"  // gomycode && balenciaga

//     ],
//     brand = "mercedes"

// ]; 
// console.log((properties[2])), console.log(properties[3]);

// console.log(company[2]), console.log(clothes[2])

// console.log((properties["company"])), console.log(properties["Gomycode"]);

// const colors = ["pink", "blue", "red", "green", "yellow"];
// // console.log(colors.indexOf("yellow"));
// console.log(colors[2]);

// function fruitProcessor(apple, banana) {
//     const fruit = `i want ${apple} cups and ${banana} mugs`;
//     return fruit;
// }

// // fruitProcessor(30, 25);
// console.log(fruitProcessor(30, 25));


// function Brewery(star, gulder){
//     const beer = `i want to serve you ${star} bottles and ${gulder} bottles`;
//     return beer;
// }

// console.log(Brewery(700, 800));




// console.log(Brewery(700, 900));
//functions
// let name = 'Starboy'
// let lastName = 'ukaegbu'
// console.log(`they call me ${name} because my surname is ${lastName}`);

// const ageCalc = (birthyear,currentYear) => {
//     const age = currentYear - birthyear;
//     return age;
// }
// console.log(ageCalc(1981,2022));

// const me = (a,b,c) => {
//     let meng = (b-c) * a
//     return meng;
// }

// console.log(me(20,40,5));

// create a function that has parameters using a modus to get the remainder of a number

// const balblu = (a,b,c) => {
//     let bulaba = (a+b) % c;
//     return bulaba;
// }

// console.log(balblu(4,6,3));
// if and else conditions//
// let balblu = 1;

// if (balblu = 1){
// console.log('it is correct');
// }else(console.log('he is mad'));

let age = 10

// const kayce = (age) => {
//     if (age <= 18){
//         console.log ('kayce is underage');
//     }else{
//         console.log('kaycee is not underage');
//     }
// }

// kayce(age);

// const nonso = (age) => {
//     if (age < 18){
//         console.log (`nonso is underage and he has ${18-age} years left, keep growing!!.`);
//     }
//     else if (age === 18){
//         console.log('nonso is exactly off age');
//     }
//     else{
//         console.log('nonso is an adult');
//     }
// }

// nonso(age);

// function decodeColor(code) {
//     switch(code){
//         case 1:
//             console.log('Red');
//             break;
//             case 2:
//                 console.log('Yellow');
//                 break;
//                 case "X":
//                     console.log('Green');
//                     break;
//                     default:
//                         console.log('Unknown code');
//     }
// }

// decodeColor(2);

// function decodeAge(color){
//     switch(color){
//         case 1995:
//             console.log('he is old');
//             break;
//             case 1996:
//                 console.log('he is 1 year older');
//                 break;
//                 case 1997:
//                     console.log('he is 2 years older');
//                     break;
//                     default:
//                         console.log('ole ni everybody');
            
//     }
// }
// decodeAge(1999);



// const calcage = () => {

// }
//INHERITANCE BETWEEN CLASSES (CONSTRUCTOR FUNCTIONS)
const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function () {
    this.speed+= 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

Car.prototype.break = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
}

const mines = new Car ("Benzo", 500);
console.log(mines);
mines.accelerate();


const EV = function (make, speed, charge) {
    Car.call (this, make, speed);
    this.charge = charge;
}

// LINKING PROTOTYPES

EV.prototype = Object.create(Car.prototype);

const tesla = new EV ("Tesla", 300, 30);
console.log(tesla);
tesla.break();
tesla.accelerate();


// INHERITANCE BETWEEN CLASSES USING (ES6 CLASSES)
class PersonCl {
    constructor (firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    calcAge () {
        console.log (2023 - this.birthYear);
    }
}



class Student extends PersonCl {
    constructor (firstName, birthYear, course) {
        super(firstName, birthYear)
        this.course = course;
    }
}

const Kagbo = new Student ("starboy", 1996, "BAM");
console.log(Kagbo);
// has access to all the methods in the constructor function
Kagbo.calcAge();

