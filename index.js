//Frameworks
import express from 'express'
import { engine } from 'express-handlebars'
import flash from 'express-flash'
import session from 'express-session'

//Arquivos internos
import mongoose from './db/conn.js'
import productsRouter from './routers/ProductsRouter.js'




const app = express()



app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.use(session({
    secret: 'jeys@n_secret',
    name: 'session',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 360000,
        httpOnly: true,
        expires: new Date(Date.now() + 360000)
    }
}))

app.use(flash())


app.use((req, res, next) => {

    if(req.session.userid){
        res.locals.session = req.session
    }
    
    next()
})

app.use('/products', productsRouter)



app.listen(3000)