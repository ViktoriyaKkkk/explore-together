import Router from 'express'
import SectionController from "../controllers/sectionController.js";
import {roleMiddlaware} from "../middlewares/roleMiddleware.js";
import {authMiddlaware} from "../middlewares/authMiddleware.js";

const sectionRouter = new Router()

sectionRouter.post('/', roleMiddlaware('641e18b855a5d5389d78aba8'), SectionController.create)
sectionRouter.get('/', authMiddlaware, SectionController.getAll)
sectionRouter.put('/', roleMiddlaware('641e18b855a5d5389d78aba8'), SectionController.update)
sectionRouter.delete('/:id', roleMiddlaware('641e18b855a5d5389d78aba8'), SectionController.delete)

export default sectionRouter;

