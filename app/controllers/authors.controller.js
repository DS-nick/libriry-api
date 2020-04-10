const Authors = require("../models/authors.model.js");

exports.getAuthorList = async (req, res)=> {
   
    let result = await Authors.getAuthorList()
    res.status(200).send(result)
}