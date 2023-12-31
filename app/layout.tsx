import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex items-center">
          <Navbar />
          <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
