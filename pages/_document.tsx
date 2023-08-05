import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body style={{ margin: 0 }}>
        <noscript>
          <div
            style={{
              width: "100%",
              height: "100vh",
              backgroundColor: "#18181b",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "arial",
            }}
          >
            <p>Please enable Javascript.</p>
          </div>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
