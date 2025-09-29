import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hi, Im Vibby Febriyan Sakti",
  description:
    "Transitioning from Warehouse & logistics and administration to full stack development, I merge real world problem solving with technical skills in data and web technologies.",
  icons: {
    icon: [{ url: "/v-code.png?v=2", sizes: "32x32", type: "image/png" }],
    shortcut: [{ url: "/v-code.png?v=2", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/v-code.png?v=2", sizes: "120x120", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
