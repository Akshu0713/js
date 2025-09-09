const accountID = 144553
let accountEmail = "akshatg@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountID = 2  // not allowed

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity =  "Bengaluru"

console.log(accountID); 

/* 
prefer not to use VAR
because of issue in block scope and 
functional scope 
*/ 


console.table([accountID, accountEmail, accountPassword, accountCity, accountState])

