import { Router } from "express";
// import { registerUser, loginUser } from "./user.controller";
// import { validate } from "../../core/middleware/validate.middleware";
// import { registerSchema, loginSchema } from "./user.validation";

const router = Router();

router.post(
  "/register",
  (req, res) => {
    console.log("running");
  }
  // validate(registerSchema), registerUser
);
// router.post(
//   "/login"
//   //  validate(loginSchema), loginUser
// );

export const userRouter = router;
