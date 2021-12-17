import express from "express";
import Middlewares from "./app/routes/middlewares";
import Routes from "./app/routes";

const app = express();
const PORT = process.env.APP_PORT;

Middlewares(app);
Routes(app);

app.listen(PORT, (err) => {
  if (err) {
    console.log("Server connection failed");
    throw err;
  }

  console.log("Connection established on port " + PORT);
});
