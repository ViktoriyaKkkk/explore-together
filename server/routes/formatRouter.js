import Router from 'express'
import FormatController from "../controllers/formatController.js";
import {roleMiddlaware} from "../middlewares/roleMiddleware.js";
import {authMiddlaware} from "../middlewares/authMiddleware.js";

const formatRouter = new Router()

formatRouter.post('/', roleMiddlaware('641e18b855a5d5389d78aba8'), FormatController.create)
formatRouter.get('/', authMiddlaware, FormatController.getAll)
formatRouter.put('/', roleMiddlaware('641e18b855a5d5389d78aba8'), FormatController.update)
formatRouter.delete('/:id', roleMiddlaware('641e18b855a5d5389d78aba8'), FormatController.delete)

export default formatRouter;

