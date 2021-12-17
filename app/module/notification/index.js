import { Router } from "express";
import { joiValidator } from "iyasunday";
import validation from "./validation";
import * as controller from "./controller";

const route = Router();

route.get(
  "/:id",
  joiValidator(validation.viewMessage),
  controller.viewMessage
);

export default route;
