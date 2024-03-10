// es una funcion q crea otra funcion

//const { uuidv4, getAge } = require("../plugins");

// const { v4: uuidv4 } = require('uuid');
// const { getAge } = require('../plugins/get-age.plugin');
// const { uuidv4 } = require('../plugins/get-id.plugin');
//const getAge = require('get-age')

//const obj = { name: 'Cinthia', birtthdate: '1998-02-15'}

const buildMakePerson = ( { getAge, uuidv4 }) => {
    return  ({ name, birthdate}) => {
        return {
            id:  uuidv4(),
            name,
            birthdate,
            age: getAge(birthdate)
        }
    }
}


// const cinthia = buildPerson(obj);

// console.log(cinthia)

module.exports = {
    buildMakePerson
}