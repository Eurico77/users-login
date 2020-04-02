const connection = require("../database/connection");

module.exports = {
  async store(req, res) {
    const user = ({ name, surname, email } = req.body);
    
    await connection("users").insert({
      name,
      surname,
      email
    });

    return res.json({ user });
  },

  async index(req, res) {
    const users = await connection("users").select("*");

    return res.json(users);
  },

};
