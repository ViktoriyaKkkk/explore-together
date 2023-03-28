import Router from 'express'
import NumberOfPeopleController from "../controllers/numberOfPeopleController.js";
import {roleMiddlaware} from "../middlewares/roleMiddleware.js";
import {authMiddlaware} from "../middlewares/authMiddleware.js";

const numberOfPeopleRouter = new Router()

numberOfPeopleRouter.post('/', roleMiddlaware('641e18b855a5d5389d78aba8'), NumberOfPeopleController.create)
numberOfPeopleRouter.get('/', authMiddlaware, NumberOfPeopleController.getAll)
numberOfPeopleRouter.put('/', roleMiddlaware('641e18b855a5d5389d78aba8'), NumberOfPeopleController.update)
numberOfPeopleRouter.delete('/:id', roleMiddlaware('641e18b855a5d5389d78aba8'), NumberOfPeopleController.delete)

export default numberOfPeopleRouter;

