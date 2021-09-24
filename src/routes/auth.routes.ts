import express from "express";
import { AuthController } from "../controllers";

const authRoutes = (app: express.Express) => {
  app.post('/signup', (req, res) => new AuthController(req, res).signup());

  app.post('/signin', (req, res) => new AuthController(req, res).signin());

  app.post('/verify-otp', (req, res) => new AuthController(req, res).verifyOtp());
}

export { authRoutes };