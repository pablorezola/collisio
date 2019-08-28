var express = require('express');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express()
var router = express.Router();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
