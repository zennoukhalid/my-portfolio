const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/contact", (req, res) => {
 let data = req.body; 
 console.log("you are in server",data.name.length,data.email.length,data.message.length);
  
  if (
    data.name.length === 0 ||
    data.email.length === 0 ||
    data.message.length === 0
  ) {
    return res.json({ msg: "merci de remplir tous les champs" });
  }

  let smtpTransporter = nodemailer.createTransport({
    host: "smtp.mailgun.org",
    port: 587,
    auth: {
      user: "postmaster@sandboxd4d738ff6d1e441ca4f96a83206d7620.mailgun.org",
      pass: "160fccbc14cdaf29fce36b6d4be6cc5e-adf6de59-0831b0fa",
    },
  });
  let mailOptions = {
    from: data.email,
    to: "khalid1zennou@gmail.com",
    subject: `message from ${data.name}`,
    html: `
            <h3>Informations<h3/>
            <ul>
            <li>Name: ${data.name}<li/>
            <li>Email: ${data.email}<li/>
            </ul>
            <h3>Message</h3>
            <p>${data.message}<p/>
            `,
  };

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error)
      console.log(error);
        return res.status(400).json({ msg: "!!!merci de remplir tous les champs" });
      res.status(200).json({ msg: "Merci de contacter ZENNOU Khalid" });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "Il y a une erreur de serveur" });
    }
  });
});
module.exports = router;