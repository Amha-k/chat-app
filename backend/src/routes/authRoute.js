import express from 'express'
import {signUP} from "../controller/authController.js"
import { logOut } from '../controller/logoutauth.js'
import { login } from '../controller/loginauth.js'
const router = express.Router()

router.route('/signup').post(signUP)

router.route('/login').post(login)

router.route('/logout').post(logOut)

export default router