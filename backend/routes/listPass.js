import express from "express";
import Joi from "@hapi/joi";
import { createValidator } from "express-joi-validation";
import { errorJoiMiddleware } from "../config/errorMiddleware";
import { listPass } from "../controllers/pass";

const validator = createValidator({ passError: true });
const router = express.Router();


const passSchema = Joi.object({
  page: Joi.number().required().label('Page Number'),
  limit: Joi.number().required().label('Limit'),
});

router.get(
  "/listPass",
  validator.query(passSchema, {
    joi: { convert: true, allowUnknown: false },
    errorHttpStatusCode: 400,
  }),
  listPass
);

// Custom error handler middleware
router.use(errorJoiMiddleware);

export default router;
