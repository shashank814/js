/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 <= 1);
console.log(2 == 1);
console.log(2 != 1);
*/

// console.log("2" > 1);
// console.log("02" > 1);

// never compare two different data types

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/*
 The reason is that an equality check == and comaprisions > < >=
<= work differently.Comaprison convert null to a number, treating it as 0.
That's why (3) null >= 0 is true ans (1) null > 0 is false.
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check --> it also check data types and then compare

console.log("2" == 2);