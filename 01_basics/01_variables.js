const accountId = 12345
let accountEmail = "roshan@gmail.com"
var accountPassword = "22334"
accountCity = "Siwan"
let accountState;

// accountId = 2 // not allowed

accountEmail = "rc@rc.com"
accountPassword = "2121"
accountCity = "Burdwan"

console.log(accountId);

/* 
prefer not to use var
because of issue in block scope and functional sc
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])