module.exports = app => {
    const authors = require('../controllers/authors.controller')

    app.get("/authors", authors.getAuthorList);





}