import type { Metadata } from "next";
import Head from "next/head";
import PlausibleProvider from "next-plausible"
import "./globals.css";
import { Poppins } from 'next/font/google';
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose weights you need
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
  },
  title: "PexelXus | Nigeria's Social—VTU Super App",
  description: "Chat, connect, and buy airtime/data instantly—all in one app. Join the waitlist today!",
  keywords: ["VTU", "Nigeria social app", "buy airtime online", "PexelXus", "Naija fintech"],
  openGraph: {
    title: "PexelXus: Social meets VTU",
    description: "No more switching between Whatsapp and Opay. Coming soon to Nigeria!",
    url: "https://getpexelxus.vercel.app",
    siteName: "Pexelxus",
    images: [
      {
        url: "https://getpexelxus.com.og-image.png",
        width: 1200,
        height: 630,
        alt: "PexelXus App Preview",
      },
    ],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PexelXus | Nigeria's All—in—One App",
    description: "Join 5,000+ Nigerians on our waitlist",
    images: ["https://getpexelxus.com/twitter-card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <PlausibleProvider
          domain="getpexelxus.vercel.app"
          trackOutboundLinks={true}
          enabled={process.env.NODE_ENV === 'production'}
        >
        <Header />
          {children}
        </PlausibleProvider>
      </body>
    </html>
  );
}
