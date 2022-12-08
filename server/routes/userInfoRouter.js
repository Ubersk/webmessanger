const Router = require("express");
const router = new Router();
const userInfoController = require("../controllers/userInfoController");
router.post("/", userInfoController.create);
router.get("/", userInfoController.getAll);
router.get("/:id", userInfoController.getOne);

module.exports = router;
