import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";
import React from "react";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontTT } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import BackTop from "@/components/backTop";

export const metadata: Metadata = {
  metadataBase: new URL('https://pablo-marte.com'),
  alternates: {
    canonical: '/',
  },
  generator: "Next.js",
  applicationName: "Pablo Marte Official Website",
  referrer: "origin-when-cross-origin",
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Pablo Marte música, Indie pop mexicano, Artista alternativo mexicano, Música indie pop, Canciones introspectivas, Pablo Marte canciones, Pablo Marte discografía, Música alternativa México, Pop alternativo México, Pablo Marte álbumes, Música suave y poética, Artista mexicano indie, Música para el alma, Pablo Marte Spotify, Conciertos Pablo Marte",
  ],
  robots: "index, follow",
  authors: [{ name: "G0rz", url: "https://leonardobecerril.dev/" }],
  creator: "Leonardo Becerril",
  publisher: "Leonardo Becerril",
  openGraph: {
    title: 'Pablo Marte Official Website - News, Music, Tours & More',
    description: 'Pablo Marte es un artista mexicano de indie pop y alternativa, con letras introspectivas y melodías suaves que evocan emociones profundas.',
    url: 'https://pablo-marte.com/',
    siteName: 'Pablo Marte Official',
    images: [
      {
        url: 'https://pablo-marte.com/images/og.JPG', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://pablo-marte.com/images/og-alt.jpg', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Pablo Marte',
      },
    ],
    videos: [
      {
        url: 'https://pablo-marte.com/videos/Galaxias.mp4', // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pablo Marte Official Website - News, Music, Tours & More',
    description: 'Pablo Marte es un artista mexicano de indie pop y alternativa, con letras introspectivas y melodías suaves que evocan emociones profundas.',
    siteId: '1226703769351548929',
    creator: '@XDeathZero',
    creatorId: '1226703769351548929',
    images: ['https://pablo-marte.com/images/og.JPG'], // Must be an absolute URL
  },
  icons: {
    icon: "/icon.ico",
    apple: '/apple-icon.png',
    shortcut: '/apple-icon.png',
  },
  manifest: 'https://pablo-marte.com/manifest.json',
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="es">
    <head>
      <link rel='apple-touch-icon' sizes='180x180' href='/apple-icon.png'/>
      <meta name="apple-mobile-web-app-title" content="Pablo Marte"/>
    </head>
    <body
        className={clsx(
            "min-h-screen bg-background font-sansSerif antialiased",
          fontTT.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="flex flex-col ">
            <Navbar />
            <main className="min-h-screen flex-grow pt-2 md:pt-10">
              {children}
            </main>
            <footer className="flex items-center justify-center py-4">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://github.com/G0rz"
                title="Developer github page"
              >
                <span className="">&#169; 2022-2025</span>
                <p className="text-primary">G0rz.</p>
                <span className="">All rights reserved.</span>
              </Link>
            </footer>
            <BackTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}
