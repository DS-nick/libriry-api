const pool = require('./db')

module.exports = {
   async signup(username, hash) {

    try {
        let user = await pool.query(`insert into users (username, password)

        values ('${username}', '${hash}');`)
    }catch(e) {
        console.log(e)
       
    }
    }
}