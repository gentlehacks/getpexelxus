import type { Metadata } from "next";
import Head from "next/head";
import PlausibleProvider from "next-plausible"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        <script defer data-domain="getpexelxus.vercel.app" src="https://plausible.io/js/script.hash.outbound-links.pageview-props.tagged-events.js"></script>
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PlausibleProvider
          domain="getpexelxus.vercel.app"
          customDomain="https://analytics.getpexelxus.vercel.app"
          trackOutboundLinks={true}
          enabled={process.env.NODE_ENV === 'production'}
        >
          {children}
        </PlausibleProvider>
      </body>
    </html>
  );
}
