import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavbarSection from "./components/NavbarSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IPBroker - Despacho Aduanal",
  description: "Soluciones integrales para tus operaciones de comercio internacional",
  icons: {
    icon: '/images/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarSection />
        {children}
      </body>
    </html>
  );
}
