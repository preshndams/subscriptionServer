import Joi from "joi";

export default {
  viewMessage: {
    params: {
      schema: Joi.object({
        id: Joi.string().required(),
      }),
    }
  },
};
