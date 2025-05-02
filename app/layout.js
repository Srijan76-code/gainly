import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { dark } from "@clerk/themes";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gainly",
  description: "Personal Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider  appearance={{ baseTheme: dark }}>
    <html class="dark" lang="en">
      <body className={`${inter.className} `}>

      {children}


      </body>
    </html>
    </ClerkProvider>
  );
}
