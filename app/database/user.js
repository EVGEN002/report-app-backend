const { response } = require("express");

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("app/database/app.db");

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM users", (err, rows) => {
      resolve(rows);
    });
  });
};

const getOneUser = () => {
  return "get one user";
};

const createNewUser = (payload) => {
  return new Promise((resolve, reject) => {
    db.all(`INSERT INTO users VALUES(${payload.id}, '${payload.name}', '${payload.role}', ${payload.image}, '${payload.about}')`)
  });
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser
};
