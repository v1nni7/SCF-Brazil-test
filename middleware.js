const data = require("./fakeData");

module.exports = function validateAccessLevel(req, res, next) {
  var { authorization } = req.headers;

  if (!authorization) {
    return res.status(400).json({ error: "authorization is required in header!" });
  }

  const user = data.find((user) => user.id == authorization);

  if(!user) {
    return res.status(400).json({ error: "user not found!" });
  }

  if(!user.admin) {
    return res.status(400).json({ error: "user not admin!" });
  }

  next();
};
