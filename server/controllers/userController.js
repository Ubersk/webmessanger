class UserController {
  async login(req, res) {}

  async check(req, res) {
    const { id } = req.query;
    res.json(id);
  }
}

module.exports = new UserController();
