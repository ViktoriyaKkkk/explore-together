import Router from 'express'
import FormatController from "../controllers/formatController.js";

const formatRouter = new Router()

formatRouter.post('/', FormatController.create)
formatRouter.get('/', FormatController.getAll)
formatRouter.put('/', FormatController.update)
formatRouter.delete('/:id', FormatController.delete)

export default formatRouter;

