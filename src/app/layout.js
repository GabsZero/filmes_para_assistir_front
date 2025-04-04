import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

require('dotenv').config()

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="bg-gray-800">
          <div className="mx-auto max-w-2xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link href="/" className="rounded-md px-3 py-2 text-lg font-medium text-white hover:bg-gray-700 hover:text-white" aria-current="page">Home</Link>
                    <Link href="/filmes" className="rounded-md px-3 py-2 text-lg font-medium text-white hover:bg-gray-700 hover:text-white" aria-current="page">Novo filme</Link>
                    <Link href="/filmes_assistidos" className="rounded-md px-3 py-2 text-lg font-medium text-white hover:bg-gray-700 hover:text-white" aria-current="page">Filmes assistidos</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
