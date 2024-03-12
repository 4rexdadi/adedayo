// Imports
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
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
       {
         url: siteMetadata.socialBanner,
      }
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner],
  },
  icons: ["/icons/favicon.ico"],
  keywords: siteMetadata.keywords,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <Providers>
        <body>
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
        </body>
      </Providers>
    </html>
  );
};

export default RootLayout;
