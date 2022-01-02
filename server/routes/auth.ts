import express, { Router } from 'express'
const router: Router = express.Router()

import {
  register,
  login,
  resetpassword,
  forgotpassword,
} from '../controllers/auth.js'

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/forgotpassword').post(forgotpassword)
router.route('/resetpassword/:resetToken').put(resetpassword)

export default router
