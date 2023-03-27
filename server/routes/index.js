import Router from 'express'
import cityRouter from "./cityRouter.js";
import topicRouter from "./topicRouter.js";
import durationRouter from "./durationRouter.js";
import periodicityRouter from "./periodicityRouter.js";
import timeRouter from "./timeRouter.js";
import formatRouter from "./formatRouter.js";
import numberOfPeopleRouter from "./numberOfPeopleRouter.js";
import ageRouter from "./ageRouter.js";
import sectionRouter from "./sectionRouter.js";
import levelRouter from "./levelRouter.js";
import cardRouter from "./cardRouter.js";
import authRouter from "./authRouter.js";
const router = Router()

router.use('/city', cityRouter)
router.use('/topic', topicRouter)
router.use('/duration', durationRouter)
router.use('/periodicity', periodicityRouter)
router.use('/time', timeRouter)
router.use('/format', formatRouter)
router.use('/people', numberOfPeopleRouter)
router.use('/age', ageRouter)
router.use('/section', sectionRouter)
router.use('/level', levelRouter)
router.use('/card', cardRouter)
router.use('/auth', authRouter)

export default router;