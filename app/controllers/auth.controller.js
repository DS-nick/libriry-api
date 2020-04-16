const bcrypt = require("bcryptjs")

const Auth = require('../models/auth.models')


exports.signup = async (req, res)=> {


    const {username, password} = req.body

    let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync(password, salt);
    
    Auth.signup(username, hash)
    res.send('Success')
}