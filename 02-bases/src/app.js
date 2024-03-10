// const {emailTemplate} = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring');
//console.log(emailTemplate)

const { getUserById } = require("./js-foundation/04-arrow");
getUserById(1, (error, user) => {
    if (error) {
        throw new Error(error);
    }
    console.log(user);
});