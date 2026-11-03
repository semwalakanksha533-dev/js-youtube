const accountId = 14433
let accountEmail = "Akanksha"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;// agar javascript main variable li value define nhi karte hai toh voh undefined value deta hai
//accountId = 2// not allowed

accountEmail = "hps.com"
accountPassword = "323333"
accountCity = "delhi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope 
*/
console.table([accountEmail , accountId , accountPassword , accountCity , accountState])