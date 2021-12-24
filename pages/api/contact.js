export default async function sendEmail(req, res) {
  return new Promise((resolve) => {
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.BURNER_USER,
        pass: process.env.BURNER_PASS,
      },
      secure: true,
    });

    const mailData = {
      from: process.env.BURNER_USER,
      to: process.env.EMAIL_USER,
      subject: `Message from ${req.body.name}`,
      text: req.body.message,
      html: `<div>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <p>Message: ${req.body.message}</p>
      </div>`,
    };

    transporter.sendMail(mailData, function (err, info) {
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
