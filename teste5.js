const { totalAccess } = require("./teste1");

module.exports = function(req, res){
    var { name } =  req.query;
    
    res.send(`Usuário ${name} foi lido ${totalAccess[name]} vezes.`);
};