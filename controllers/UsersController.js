import session from "express-session";
import User from "../models/User.js";
import bcrypt from 'bcryptjs'


const UserController = class {

    static async SignupPost(req, res) {

        //const {name, email, password, confpassword} = req.body

        const name = req.body.name
        const email = req.body.email
        var password = req.body.password
        const confpassword = req.body.confpassword

        const checkemail = await User.find({ email: email }).lean()

        if (checkemail[0]) {
            req.flash('info', "O email já possui cadastro no sistema.")

            req.session.save(() => {
                res.redirect('/products/signup')
            })

            return
        }

        if (password != confpassword) {
            req.flash('info', "As senhas não são iguais.")

            req.session.save(() => {
                res.redirect('/products/signup')
            })

            return
        }

        const Salt = bcrypt.genSaltSync(10)

        password = bcrypt.hashSync(password, Salt)


        const create = await new User({ name, email, password }).save()


        req.session.userid = create._id

        req.flash('info', 'Conta criada com sucesso!')

        req.session.save(() => {
            res.redirect('/products')
        })


    }

    static async LoginPost(req, res) {

        const { email, password } = req.body


        const CheckUser = await User.find({ email: email }).lean()

        if (!CheckUser[0]) {
            req.flash('info', 'Esse email não possui cadastro no sistema')

            req.session.save(() => {
                res.redirect('/products/login')
            })

            return
        }


        const DescriptPass = bcrypt.compareSync(password, CheckUser[0].password)

        if (!DescriptPass) {
            req.flash('info', 'Senha incorreta.')

            req.session.save(() => {
                res.redirect('/products/login')
            })

            return
        }



        req.session.userid = CheckUser[0]._id

        req.flash('info', 'Login concluido com sucesso!')

        req.session.save(() => {

            res.redirect('/products')
        })

    }

    static async LeavePost(req, res) {

        await req.session.destroy()

        res.redirect('/products')
    }

}


export default UserController