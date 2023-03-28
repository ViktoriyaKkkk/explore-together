import Router from 'express'
import DurationController from "../controllers/durationController.js";
import {roleMiddlaware} from "../middlewares/roleMiddleware.js";
import {authMiddlaware} from "../middlewares/authMiddleware.js";

const durationRouter = new Router()

durationRouter.post('/', roleMiddlaware('641e18b855a5d5389d78aba8'), DurationController.create)
durationRouter.get('/', authMiddlaware, DurationController.getAll)
durationRouter.put('/', roleMiddlaware('641e18b855a5d5389d78aba8'), DurationController.update)
durationRouter.delete('/:id', roleMiddlaware('641e18b855a5d5389d78aba8'), DurationController.delete)

export default durationRouter;

