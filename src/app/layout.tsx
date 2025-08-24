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
    "startup Nigeria", 
    "gift platform", 
    "social gifting app"
  ],
  authors: [{ name: "Salihu Adamu", url: "https://pexelxus.com" }],
  creator: "PexelXus",
  publisher: "PexelXus",
  openGraph: {
    type: "website",
    url: "https://pexelxus.com",
    title: "PexelXus",
    description:
      "Gift. Share. Connect. Pexelxus is here for you.",
    siteName: "PexelXus",
    images: [
      {
        url: "https://pexelxus.com/favicon.png",
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
    images: ["https://pexelxus.com/favicon.png"],
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
        <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Pexelxus",
          "url": "https://pexelxus.com",
          "logo": "https://pexelxus.com/favicon.png",
          "sameAs": [
            "https://twitter.com/pexelxus",
            "https://linkedin.com/company/pexelxus",
            "https://instagram.com/pexelxus"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "email": "support@pexelxus.com",
            "telephone": "+2348000000000",
            "areaServed": "NG",
            "availableLanguage": ["English"]
          }
        }
        `}
        </script>
      </Head>
      <body
        className={`${poppins.variable} antialiased`}
      > 
        <PlausibleProvider
          domain="pexelxus.com"
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
