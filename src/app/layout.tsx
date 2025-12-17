import "./globals.css";
import { inter, interTight } from "@/lib/fonts";
import Navbar from "@/components/navbar/Navbar";

export const metadata = {
  title: "Interior Design Studio | Premium Architecture & Design",
  description: "Discover modern interior design with our premium architecture and AI-powered design solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interTight.variable} bg-[#efefec] text-black antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}

