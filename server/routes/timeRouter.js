import Router from 'express'
import TimeController from "../controllers/timeController.js";
import {roleMiddlaware} from "../middlewares/roleMiddleware.js";
import {authMiddlaware} from "../middlewares/authMiddleware.js";

const timeRouter = new Router()

timeRouter.post('/', roleMiddlaware('641e18b855a5d5389d78aba8'), TimeController.create)
timeRouter.get('/', authMiddlaware, TimeController.getAll)
timeRouter.put('/', roleMiddlaware('641e18b855a5d5389d78aba8'), TimeController.update)
timeRouter.delete('/:id', roleMiddlaware('641e18b855a5d5389d78aba8'), TimeController.delete)

export default timeRouter;

