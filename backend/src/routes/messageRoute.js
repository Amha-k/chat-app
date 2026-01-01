import express from"express"
import { verifyJwt } from "../middleware/verifyjwt.js"
import { getMessage, getUsers, sendMessage } from "../controller/messagecontroller.js"

const router = express.Router()

router.route('/users').get(verifyJwt,getUsers)
router.route('/:id').get(verifyJwt,getMessage)
router.route('/send/:id').post(verifyJwt,sendMessage)

export default router