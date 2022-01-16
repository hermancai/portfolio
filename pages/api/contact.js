const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");

export default async function sendEmail(req, res) {
  return new Promise((resolve) => {
    const auth = {
      auth: {
        api_key: process.env.MAILGUN_API,
        domain: process.env.MAILGUN_DOMAIN,
      },
    };

    const nodemailerMailgun = nodemailer.createTransport(mg(auth));

    const mailData = {
      from: process.env.BURNER_USER,
      to: process.env.BURNER_USER,
      subject: `Message from ${req.body.name}`,
      text: req.body.message,
      html: `<div>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>Message: ${req.body.message}</p>
      </div>`,
    };

    nodemailerMailgun.sendMail(mailData, (err, info) => {
      if (err) {
        console.log(err);
        res.status(500).send({ error: err, status: 500 });
        return resolve();
      } else {
        res.status(200).send({ info: info.response, status: 200 });
        resolve();
      }
    });
  });
}
