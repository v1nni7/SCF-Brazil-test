var data = require("./fakeData");

module.exports = async function (req, res) {
  var { name } = req.query;

  var index = data.findIndex((user) => user.name === name);

  if(index === -1) {
    res.status(404).send("User not found");
    return;
  }

  data.splice(index, 1);

  res.send("User deleted");
};
