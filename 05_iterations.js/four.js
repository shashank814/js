/*
const coding = ["js", "ruby", "java"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item;
})

console.log(values);
*/

const myNums = [1, 2, 3, 4, 5, 6, 7]

// const newNums = myNums.filter( (num) => num > 4)

const newNums = []

myNums.forEach( (num) => {
    if(num > 4) { 
        newNums.push(num)
    }
})
console.log(newNums);

const books = [
    { title: 'book one', genre: 'fiction', publish: 1981,
     edition: 2004 },
    { title: 'book two', genre: 'non-fiction', publish: 1992,
     edition: 2008 },
    { title: 'book one', genre: 'history', publish: 1999,
     edition: 2010 },
    { title: 'book one', genre: 'science', publish: 1989,
     edition: 2007 },
    { title: 'book one', genre: 'fiction', publish: 2009,
     edition: 2014 },
];

let userBooks = books.filter( (bk) => bk.genre === 'history')

 userBooks = books.filter( (bk) => bk.publish >= 2005)

console.log(userBooks);

