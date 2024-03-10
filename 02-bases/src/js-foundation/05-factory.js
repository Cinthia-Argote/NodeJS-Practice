// es una funcion q crea otra funcion

const { v4: uuidv4 } = require('uuid');
const getAge = require('get-age')

const obj = { name: 'Cinthia', birtthdate: '1998-02-15'}
const buildPerson = ({ name, birtthdate}) => {
    return {
        id:  uuidv4(),
        name,
        birtthdate,
        age: getAge(birtthdate)
    }
}

const cinthia = buildPerson(obj);

console.log(cinthia)