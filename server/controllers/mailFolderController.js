const {Mail_folder} = require("../models/models");

class MailFolderController {
  async createFolderMsg(req, res) {
    const {name_mail_folder} = req.body;
    const mailFolder = await Mail_folder.create({name_mail_folder});
    return res.json(mailFolder);
  }

  async getFolderMsg(req, res) {
    const mailFolders = await Mail_folder.findAll()
    return res.json(mailFolders)
  }

  async deleteFolderMsg(req, res) {
  }
}

module.exports = new MailFolderController();
