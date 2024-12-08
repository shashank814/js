 const myNums = [1, 2, 3]

 /*
 const myTotal = myNums.reduce(function (accumulator, currentval){
    console.log(`accumulator: ${accumulator} and currentval: ${currentval}`);
    return accumulator + currentval
 }, 0)
*/

const myTotal = myNums.reduce( (accumulator, currentval) => accumulator + currentval,0)
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "data course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0)

console.log(priceToPay);
