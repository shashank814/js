"hello" + "world"

const name = "shashank"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${roshan} and my repo count is ${50}`);

const gameName = new String('roshanSingh')   

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('S'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = " roshan "
console.log(newStringOne);
console.log(newString.trim());

const url = "https://roshan.com/roshan%20singh"

console.log(url.replace('%20','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));