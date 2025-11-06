import { NextResponse } from "next/server";
import Mailgun from "mailgun.js";
import formData from "form-data";

const MAILGUN_API = process.env.MAILGUN_API;
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN;
const BURNER_USER = process.env.BURNER_USER;

export async function POST(req: Request) {
    if (!MAILGUN_API || !MAILGUN_DOMAIN || !BURNER_USER) {
        return NextResponse.json({ error: true }, { status: 500 });
    }

    const body = await req.json();

    if (body.syrupJar !== "") {
        return NextResponse.json({ error: true }, { status: 400 });
    }

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({ username: "api", key: MAILGUN_API });

    const success = await mg.messages.create(MAILGUN_DOMAIN, {
        from: BURNER_USER,
        to: BURNER_USER,
        subject: `Message from ${body.name}`,
        text: body.message,
        html: `<div style="white-space:pre;">
          <p>Name:<br/>${body.name}<br/><br/>Email:<br/>${body.email}<br/><br/>Message:<br/>${body.message}</p>
        </div>`,
    });

    if (success.status === 200) {
        return NextResponse.json({ success: true });
    } else {
        return NextResponse.json({ error: true }, { status: 500 });
    }
}
