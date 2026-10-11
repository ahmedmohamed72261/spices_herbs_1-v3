import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ backgroundColor: '#fdf9f0' }}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;600;700&family=Roboto:wght@300;400;500;700&family=Cairo:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/assets/img/logo/favicon.png" />
        <link rel="stylesheet" href="/assets/css/all-fontawesome.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <style dangerouslySetInnerHTML={{ __html: `
          html, body {
            background-color: #ffffff;
            color: #757F95;
            margin: 0;
            padding: 0;
            font-family: 'Roboto', 'Cairo', sans-serif;
          }
          h1, h2, h3, h4, h5, h6 {
            font-family: 'Noto Serif', serif;
            color: #0F4229;
          }
          html.dark, html.dark body {
            background-color: #0d110d;
            color: #edf2ea;
          }
        ` }} />
      </Head>
      <body className="font-sans bg-background text-on-surface">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

