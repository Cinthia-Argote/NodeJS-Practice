const users = [
  {
    id: 1,
    name: "Jane Doe",
  },
  {
    id: 2,
    name: "Jane Doe",
  },
];

const getUserById = (id, callback) => {
  const user = users.find((user) => user.id === id);

  user ? callback(null, user) : callback(`USER NOT FOUND with id ${id}`);
};

module.exports = {
  getUserById,
};
