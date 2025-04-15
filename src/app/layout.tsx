import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <header className="mt-5 w-full md:w-[20%] lg:w-[12%] uppercase flex justify-center items-center">
          <h4
            className={`${oswald.className} font-oswald sm:text-3xl md:text-sm text-gray-100`}
          >
            <Link href="/">Wendell Costa</Link>
          </h4>
        </header>
        {children}
      </body>
    </html>
  );
}
