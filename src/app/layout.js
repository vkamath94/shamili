import { Header } from '@/app/Header';
import Footer from '@/app/Footer';
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: 'Shamili PU College',
  description: 'Pre University College in Udupi',
  icons: {
    icon: '/favicon.ico', // Define your favicon here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
