# portfolio

This is my portfolio at [hermancai.dev](https://hermancai.dev), built with Next.js and hosted by Vercel.

### Run Development Server

Set up an email service on Mailgun.

Create file '.env.local' in the root directory with these variables:

```
BURNER_USER=<disposable@gmail.com>
MAILGUN_DOMAIN=<mailgun custom domain>
MAILGUN_API=<mailgun api>
```
To generate your own env variables, check this [StackOverflow thread](https://stackoverflow.com/questions/24098461/nodemailer-gmail-what-exactly-is-a-refresh-token-and-how-do-i-get-one/24123550#24123550).

Run locally:

```
npm run dev
```

Open [localhost:3000](http:localhost:3000)
