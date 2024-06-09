import type { Metadata } from "next";
import "./globals.css";
import NavigationBar from "@/components/NavigationBar";
import Head from "next/head";
import SiteFooter from "@/components/SiteFooter";
import { GridPattern } from "@/components/GridPatern";
import { MotionConfig, useReducedMotion } from "framer-motion";

export const metadata: Metadata = {
  title: {
    template: '%s - Catholic Web Hosting',
    default: 'Catholic Web Hosting - for catholics, by catholics.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Head>
      <body className="font-fira-sans bg-bg-main">
        <div className="relative z-0">
          <GridPattern />
        </div>
        <div className="relative z-10 flex-grow">
          <NavigationBar />
          {children}
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
