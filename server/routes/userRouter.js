const Router = require("express");
const router = new Router();

router.post("/login");
router.get("/auth", (req, res) => {
  res.json({ message: "Работает!" });
});

module.exports = router;
