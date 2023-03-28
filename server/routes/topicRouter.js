import Router from 'express'
import TopicController from "../controllers/topicController.js";
import {roleMiddlaware} from "../middlewares/roleMiddleware.js";
import {authMiddlaware} from "../middlewares/authMiddleware.js";

const topicRouter = new Router()

topicRouter.post('/', roleMiddlaware('641e18b855a5d5389d78aba8'), TopicController.create)
topicRouter.get('/', authMiddlaware, TopicController.getAll)
topicRouter.put('/', roleMiddlaware('641e18b855a5d5389d78aba8'), TopicController.update)
topicRouter.delete('/:id', roleMiddlaware('641e18b855a5d5389d78aba8'), TopicController.delete)

export default topicRouter;

