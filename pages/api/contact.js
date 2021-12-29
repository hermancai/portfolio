export default async function sendEmail(req, res) {
  return new Promise((resolve) => {
    const nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        type: "OAuth2",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
      },
      secure: true,
    });

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
      auth: {
        user: process.env.BURNER_USER,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: process.env.ACCESS_TOKEN,
      },
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
