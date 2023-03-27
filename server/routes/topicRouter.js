import Router from 'express'
import TopicController from "../controllers/topicController.js";

const topicRouter = new Router()

topicRouter.post('/', TopicController.create)
topicRouter.get('/', TopicController.getAll)
topicRouter.put('/', TopicController.update)
topicRouter.delete('/:id', TopicController.delete)

export default topicRouter;

