// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Roshan"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com"
}

console.log(regularUser.email);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
    {
        id: 1,
        email: "r@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "javascript",
    price: "199",
    courseInstructor: "roshan"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// json

/*
{
    "name": "roshan",
    "coursename": "javascript",
    "price": "free"
}
*/