const jwt = require('../lib/jsonwebtoken');
const config = require('../config/config');
const { decode } = require('jsonwebtoken');

exports.authentication = async (req, res, next) => {
    const token = req.cookies['auth'];

    if(token){
        try{
            const decodedToken = await jwt.verify(token, config.SECRET);

            req.user = decodedToken;
            req.isAuthenticated = true;
            res.locals.username = decodedToken.username;
            res.locals.isAuthenticated = true
        }catch(err){
            console.log(err.message);

            res.clearCookie('auth');
            res.redirect('/404')
        }
    }else{

    }

    next()
}

exports.isAuthenticated = (req, res, next) => {
    if(!req.isAuthenticated){
        return res.redirect('/404')
    }

    next()
}