var data = require("./fakeData");

module.exports = function (req, res) {
  var { id } = req.query;
  var { name, job } = req.body;

  const user = data.find((user) => id == user.id);
  user.name = name;
  user.job = job;

  res.send(user);
};
