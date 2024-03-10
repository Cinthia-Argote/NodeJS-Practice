const users =  [
    {
        id: 1,
        name: "Jane Doe"

    }
]

function getUserById(id, callback) {
    const user = users.find(function(user) {
        return user.id === id;
    })

    // console.log({ user })

    if (!user) {
        return callback(`USER NOT FOUND with id ${id}`)
    }

    return callback(null, user);

}

module.exports = {
    getUserById
}