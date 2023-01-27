// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";

const MAILGUN_API = process.env.MAILGUN_API;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const BURNER_USER = process.env.BURNER_USER;

interface Data {
  error?: boolean;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (!MAILGUN_API || !MAILGUN_DOMAIN || !BURNER_USER) {
    return res.status(500).json({ error: true });
  }

  if (req.method === "POST") {
    const success = await sendMail(
      { api_key: MAILGUN_API, domain: MAILGUN_DOMAIN },
      BURNER_USER,
      req.body
    );

    return res.status(success ? 200 : 500).json({ error: !success });
  } else {
    return res.status(400).json({ error: true });
  }
}

async function sendMail(
  auth: mg.AuthOptions,
  user: string,
  body: { name: string; email: string; message: string }
): Promise<boolean> {
  const nodemailerMailgun = nodemailer.createTransport(mg({ auth }));

  const mailData = {
    from: user,
    to: user,
    subject: `Message from ${body.name}`,
    text: body.message,
    html: `<div style="white-space:pre;">
      <p>Name:<br/>${body.name}<br/><br/>Email:<br/>${body.email}<br/><br/>Message:<br/>${body.message}</p>
    </div>`,
  };

  const res = await nodemailerMailgun.sendMail(mailData);
  if (res.rejected) {
    console.log(res.response);
    return false;
  }
  return true;
}
