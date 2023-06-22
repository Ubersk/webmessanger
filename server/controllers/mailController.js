const { Message, User, Poluchateli} = require("../models/models");
const ApiError = require("../error/ApiError");

class MessageController {
  async createMsg(req, res, next) {


    try {console.log(req.body)
      const { 
        message_title,
        message_body,
        files_body,
        user_creator,
        userIdUser,
        msg_type,
        date_create,
      } = req.body;

      const mail = await Message.create({
        message_title,
        message_body,
        files_body,
        user_creator,
        userIdUser,
        msg_type,
        date_create,
      });
      return res.json(mail);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }

  }
async deleteMsg(req, res) {
  const result = await Message.update({ msg_type: 1 }, { where: { id: req.params.id } });
  return res.json(result);
}

  async getAllMsg(req, res) {
    const mail = await Message.findAll({ include: [User, Poluchateli] });
    return res.json(mail);
  }
  
  async getOneMsg(req, res) {
    const mail = await Message.findByPk(req.params.id,{ include: [User, Poluchateli] });
    return res.json(mail);
  }
}

module.exports = new MessageController();
