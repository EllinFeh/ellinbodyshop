import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ellin Bodyshop",
  description: "Loja de suplementos",
  icons:{
    icon: './icon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className=" scroll-smooth" lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
