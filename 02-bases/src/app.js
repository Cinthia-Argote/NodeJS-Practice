// const {emailTemplate} = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring');
//console.log(emailTemplate)

const { getUserById } = require("./js-foundation//03-callbacks");
getUserById(1, function(error, user) {
    if (error) {
        throw new Error(error);
    }
    console.log(user);
});