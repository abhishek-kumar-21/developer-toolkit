import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Developer Toolkit",
  description: "A powerful developer toolkit with multiple essential tools to streamline your workflow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={`${inter.className} antialiased min-h-screen flex flex-col dark:bg-gray-900 bg-gray-100`}>
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
