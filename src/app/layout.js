import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Raymond Cleaning Services | Exterior Cleaning Services Essex",
  description: "Aaron's Raymond Cleaning Services is Essex's premier exterior cleaning provider. Professional, insured window cleaning, gutter clearance, pressure washing, soft washing, and soffits. Think Clean.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-dark pb-[76px] md:pb-0">
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />

        {/* Sticky Mobile Call CTA Bar */}
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-primary border-t-[3px] border-accent text-white py-3.5 px-4 text-center shadow-2xl md:hidden">
          <a href="tel:07123456781" className="block active:scale-95 transition-transform duration-150">
            <span className="block text-[11px] font-black uppercase text-accent tracking-widest leading-none">24/7 Service & Quotes</span>
            <span className="block text-2xl font-black tracking-tight mt-1 text-white">07123 456781</span>
          </a>
        </div>
      </body>
    </html>
  );
}

