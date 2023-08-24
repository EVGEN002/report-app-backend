const user = require("../database/user");

const getAllUsers = () => {
  const allUsers = user.getAllUsers();
  return allUsers;
};

const getOneUser = () => {
  const oneUser = user.getOneUser();
  return oneUser;
};

const createNewUser = (payload) => {
  const newUser = user.createNewUser(payload);
  return newUser;
};

const updateUser = () => {
  return;
};

const deleteUser = () => {
  return;
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser
};
