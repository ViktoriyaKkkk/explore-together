import Router from 'express'
import TimeController from "../controllers/timeController.js";

const timeRouter = new Router()

timeRouter.post('/', TimeController.create)
timeRouter.get('/', TimeController.getAll)
timeRouter.put('/', TimeController.update)
timeRouter.delete('/:id', TimeController.delete)

export default timeRouter;

