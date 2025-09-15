import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Barbearia Lopes Club",
  description: "Cortes de cabelo e barba com estilo. Agende seu horário!",
  openGraph: {
    title: "Barbearia Lopes Club",
    url: "https://www.barbearialopesclub.com.br",
    siteName: "Barbearia Lopes Club",
    images: [
      {
        url: "https://www.barbearialopesclub.com.br/assets/lopesclubicon.png",
        width: 800,
        height: 600,
        alt: "Barbearia Lopes Club",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barbearia Lopes Club",
    description: "Cortes de cabelo e barba com estilo. Agende seu horário!",
    images: ["https://www.barbearialopesclub.com.br/assets/lopesclubicon.png"],
  },
};


export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased font-sans">
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
