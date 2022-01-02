import {Request, Response, NextFunction} from 'express'

export const register = (req : Request, res : Response, next : NextFunction) => {
  res.send('Register Route')
}

export const login = (req : Request, res : Response, next : NextFunction) => {
  res.send('Login Route')
}

export const forgotpassword = (req : Request, res : Response, next : NextFunction) => {
  res.send('Forgot Password Route')
}

export const resetpassword = (req : Request, res : Response, next : NextFunction) => {
  res.send('Reset Password Route')
}
