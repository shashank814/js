// for of

// ["", "", ""]

//[{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}

// Maps

const map = new Map()
map.set('IN', 'India');
map.set('IN', 'India');
map.set('Fr', 'France');
map.set('USA', 'United State Of America');

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    'game1': 'NFS',
    'game2': 'BGMI'
}

/*
for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}
    */

const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val){
    // console.log(val);
})

coding.forEach( (item) => {
    // console.log(item);
})

function printMe(item){
   //  console.log(item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "java",
        languageFileName: "js"
    },
    {
        languageName: "javascript",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "python"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})