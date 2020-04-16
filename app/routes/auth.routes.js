module.exports = app => {
    const auth = require('../controllers/auth.controller')

    app.post("/signup", auth.signup);





}