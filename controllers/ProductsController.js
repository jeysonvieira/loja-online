import Product from "../models/Products.js";



const ProdController = class {

    static homeGet(req, res){
        res.render('products/home')
    }



}


export default ProdController