import Router from 'express'
import AgeController from "../controllers/ageController.js";

const ageRouter = new Router()

ageRouter.post('/', AgeController.create)
ageRouter.get('/', AgeController.getAll)
ageRouter.put('/', AgeController.update)
ageRouter.delete('/:id', AgeController.delete)

export default ageRouter;

