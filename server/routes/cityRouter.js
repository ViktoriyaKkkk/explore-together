import Router from 'express'
import CityController from "../controllers/cityController.js";
import {roleMiddlaware} from "../middlewares/roleMiddleware.js";
import {authMiddlaware} from "../middlewares/authMiddleware.js";

const cityRouter = new Router()

cityRouter.post('/', roleMiddlaware('641e18b855a5d5389d78aba8'), CityController.create)
cityRouter.get('/', authMiddlaware, CityController.getAll)
cityRouter.put('/', roleMiddlaware('641e18b855a5d5389d78aba8'), CityController.update)
cityRouter.delete('/:id', roleMiddlaware('641e18b855a5d5389d78aba8'), CityController.delete)

export default cityRouter;

