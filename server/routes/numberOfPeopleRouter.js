import Router from 'express'
import NumberOfPeopleController from "../controllers/numberOfPeopleController.js";

const numberOfPeopleRouter = new Router()

numberOfPeopleRouter.post('/', NumberOfPeopleController.create)
numberOfPeopleRouter.get('/', NumberOfPeopleController.getAll)
numberOfPeopleRouter.put('/', NumberOfPeopleController.update)
numberOfPeopleRouter.delete('/:id', NumberOfPeopleController.delete)

export default numberOfPeopleRouter;

