const Router = require("express");
const router = new Router();
const mailController = require("../controllers/mailFolderController");
router.post("/", mailController.createFolderMsg);
router.get("/", mailController.getFolderMsg);

module.exports = router;
