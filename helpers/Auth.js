const UserAuth = function(req, res, next){
    if(!req.session.userid){
        res.redirect('products/login')
    }

    next()
}


export default UserAuth