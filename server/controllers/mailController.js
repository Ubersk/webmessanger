const uuid = require("uuid");
const path = require("path");
const { Mail, User, Mail_fly} = require("../models/models");
const ApiError = require("../error/ApiError");

class MailController {
  async createMsg(req, res, next) {
    try {console.log(req.body)
      const {
        message_title,
        message_body,
        date_create,
        mail_folderId,
        userId,
      } = req.body;


      const mail = await Mail.create({
        message_title,
        message_body,
        date_create,
        mail_folderId,
        userId,

      });
      const candidate = await User.findOne({ where: { userId } });
      if (!candidate) {
        return next(
          ApiError.badRequest("Пользователь не найден!")
        );
      }
      return res.json(mail);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async basketMsg(req, res) {}
async deleteMsg(req, res) {}

  async hideMsg(req, res) {}

  async getAllMsg(req, res) {
    const mail = await Mail.findAll({ include: [User, Mail_fly] });
    return res.json(mail);
  }

  async getOneMsg(req, res) {
    const mail = await Mail.findByPk(req.params.id,{ include: [User, Mail_fly] });
    return res.json(mail);
  }
}

module.exports = new MailController();
