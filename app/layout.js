import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Developer Toolkit",
  description: "A powerful developer toolkit with multiple essential tools to streamline your workflow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col dark:bg-gray-900 bg-gray-100`}>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
