import Router from 'express'
import PeriodicityController from "../controllers/periodicityController.js";

const PeriodicityRouter = new Router()

PeriodicityRouter.post('/', PeriodicityController.create)
PeriodicityRouter.get('/', PeriodicityController.getAll)
PeriodicityRouter.put('/', PeriodicityController.update)
PeriodicityRouter.delete('/:id', PeriodicityController.delete)

export default PeriodicityRouter;

