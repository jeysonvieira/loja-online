import express from 'express'
import ProdController from '../controllers/ProductsController.js'
import UserAuth from '../helpers/Auth.js'

const productsRouter = express.Router()



productsRouter.get('/', ProdController.homeGet)

productsRouter.get('/login', ProdController.LoginGet)

productsRouter.get('/signup', ProdController.SignupGet)



export default productsRouter