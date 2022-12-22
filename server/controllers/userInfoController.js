const {User} = require("../models/models");

class UserInfoController {
  async create(req, res) {}

  async getAll(req, res) {
    const usersInfo = await User.findAll()
    return res.json(usersInfo)
  }
  async getOne(req, res) {
    const userInfo = await User.findOne()
    return res.json(userInfo)
  }
}

module.exports = new UserInfoController();
