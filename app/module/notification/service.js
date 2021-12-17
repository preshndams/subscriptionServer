"use strict";
import axios from "axios";
import { NotFoundError } from "iyasunday";

export async function viewMessage({ id }) {
  let url = `http://localhost:9000/${id}`;
  let message = await axios
    .get("http://localhost:8000/publish/message", {
      data: {
        link: url,
      },
    })
    .catch((err) => {
      throw new NotFoundError("Subscription not found");
    });

  return {
    success: true,
    data: message.data,
  };
}
