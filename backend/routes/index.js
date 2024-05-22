import { Router } from "express"
import { NameVar, createAccount, login } from "../controllers/index.js"
import { weatherdata } from "../controllers/weathercnt.js"
import { makeFeedback } from "../controllers/feedbackcnt.js"

const router = Router()


router.post('/name', NameVar)
router.post('/account', createAccount)
router.post('/login', login)
router.get('/weatherdata', weatherdata)
router.post('/feedback', makeFeedback)



export { router }