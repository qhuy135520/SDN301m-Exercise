import express from "express";
import configViewEngine from "./configs/viewengine";
import initWebRoutes from "./routes/web";
require("dotenv").config();

const app = express();

configViewEngine(app);

initWebRoutes(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Successfully on " + PORT);
});
