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



// const getPokemonById = require('./js-foundation/06-promises')
// const info = getPokemonById(4);

// console.log(info);


// setTimeout(() => {
//     console.log(info);
// }, 3000)

// getPokemonById(4).then(pokemon => console.log({pokemon}))
// .catch(err => console.log({err}))
// .finally(() => console.log("Finalmente"))


const { buildLogger } = require('./plugins')

const logger = buildLogger('app.js')
logger.log('Hola mundo')
logger.error('Esto es algo malo')


// ! Referencia a la funcion factory y uso
// const { getAge, uuidv4 } = require('./plugins');

// const { buildMakePerson } = require('./js-foundation/05-factory')

// const makePerson = buildMakePerson({ getAge, uuidv4 });

// const obj = { name: "cinthia", birthdate: '1998-02-15'}
// const person = makePerson(obj)
// console.log(person)