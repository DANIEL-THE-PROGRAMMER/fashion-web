import "./globals.css";
import React from "react";
import { Poppins } from "next/font/google";
import { NavBar } from "./components/navbar";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "900"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        <NavBar />
        {children}
        </body>
    </html>
  );
}
