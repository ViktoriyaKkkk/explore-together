import Router from 'express'
import DurationController from "../controllers/durationController.js";

const durationRouter = new Router()

durationRouter.post('/', DurationController.create)
durationRouter.get('/', DurationController.getAll)
durationRouter.put('/', DurationController.update)
durationRouter.delete('/:id', DurationController.delete)

export default durationRouter;

