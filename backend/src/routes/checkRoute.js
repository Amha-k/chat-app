import express from"express"
import { verifyJwt } from "../middleware/verifyjwt.js"
import { checkAuth } from "../controller/check.js"
const router = express.Router()

router.route('/').get(verifyJwt,checkAuth)

export default router