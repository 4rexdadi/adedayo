// Imports
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import Cursor from "../components/subComponent/cursor/Cursor";
import KeepScrolling from "../components/subComponent/keepScrolling/KeepScrolling";
import Loader from "../components/subComponent/loader/Loader";
import ScrollContainer from "../components/subComponent/scrollContainer/ScrollContainer";
import siteMetadata from "../data/siteMetaData";
import Providers from "../redux/Providers";
import "../style/GlobalStyle.scss";

export const viewport: Viewport = {
  themeColor: siteMetadata.theme,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.author}`,
  },
  description: siteMetadata.description,

  // Canonical URL - Critical for SEO
  alternates: {
    canonical: siteMetadata.siteUrl,
  },

  // Open Graph
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      {
        url: siteMetadata.socialBanner,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Enhanced robots configuration
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Twitter/X Cards
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    creator: "@forexdadi",
    images: [
      {
        url: siteMetadata.socialBanner,
        alt: siteMetadata.title,
      },
    ],
  },

  // Additional SEO fields
  authors: [{ name: siteMetadata.author, url: siteMetadata.siteUrl }],
  creator: siteMetadata.author,
  publisher: siteMetadata.author,

  // Verification tags
  verification: {
    // google: "",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  // Language and locale
  other: {
    language: siteMetadata.language,
    author: siteMetadata.author,
    "theme-color": siteMetadata.theme,
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/icons/browserconfig.xml",
  },

  icons: siteMetadata.icons,
  keywords: siteMetadata.keywords,

  // Manifest for PWA
  manifest: "/manifest.json",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        {/* Additional meta tags for better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS prefetch for social media domains */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//linkedin.com" />
        <link rel="dns-prefetch" href="//twitter.com" />
      </head>

      <body>
        <Analytics />
        <SpeedInsights />

        <Providers>
          <ScrollContainer
            options={{
              lerp: 0.1,
              duration: 1.2,
              smoothTouch: false,
              wheelMultiplier: 0.9,
            }}
          >
            <Loader />
            <Cursor />
            {children}
            <KeepScrolling />
          </ScrollContainer>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
