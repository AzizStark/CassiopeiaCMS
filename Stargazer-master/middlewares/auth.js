var crypto = require('crypto');

console.log("Authentication Service Running")

function checkPass (password2){

    var password = 'Papaathi'
    //get password
    console.log("Signed Up Password: "+ password)

    //Create key
    var key = crypto.randomBytes(16).toString('hex');  //Must be stored
    console.log("Key for password: "+ key)

    //Create locked password
    var hash1 = crypto.pbkdf2Sync(password, key, 1000, 64, 'sha256').toString('hex');  //Must be stored
    console.log("Locked Password: "+ hash1)

    console.log("Checking......._________________")    

    var hash2 = crypto.pbkdf2Sync(password2, key, 1000, 64, 'sha256').toString('hex');
    console.log( hash1 === hash2);

}

checkPass("8236 wrong")
