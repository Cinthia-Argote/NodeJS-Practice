// es una funcion q crea otra funcion

const obj = { name: 'Cinthia', birtthdate: '1998-02-15'}
const buildPerson = ({ name, birtthdate}) => {
    return {
        id:  new Date().getTime(),
        name,
        birtthdate,
        age: new Date().getFullYear() - new Date(birtthdate).getFullYear()
    }
}

const cinthia = buildPerson(obj);

console.log(cinthia)