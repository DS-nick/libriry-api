const pool = require("./db");

module.exports = {
  async signup(username, hash) {
    try {
      let user = await pool.query(`insert into users (username, password)

        values ('${username}', '${hash}');`);
    } catch (e) {
      console.log(e);
    }
  },

  async signin(username) {},

  async getUser(username) {
    let user = await pool.query(
      `select * from users where username = '${username}';`
    );

    return user.rows[0];
  },
};
