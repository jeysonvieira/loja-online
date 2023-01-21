import express from 'express'
import UserController from '../controllers/UsersController.js'
import UserAuth from '../helpers/Auth.js'

const UserRouter = express.Router()



UserRouter.post('/signup', UserController.SignupPost)
UserRouter.post('/login', UserController.LoginPost)
UserRouter.post('/leave', UserAuth, UserController.LeavePost)




export default UserRouter