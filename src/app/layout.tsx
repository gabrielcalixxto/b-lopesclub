import "./globals.css";
import type { Metadata, Viewport } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Barbearia Lopes Club",
  description: "Cortes de cabelo e barba com estilo. Agende seu horário!",
  openGraph: {
    title: "Barbearia Lopes Club",
    description: "Cortes de cabelo e barba com estilo. Agende seu horário!",
    url: "https://www.barbearialopesclub.com.br",
    siteName: "Barbearia Lopes Club",
    images: [
      {
        url: "https://www.barbearialopesclub.com.br/preview.jpg", // coloque aqui uma imagem hospedada no seu site
        width: 1200,
        height: 630,
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
    images: ["https://www.barbearialopesclub.com.br/preview.jpg"],
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
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
