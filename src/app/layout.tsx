import type { Metadata } from "next";
import Session from "./context/Session";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@src/components/component/navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fit Panda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Session>
        <body className={inter.className}>
          <Navigation></Navigation>
          {children}
        </body>
      </Session>
    </html>
  );
}
