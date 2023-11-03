"use client";
import "./globals.css";
import { Providers } from "./Providers";
import NavBar from "@/components/NavBar/NavBar";
import { GeistSans, GeistMono } from "geist/font";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const htmlClasses = `light`;
  return (
    <html lang="en" className={htmlClasses}>
      <body className="container m-auto grid min-h-screen grid-rows-[1fr] px-4">
        <main className="py-8">
          <Providers>
            <NavBar />
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
