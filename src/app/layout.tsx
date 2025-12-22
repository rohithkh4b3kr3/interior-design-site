import "./globals.css";
import { inter, interTight } from "@/lib/fonts";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import QuotePopup from "@/components/QuotePopup";

export const metadata = {
  title: "Intech Designers & Planners | Design + Build + Maintenance",
  description: "Design + Build + Maintenance Company delivering interiors, civil works, architectural planning, sports infrastructure and facility support across South India. 30+ years of experience, 500+ projects completed.",
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
        <Footer />
        <WhatsAppButton />
        <QuotePopup />
      </body>
    </html>
  );
}

