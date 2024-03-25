import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Provider from "@/provider/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donation Platform",
  description: "Donation Platform",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en">
        <body className={inter.className}>
            <Provider>
                {children}
            </Provider>
        </body>
      </html>
  );
}
