import express from "express";
import homeController from "../controller/homeController"
const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homeController.handlerWebRoute);
  router.get("/about", homeController.handlerControllerPage);
  return app.use("/", router);
};

export default initWebRoutes;
