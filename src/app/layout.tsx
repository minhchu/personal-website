import "./globals.css";
import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import { Providers } from "./providers";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Chu Ngoc Minh | About",
  description: "Software Engineer & Systems Enthusiast",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={newsreader.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
