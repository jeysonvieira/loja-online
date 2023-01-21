import Product from "../models/Products.js";



const ProdController = class {

    static homeGet(req, res){
        res.render('products/home')

        console.log(req.session)
    }

    static LoginGet(req, res){
        res.render('products/login')
    }

    static SignupGet(req, res){
        res.render('products/signup')
    }

}


export default ProdController