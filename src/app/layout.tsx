import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from '@/app/components'
import React from 'react'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Sprowadzanie Samochodów z Niemiec - Bartek Auta",
  description: "Profesjonalne sprowadzanie samochodów z Niemiec. Gwarantujemy pewne auta, wsparcie przy formalnościach oraz kompleksową obsługę. Zaufaj ekspertom!",
  keywords: "sprowadzanie samochodów z Niemiec, import aut z Niemiec, używane auta Niemcy, auta na zamówienie, niemieckie samochody, Bartek Auta",
  authors: [
    {
      name: "Damian Turek",
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
