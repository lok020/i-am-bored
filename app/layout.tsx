import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "../components/Molecules/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "i-am-bored",
  description: "This is a web application designed to cure your boredom.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navs = [
    {path:"/", name: "Home"},
    {path:"/BoredAPI", name: "BoredAPI"},
  ];

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <NavBar navs={navs}/>
        <div className={"mt-2 p-3 bg-neutral-100 rounded-lg"}>{children}</div>
      </body>
    </html>
  );
}
