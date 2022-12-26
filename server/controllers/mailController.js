const { Mail, User, Mail_fly} = require("../models/models");
const ApiError = require("../error/ApiError");

class MailController {
  async createMsg(req, res, next) {


    try {console.log(req.body)
      const {
        user_sender,
        message_title,
        message_body,
        mail_folderId,
        user_receiver,
        date_create,
      } = req.body;


      const mail = await Mail.create({
        user_sender,
        message_title,
        message_body,
        user_receiver,
        date_create,
        mail_folderId
      });
      return res.json(mail);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }
async deleteMsg(req, res) {}

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
