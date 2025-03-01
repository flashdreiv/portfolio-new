import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DotPattern } from "./components/dotbg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dreivan Orprecio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        <DotPattern width={26} height={26} glow={true} className="opacity-50" />
        {children}
      </body>
    </html>
  );
}
