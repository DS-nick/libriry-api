const pool = require("./db.js");

Authors = {
   async getAuthorList() {
       result =  await pool.query('SELECT * FROM public.employees')
       return result.rows
    }
}

module.exports = Authors