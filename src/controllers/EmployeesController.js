const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async store(req, res) {
    const { name,surname , email } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("employees").insert({
      id,
      name,
      surname,
      email
    });

    return res.json({ id });
  },

  async index(req, res) {
    routes.get("/employees", async (req, res) => {
      const employees = await connection("employees").select("*");

      return res.json(employees);
    });
  }
};
