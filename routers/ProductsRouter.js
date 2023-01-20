import express from 'express'
import ProdController from '../controllers/ProductsController.js'

const productsRouter = express.Router()



productsRouter.get('/', ProdController.homeGet)





export default productsRouter