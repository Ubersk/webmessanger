const Router = require("express");
const router = new Router();
const authMiddleware = require("../middleware/authMiddleware");
const mailController = require("../controllers/mailController");
router.post("/", authMiddleware, mailController.createMsg);
router.delete("/", authMiddleware, mailController.deleteMsg);
router.get("/", authMiddleware, mailController.getAllMsg);
router.get("/:id", mailController.getOneMsg);

module.exports = router;
