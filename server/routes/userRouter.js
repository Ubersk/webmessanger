const Router = require("express");
const router = new Router();
const checkRole = require("../middleware/checkRoleMiddleware");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
router.post("/registration", checkRole(true), userController.registration);
router.post("/login", userController.login);
router.get("/auth", authMiddleware, userController.check);

module.exports = router;
