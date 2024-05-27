# My Portfolio

Hosted at [hermancai.dev](https://hermancai.dev)

Built with TypeScript, Next.js, and TailwindCSS.

### Run Development Server

Set up an email service on Mailgun.

Create file '.env.local' in the root directory with these variables:

```
BURNER_USER=<disposable@gmail.com>
MAILGUN_DOMAIN=<mailgun custom domain>
MAILGUN_API=<mailgun private api key>
```

To generate MAILGUN_API: mailgun.com >> Sending >> Domain Settings >> Sending API Keys >> Add sending key

Run locally:

```
npm install
npm run dev
```

Open [localhost:3000](http:localhost:3000)
