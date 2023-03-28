import Router from 'express'
import LevelController from "../controllers/levelController.js";
import {roleMiddlaware} from "../middlewares/roleMiddleware.js";
import {authMiddlaware} from "../middlewares/authMiddleware.js";

const levelRouter = new Router()

levelRouter.post('/', roleMiddlaware('641e18b855a5d5389d78aba8'), LevelController.create)
levelRouter.get('/', authMiddlaware, LevelController.getAll)
levelRouter.put('/', roleMiddlaware('641e18b855a5d5389d78aba8'), LevelController.update)
levelRouter.delete('/:id', roleMiddlaware('641e18b855a5d5389d78aba8'), LevelController.delete)

export default levelRouter;

