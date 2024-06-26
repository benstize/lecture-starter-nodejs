import { Router } from "express";
import { authService } from "../services/authService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.post(
  "/login",
  (req, res, next) => {
    console.log('work', req.body.email)
    const { email, password } = req.body;

    const isEmailRight = authService.login({ email });
    const isPasswordRight = authService.login({ password });

    if (!isEmailRight || !isPasswordRight) {
      req.body.error = true;
      req.body.message = "User does not exist"
      return next();
    }
    next();
  },
  responseMiddleware
);

export { router };
