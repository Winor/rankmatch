const admin = require('./firebase')
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

 function main () {
    console.log(
        "\nWhat would you like to do?\n\n" +
        "1: Create allowduser with random password \n" +
        "2: Give allowduser to an existing user \n" )
    
    
    rl.question("your choice: ", function (answer) {
        switch (answer) {
            case '1':
                createUser();
                break;
            
            case '2':
                givePrm();
                break;
        
            default:
                rl.close();
                break;
        }
    });
} 

function createUser () {
    rl.question("email: ", async function (answer) {
        const user = await admin.createSuper(answer)
        if (user) {
        console.log(`User created !\nUser: ${user.db.email} \nPassword: ${user.pass} `)
        return main();
        }
        main()
    });
}

function givePrm () {
    rl.question("UID: ", async function (answer) {
        const user = await admin.giveAccess(answer)
        if (user) {
            console.log(`Access given to ${answer} successfully !!`)
        }
        main();
    });
}

console.log("Welcome to user creation tool !");
main()