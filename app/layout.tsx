import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Construction Project Management Made Easy | Project Core",
  description: "Project Core is a construction project management application that empowers contractors and handymen to easily stay on top of their projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-800 text-white min-h-screen font-sans"> {/* Set background and text color */}
        <header className="bg-gray-900 py-4 px-6 flex justify-between items-center">
          {/* <h1 className="text-xl font-bold text-white">My App Login</h1> */}
          {/* Add logo or navigation links here */}
          <img src="logo-no-background.svg" className="h-20" />
        </header>
        <main className="container mx-auto px-4 py-10">{children}</main>
        <footer className="bg-gray-900 text-center py-4 text-sm">
          Copyright &copy; {new Date().getFullYear()} My App
        </footer>
      </body>
    </html>
  );
}
