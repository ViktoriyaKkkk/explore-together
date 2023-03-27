import Router from 'express'
import LevelController from "../controllers/levelController.js";

const levelRouter = new Router()

levelRouter.post('/', LevelController.create)
levelRouter.get('/', LevelController.getAll)
levelRouter.put('/', LevelController.update)
levelRouter.delete('/:id', LevelController.delete)

export default levelRouter;

