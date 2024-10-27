import express from "express";
import Joi from "@hapi/joi";
import { createValidator } from "express-joi-validation";
import { errorJoiMiddleware } from "../config/errorMiddleware";
import { detailPass } from "../controllers/pass";

const validator = createValidator({ passError: true });
const router = express.Router();

const passSchema = Joi.object({
  Id: Joi.string().required().label("Id"),
});

router.get(
  "/detailPass",
  validator.query(passSchema, {
    joi: { convert: true, allowUnknown: false },
    errorHttpStatusCode: 400,
  }),
  detailPass
);

// Custom error handler middleware
router.use(errorJoiMiddleware);

export default router;
