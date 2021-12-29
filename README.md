# portfolio

This is my portfolio at [hermancai.dev](https://hermancai.dev), built with Next.js and hosted by Vercel.


### Run Development Server

Create file '.env.local' in the root directory with these variables:
```
BURNER_USER=<disposable@gmail.com>
CLIENT_ID=<google api client id>
CLIENT_SECRET=<google api client secret>
REFRESH_TOKEN=<google api refresh token>
ACCESS_TOKEN=<google api access token>
```
To generate your own env variables, check this [StackOverflow thread](https://stackoverflow.com/questions/24098461/nodemailer-gmail-what-exactly-is-a-refresh-token-and-how-do-i-get-one/24123550#24123550).

Run locally:
```
npm run dev
```
Then open [localhost:3000](http:localhost:3000) from a browser.
