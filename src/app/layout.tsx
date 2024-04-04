import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactQueryProvider } from './react-query-provider'
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donation Platform",
  description: "Donation Platform",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
      <html lang="en">
        <body className={inter.className}>
            <ReactQueryProvider>{children}</ReactQueryProvider>
        </body>
      </html>
  );
}
