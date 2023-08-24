const userService = require("../services/userService");

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();
  res.send({ status: "OK", data: allUsers });
};

const getOneUser = (req, res) => {
  const user = userService.getOneUser();
  res.send("get one user");
};

const createNewUser = (req, res) => {
  const { body } = req;

  const newUser = {
    id: body.id ?? null,
    name: body.name,
    role: body.role,
    image: body.image ?? null,
    about: body.about ?? null
  };

  const createdUser = userService.createNewUser(newUser);
  res.status(201).send({
    status: "OK",
    data: createdUser
  });
};

const updateUser = (req, res) => {
  const updatedUser = userService.updateUser(userId);
  res.send("update user");
};

const deleteUser = (req, res) => {
  const deletedUser = userService.deleteUser();
  res.send("delete user");
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUser
};
