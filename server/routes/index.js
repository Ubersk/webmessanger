const Routes = require("express");
const router = new Routes();
const userRouter = require("./userRouter");
const userInfoRouter = require("./userInfoRouter");
const mailFolderRouter = require("./mailFolderRouter");
const mailRouter = require("./mailRouter");

router.use("/user", userRouter);
router.use("/userInfo", userInfoRouter);
router.use("/mail", mailRouter);
router.use("/mailFolder", mailFolderRouter);

module.exports = router;
