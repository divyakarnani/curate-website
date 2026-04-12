import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Curate | The Beauty App That Actually Knows You",
  description:
    "Overall scores, AI personalization, trusted friend ratings, and price comparison, all in one place. Join the waitlist for early access.",
  verification: {
    google: "UMbiraratzzk15JWZtvH16fzN44vRYVnMe3XtkXbExo",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="UMbiraratzzk15JWZtvH16fzN44vRYVnMe3XtkXbExo" />
      </head>
      <body className="bg-white text-ink font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
