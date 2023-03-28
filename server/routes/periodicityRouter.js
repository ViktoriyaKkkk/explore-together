import Router from 'express'
import PeriodicityController from "../controllers/periodicityController.js";
import {roleMiddlaware} from "../middlewares/roleMiddleware.js";
import {authMiddlaware} from "../middlewares/authMiddleware.js";

const PeriodicityRouter = new Router()

PeriodicityRouter.post('/', roleMiddlaware('641e18b855a5d5389d78aba8'), PeriodicityController.create)
PeriodicityRouter.get('/', authMiddlaware, PeriodicityController.getAll)
PeriodicityRouter.put('/', roleMiddlaware('641e18b855a5d5389d78aba8'), PeriodicityController.update)
PeriodicityRouter.delete('/:id', roleMiddlaware('641e18b855a5d5389d78aba8'), PeriodicityController.delete)

export default PeriodicityRouter;

