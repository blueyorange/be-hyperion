const apiRouter = require("express").Router();
const userRouter = require("./users.routes");
const apiInfoRouter = require("./info.routes");
const presentationRouter = require("./presentations.routes");

apiRouter.use("/users", userRouter);
apiRouter.use("/presentations", presentationRouter);
apiRouter.use("/", apiInfoRouter);

module.exports = apiRouter;
