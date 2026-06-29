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
      <body className="min-h-full flex flex-col bg-white text-slate-dark">
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

