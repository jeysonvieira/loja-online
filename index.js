//Frameworks
import express from 'express'
import { engine } from 'express-handlebars'
import flash from 'express-flash'
import session from 'express-session'
import sessionFileStore from 'session-file-store'
import os from 'os'
import path from 'path'

//Arquivos internos
import mongoose from './db/conn.js'
import productsRouter from './routers/ProductsRouter.js'
import UserRouter from './routers/UsersRouter.js'


const app = express()
//const FileStore = sessionFileStore(session)



app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


app.use(session({
    secret: 'jeys@n_secret',
    name: 'session',
    resave: false,
    saveUninitialized: false,
    // store: new FileStore({
    //     logFn: function () { },
    //     path: path.join(os.tmpdir(), 'sessions')
    // }),
    cookie: {
        maxAge: 360000,
        httpOnly: true,
        expires: new Date(Date.now() + 360000)
    }
}))

app.use(flash())


app.use((req, res, next) => {

    if (req.session.userid) {
        res.locals.session = req.session
    }

    next()
})

app.use('/products', productsRouter)
app.use('/products', UserRouter)



app.listen(3000)