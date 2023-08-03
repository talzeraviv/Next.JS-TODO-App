import Navbar from "@/components/navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next.js 13 TODO Applications",
  description: "Template by GTCoding, Created by Tal Zer-Aviv",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl m-auto p-4">
          <Navbar />
          <div className="mt-8 mb-8">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
