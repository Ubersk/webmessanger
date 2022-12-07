class UserController {
  async login(req, res) {}

  async check(req, res) {
    res.json("Example");
  }
}

module.exports = new UserController();
