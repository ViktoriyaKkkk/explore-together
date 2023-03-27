import Router from 'express'
import SectionController from "../controllers/sectionController.js";

const sectionRouter = new Router()

sectionRouter.post('/', SectionController.create)
sectionRouter.get('/', SectionController.getAll)
sectionRouter.put('/', SectionController.update)
sectionRouter.delete('/:id', SectionController.delete)

export default sectionRouter;

