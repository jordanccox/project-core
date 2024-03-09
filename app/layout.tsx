import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Logo from '../public/logo-no-background.svg';
import TanstackProvider from "@/providers/tanstackprovider";

export const metadata: Metadata = {
  title: "Ignite your productivity | Project Core",
  description: "Project Core is a construction management application that empowers contractors and handymen to easily stay on top of their projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-800 text-white font-sans">

      {/* Set background and text color */}
        <header className="bg-gray-900 py-4 px-6 flex justify-between items-center">
          <a href="/"><Image src={Logo} className="h-16 w-72 sm:w-[350px] md:w-[400px] sm:h-20 md:h-24" alt="Logo" /></a>
        </header>
        <main className="container mx-auto px-4 py-10 flex-grow">
          <TanstackProvider>
            {children}
          </TanstackProvider>
          </main>
        <footer className="bg-gray-900 text-center py-4 text-sm">
         &copy; {new Date().getFullYear()} Project Core. All Rights Reserved. Developed by <a href="https://jordancox.dev/" target="_blank" className="font-medium hover:underline">JordanCox.dev</a>.
        </footer>
      </body>
    </html>
  );
}
