import Head from "next/head";
import React from "react";

export const MainHeader = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Welcome to PanEthiopia Tours, where every journey is a blend of adventure, stunning photography, and meaningful community impact, designed to deliver exceptional travel experiences."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="google-site-verification"
          content="gLBqkroRo6Dh3pgbwW-sSa_Uji931la9VQPmckuTzTY"
        />

        <meta property="og:title" content={title} />
        <meta
          property="og:description"
          content="Welcome to PanEthiopia Tours, where every journey is a blend of adventure, stunning photography, and meaningful community impact, designed to deliver exceptional travel experiences."
        />
        <meta
          name="google-site-verification"
          content="gLBqkroRo6Dh3pgbwW-sSa_Uji931la9VQPmckuTzTY"
        />
        <meta property="og:image" content="/public/favicon.ico" />
        <meta property="og:url" content="https://helenzeray.com" />
        <meta property="og:type" content="website" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
    </div>
  );
};
