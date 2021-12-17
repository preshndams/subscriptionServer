import * as service from "./service";

export async function viewMessage(req, res, next) {
  try {
    res.status(200).json(await service.viewMessage(req.params));
  } catch (err) {
    next(err);
  }
}
