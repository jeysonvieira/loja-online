import express from 'express'
import ProdController from '../controllers/ProductsController.js'
import UserAuth from '../helpers/Auth.js'

const productsRouter = express.Router()



productsRouter.get('/', ProdController.homeGet)

productsRouter.get('/login', ProdController.LoginGet)

productsRouter.get('/signup', ProdController.SignupGet)

productsRouter.get('/dashbord', UserAuth, ProdController.DashbordGet)

productsRouter.get('/add', UserAuth, ProdController.AddGet)
productsRouter.post('/add', UserAuth, ProdController.AddPost)


productsRouter.get('/edit', UserAuth, ProdController.EditGet)
productsRouter.post('/edit', UserAuth, ProdController.EditPost)

productsRouter.post('/delete', UserAuth, ProdController.DeletePost)

export default productsRouter