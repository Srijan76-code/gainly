import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { NavbarDemo } from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gainly",
  description: "Personal Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html class="dark" lang="en">
      <body className={`${inter.className} `}>

      {children}


      </body>
    </html>
    </ClerkProvider>
  );
}
