const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const {User} = require("../models/models");
const jwt = require("jsonwebtoken");
const generateJwt = (id, name, is_admin) => {
  const data = { id, name, is_admin };
  console.log(data);
  return jwt.sign(data, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class UserController {
  async registration(req, res, next) {
    const { name, password, is_admin } = req.body;
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
    const user = await User.create({ name, is_admin, password: hashPassword });
    const token = generateJwt(user.id, user.name, user.is_admin);
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
    const token = generateJwt(user.id_user, user.name, user.is_admin);
    return res.json({ token });
  }

  async check(req, res) {
    const token = generateJwt(req.user.id, req.user.name, req.user.isis_adminAdmin);
    return res.json({ token });
  }

  async getAllUsers(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }
// Хотел создать функцию взятия создателя сообщения из клиентской части и форматирования из id в name
  // async getUserCreator(req, res){
  //   const userCreator = req.user_creator;
  //   const user_creator_instance = await User.findByPk(userCreator);
  //   const user_creator_name = user_creator_instance.name;
  //   return res(user_creator_name);
  // }
}


module.exports = new UserController();
