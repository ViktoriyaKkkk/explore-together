import Router from 'express'
import AgeController from "../controllers/ageController.js";
import {roleMiddlaware} from "../middlewares/roleMiddleware.js";
import {authMiddlaware} from "../middlewares/authMiddleware.js";

const ageRouter = new Router()

ageRouter.post('/', roleMiddlaware('641e18b855a5d5389d78aba8'), AgeController.create)
ageRouter.get('/', authMiddlaware, AgeController.getAll)
ageRouter.put('/', roleMiddlaware('641e18b855a5d5389d78aba8'), AgeController.update)
ageRouter.delete('/:id', roleMiddlaware('641e18b855a5d5389d78aba8'), AgeController.delete)

export default ageRouter;

