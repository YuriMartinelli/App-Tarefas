import { Router } from "express";
import { AuthController } from "../controllers/authController";
import { verificarToken } from "../middlewares/auth.middleware";
import { authController } from "../controllers";
const authRoute = Router();


authRoute
    .get("/", verificarToken, authController.autenticado)
    .get("/eu", verificarToken, authController.eu)

    .post("/login", (req, res) => authController.login(req,res))
    .post("/logout", verificarToken, authController.logout)
    .post("/refresh", verificarToken, authController.refresh)

export default authRoute;