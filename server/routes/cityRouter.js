import Router from 'express'
import CityController from "../controllers/cityController.js";

const cityRouter = new Router()

cityRouter.post('/', CityController.create)
cityRouter.get('/', CityController.getAll)
cityRouter.put('/', CityController.update)
cityRouter.delete('/:id', CityController.delete)

export default cityRouter;

