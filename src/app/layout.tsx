import type { Metadata } from "next";
import Head from "next/head";
import PlausibleProvider from "next-plausible";
import "./globals.css";
import { Poppins } from 'next/font/google';
import Header from "@/components/Header";
import ClientScrollbar from "@/components/ClientScrollbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  variable: '--font-poppins',
});


export const metadata: Metadata = {
  icons: {
    icon: '/favicon.png',
  },
  title: "PexelXus - Buy Airtime, Data & Share",
  description:
    "PexelXus is a Nigerian startup redefining gifting, airtime/data purchases, and social sharing with trust and simplicity.",
  keywords: [
    "PexelXus",
    "Nigeria",
    "airtime",
    "data",
    "gift friends",
    "startup",
    "donate",
  ],
  authors: [{ name: "Salihu Adamu", url: "https://getpexelxus.vercel.app" }],
  creator: "PexelXus",
  publisher: "PexelXus",
  openGraph: {
    type: "website",
    url: "https://getpexelxus.vercel.app",
    title: "PexelXus",
    description:
      "PexelXus is making gifting and social connections easier across Nigeria.",
    siteName: "PexelXus",
    images: [
      {
        url: "https://getpexelxus.vercel.app/favicon.png", // Replace with real image
        width: 1200,
        height: 630,
        alt: "PexelXus Preview",
      },
    ],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "PexelXus - Buy Airtime, Data & Share",
    description: "Support PexelXus, a Nigerian startup making digital life easier.",
    images: ["https://getpexelxus.vercel.app/favicon.png"],
    creator: "@pexelxus",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen bg-[rgba(0, 0, 0, 0)]">
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
          <ClientScrollbar>
            <Header />
            {children}
          </ClientScrollbar>
        </PlausibleProvider>
      </body>
    </html>
  );
}
