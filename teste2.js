var data = require("./fakeData");

module.exports = function (req, res) {
  var { name, job, admin } = req.body;

  const id = data.length + 1;

  var newUser = { id, name, job, admin };

  data.push(newUser);

  res.send(newUser);
};
