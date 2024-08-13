
import "./globals.css";
import Head from 'next/head';

export const metadata = {
  title: 'Shamili PU College',
  description: 'Pre University College in Udupi',
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
