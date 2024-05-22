import { Router } from "express"
import { NameVar, createAccount, login } from "../controllers/index.js"

const router = Router()


router.post('/name', NameVar)
router.post('/account', createAccount)
router.post('/login', login)



export { router }