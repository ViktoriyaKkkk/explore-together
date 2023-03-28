import Router from 'express'
import CardController from "../controllers/cardController.js";
import {authMiddlaware} from "../middlewares/authMiddleware.js";

const cardRouter = new Router()

cardRouter.post('/', authMiddlaware, CardController.create)
cardRouter.get('/', authMiddlaware, CardController.getAll)
cardRouter.put('/', authMiddlaware, CardController.update)
cardRouter.delete('/:id', authMiddlaware, CardController.delete)

export default cardRouter;

