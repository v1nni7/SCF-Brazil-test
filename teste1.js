var data = require("./fakeData");

const totalAccess = {};

const getUser = (req, res, next) => {
  var { name } = req.query;

  if (!totalAccess[name]) {
    totalAccess[name] = 0;
  }

  totalAccess[name]++;

  var user = data.find((user) => user.name === name);

  res.send(user);
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers,
  totalAccess,
};
