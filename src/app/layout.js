import "./globals.css";
import { Inter } from "next/font/google";
import PageTransition from "@/components/pageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Your Name | Portfolio",
  description: "Personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
