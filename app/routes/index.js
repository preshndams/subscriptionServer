"use strict";
import { errorMessage } from "iyasunday";
import Notification from '../module/notification'

export default (app) => {
  app.use("/", Notification)

  //error Handler
  app.use((err, req, res, next) => {
    if (!err) next();
    res.status(err.status || err.httpStatusCode || 500).json(errorMessage(err));
  });

  app.use((req, res) => {
    res.status(404).json({
      success: false,
      message: `Requested route ( ${req.get("HOST")}${
        req.originalUrl
      } ) not found`,
      service: `${process.env.APP_NAME}`,
    });
  });
};
