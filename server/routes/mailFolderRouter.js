const Router = require("express");
const router = new Router();
const mailController = require("../controllers/mailFolderController");
const checkRole = require("../middleware/checkRoleMiddleware");
router.post("/", checkRole(true), mailController.createFolderMsg);
router.get("/", mailController.getFolderMsg);

module.exports = router;
