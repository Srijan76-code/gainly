import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Gainly",
  description: "Personal Finance Platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* header */}
        <Header/>
        <main className="min-h-screen">
        {children}
        </main>

        {/* footer */}
        <footer className="" >
          <div className="container mx-auto text-center" >
            <p className="" >Welcome to Gainly</p>
          </div>
        </footer>
      </body>
    </html>
    </ClerkProvider>
  );
}
