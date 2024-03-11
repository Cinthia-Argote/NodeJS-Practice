// const {emailTemplate} = require('./js-foundation/01-template')
// require('./js-foundation/02-destructuring');
//console.log(emailTemplate)

//const { getUserById } = require("./js-foundation/04-arrow");
// getUserById(1, (error, user) => {
//     if (error) {
//         throw new Error(error);
//     }
//     console.log(user);
// });



const getPokemonById = require('./js-foundation/06-promises')
 getPokemonById(4, (pokemon) => {
    console.log({pokemon})
 });


// ! Referencia a la funcion factory y uso
// const { getAge, uuidv4 } = require('./plugins');

// const { buildMakePerson } = require('./js-foundation/05-factory')

// const makePerson = buildMakePerson({ getAge, uuidv4 });

// const obj = { name: "cinthia", birthdate: '1998-02-15'}
// const person = makePerson(obj)
// console.log(person)