
import Header from "@/app/Header";
import "./globals.css";
import Head from 'next/head';
import Footer from "@/app/Footer";


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
      <body>
          <Header/>
            {children}
          <Footer/>
      </body>
    </html>
  );
}
