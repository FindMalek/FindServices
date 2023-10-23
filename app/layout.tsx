import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/navigation/Header";
import Background from "@/components/overall/Background";

import { Toaster } from "@/components/ui/Toaster";

import type { Metadata } from "next";
import { poppins } from "@/lib/fonts";

export const metadata: Metadata = {
  title:
    "FindServices | Malek Gara-Hellal - Web Developer, Graphic Designer, and Writer.",
  description:
    "FindServices | Find services near you, anywhere in the world. This is me Malek Gara-Hellal and I am a full-stack developer. I am also a graphic designer and a writer.",
  applicationName: "https://findservices.tech"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <meta
        name="google-site-verification"
        content="DUd_5XyOU-5LOWSU2CiGLn0U2oEzgGAFJioIy5vl_2o"
      />
      <meta property="og:image" content="/thumbnail.png" />
      <meta property="og:image:width" content="1280" />
      <meta property="og:image:height" content="720" />

      <body className={poppins.className}>
        <Header />

        <div className="mx-auto lg:max-w-4xl md:max-w-2xl max-w-lg xs:max-w-md p-4 pt-8 sm:pt-10 md:pt-10 lg:pl-16">
          {children}
        </div>
        <Toaster />

        <Background />
        <Analytics />
      </body>
    </html>
  );
}
