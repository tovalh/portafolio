import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from '../components/Header'

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
    variable: "--font-space-grotesk",
    subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
    variable: "--font-jetbrains-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cristóbal Valladares — Full Stack Developer",
  description: "Full Stack Developer especializado en backend y bases de datos. Sistemas que aguantan presión real.",
  icons: {
    icon: "/images/icon.png",
  },
  openGraph: {
    title: "Cristóbal Valladares — Full Stack Developer",
    description: "Full Stack Developer especializado en backend y bases de datos. Sistemas que aguantan presión real.",
    url: "https://toval.dev",
    siteName: "toval.dev",
    images: [{ url: "/images/icon.png", width: 800, height: 800 }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cristóbal Valladares — Full Stack Developer",
    description: "Full Stack Developer especializado en backend y bases de datos. Sistemas que aguantan presión real.",
    images: ["/images/icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
          className={`${dmSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
      <Header />
        {children}
      </body>
    </html>
  );
}
