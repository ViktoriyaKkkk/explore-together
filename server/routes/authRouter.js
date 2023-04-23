import Router from "express";
import AuthController from "../controllers/authController.js";
import {check} from "express-validator";
import {roleMiddleware} from "../middlewares/roleMiddleware.js";

const authRouter = new Router()

authRouter.post('/registration', [
    check("email", "Поле email не может быть пустым").notEmpty(),
        check('password', "Пароль должен содержать от 6 до 20 символов").isLength({min:6, max:20}),
        check("name", "Поле Имя не может быть пустым").notEmpty(),
        check("gender", "Вы не указали ваш пол").notEmpty()
    ],
    AuthController.registration)
authRouter.post('/login', AuthController.login)
authRouter.put('/upduser', roleMiddleware('641e18b855a5d5389d78aba8'), AuthController.update)
authRouter.get('/users', roleMiddleware('641e18b855a5d5389d78aba8'), AuthController.getAll)

export default authRouter;