import Router from 'express'
import CardController from "../controllers/cardController.js";

const cardRouter = new Router()

cardRouter.post('/', CardController.create)
cardRouter.get('/', CardController.getAll)
cardRouter.put('/', CardController.update)
cardRouter.delete('/:id', CardController.delete)

export default cardRouter;

