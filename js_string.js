let name ="Rajveer ";
let age =21;

console.log(`hello my name is ${name} and i am ${age} year old `);

//another way to defined string


const gameName= new String('Rajveer');
console.log(gameName);
// key axies  by usng square [] brackets

console.log(gameName[0,1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(name.toUpperCase());
console.log(name.charAt(5));
console.log(name.indexOf('r'));
const newString=gameName.substring(0, 5);
console.log(newString);
const anotherString=gameName.slice(-6,5);

console.log(anotherString);
let hello ="   hello   ";
console.log(hello);

console.log(hello.trim());

console.log(hello.replace('h','H').trim());

