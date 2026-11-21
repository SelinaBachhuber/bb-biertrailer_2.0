import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: "BB's Biertrailer | Ausschankwagen & mobile Zapfanlage mieten",
    template: "%s | BB's Biertrailer",
  },
  description:
    "Ausschankwagen mit Stehtischen oder mobile Zapfanlage in Dietfurt an der Altmühl mieten. Flexibel, persönlich und unkompliziert anfragen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}