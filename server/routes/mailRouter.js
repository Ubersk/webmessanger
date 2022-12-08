const Router = require("express");
const router = new Router();
const mailController = require("../controllers/mailController");
router.post("/", mailController.createMsg);
router.get("/", mailController.getAllMsg);
router.get("/:id", mailController.getOneMsg);

module.exports = router;
