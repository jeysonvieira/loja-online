import Product from "../models/Products.js";
import User from "../models/User.js";



const ProdController = class {

    static async homeGet(req, res) {

        var AllProducts = await Product.find().lean()


        res.render('products/home', { AllProducts })
    }

    static LoginGet(req, res) {
        res.render('products/login')
    }

    static SignupGet(req, res) {
        res.render('products/signup')
    }

    static async DashbordGet(req, res) {

        const iduser = req.session.userid

        const user = await Product.find({ seller: iduser }).lean()

        res.render('products/dashbord', { user })
    }

    static AddGet(req, res) {

        res.render('products/add')
    }


    static async AddPost(req, res) {
        const { name, img, price, description } = req.body
        const seller = req.session.userid


        await new Product({ name, img, price, description, seller }).save()

        req.flash('info', 'Produto adicionado com sucesso!')

        req.session.save(() => {
            res.redirect('/products/dashbord')
        })

    }


    static async EditGet(req, res) {

        const id = req.query.id

        const prod = await Product.findById(id).lean()

        res.render('products/edit', { prod })
    }

    static async EditPost(req, res) {

        const { name, img, price, description } = req.body

        const seller = req.session.userid

        const prodId = req.body.id


        await Product.updateOne({ _id: prodId }, { name: name, img: img, price: price, description: description, seller: seller },)


        req.flash('info', 'Produto atualizado com sucesso.')

        req.session.save(() => {
            res.redirect('/products/dashbord')
        })

    }

    static async DeletePost(req, res) {

        const id = req.body.id

        await Product.findByIdAndDelete(id)

        res.redirect('/products/dashbord')

    }

}


export default ProdController