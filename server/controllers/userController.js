const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const { User} = require("../models/models");
const jwt = require("jsonwebtoken");

const generateJwt = (id, name, isAdmin) => {
  return jwt.sign({ id, name, isAdmin }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { name, password, isAdmin } = req.body;
    if (!name || !password) {
      return next(ApiError.badRequest("Некорректные name или password"));
    }
    const candidate = await User.findOne({ where: { name } });
    if (candidate) {
      return next(
        ApiError.badRequest("Пользователь с таким name уже существует!")
      );
    }
    const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({ name, isAdmin, password: hashPassword });
    const token = generateJwt(user.id, user.name, user.isAdmin);
    return res.json({ token });
  }

  async login(req, res, next) {
    const { name, password } = req.body;
    const user = await User.findOne({ where: { name } });
    if (!user) {
      return next(ApiError.internal("Пользователь не найден"));
    }
    let comparePassword = bcrypt.compareSync(password, user.password);
    if (!comparePassword) {
      return next(ApiError.internal("Указан неверный пароль"));
    }
    const token = generateJwt(user.id, user.name, user.isAdmin);
    return res.json({ token });
  }

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.name, req.user.isAdmin);
    return res.json({ token });
  }

  async getAllUsers(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }
}


module.exports = new UserController();
