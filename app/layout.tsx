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
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "Pablo Marte música, Indie pop mexicano, Artista alternativo mexicano, Música indie pop, Canciones introspectivas, Pablo Marte canciones, Pablo Marte discografía, Música alternativa México, Pop alternativo México, Pablo Marte álbumes, Música suave y poética, Artista mexicano indie, Música para el alma, Pablo Marte Spotify, Conciertos Pablo Marte",
  robots: "index, follow",
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
        <link href="/app/icon?<generated>" rel="icon" sizes="32x32" type="image/png" />
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
