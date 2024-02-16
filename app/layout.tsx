import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"]});
const newsreader = Newsreader({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Yun's Portfolio",
  description: "This is Yun's Portfolio.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={newsreader.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
