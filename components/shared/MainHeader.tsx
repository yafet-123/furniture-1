import Head from 'next/head';
import React from 'react';
import { HeaderTitle } from '../../types/types';

export const MainHeader: React.FC<HeaderTitle> = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Ecotravel Ethiopia Tours and Car Rental offers you a complete travel experience with tailor-made sustainable adventures and convenient car rental services across Ethiopia."
        />
        <meta
          name="google-site-verification"
          content="H-AxPRZzpAzAnZHr9drTO9man6jLDHsQKyf7CumQ8as"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        <meta
          property="og:title"
          content={`Ecotravel Ethiopia Tours and Car Rental : ${title} `}
        />
        <meta
          property="og:description"
          content="Ecotravel Ethiopia Tours and Car Rental offers you a complete travel experience with tailor-made sustainable adventures and convenient car rental services across Ethiopia."
        />
        <meta property="og:image" content="/public/logo.png" />
        <meta property="og:url" content="https://ecotravelethiopia.com" />
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
