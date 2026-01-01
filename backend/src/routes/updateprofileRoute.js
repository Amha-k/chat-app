import express from "express"
import {updateProfile } from "../controller/updateprofile.js"
import { verifyJwt } from "../middleware/verifyjwt.js"
const router= express.Router()

router.route('/update').put(verifyJwt,updateProfile)

export default router