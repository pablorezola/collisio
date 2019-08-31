const express = require('express');
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");

const router = express.Router();

const app = express();

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/public", express.static(path.join(__dirname, "public")));


app.get("/", (req,res) => {
  res.render("contact");
})



app.post("/api/form", (req, res) => {
 nodemailer.createTestAccount((error, account) => {
   const htmlEmail = `
   <h3> Contact Details </h3>
   <ul>
      <li>Email: ${req.body.email} </li>
    </ul>
    <h3>Message</h3>
    <p> ${req.body.message}</p>
    `

    let transporter = nodemailer.createTransport({
      /* ACABAR NODEMAILER GMAIL */
    })
 })
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})


module.exports = router;
