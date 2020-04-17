const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route


// require("./app/routes/customer.routes.js")(app);
require("./app/routes/authors.routes")(app)
require("./app/routes/auth.routes")(app)

app.get('/home', (req, res)=> {
  res.send("Hello from home page")
})



// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
