// Imports
import type { Metadata } from "next";
import Cursor from "../components/subComponent/cursor/Cursor";
import KeepScrolling from "../components/subComponent/keepScrolling/KeepScrolling";
import Loader from "../components/subComponent/loader/Loader";
import ScrollContainer from "../components/subComponent/scrollContainer/ScrollContainer";
import { useAppSelector } from "../hooks/storeHook";
import siteMetadata from "../data/siteMetaData";
import Providers from "../redux/Providers";
import "../style/GlobalStyle.scss";

export const metadata: Metadata = {
  const overFlow = useAppSelector((state) => state.scrollSlice.overflow);
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
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
    images: [siteMetadata.socialBanner],
  },
  themeColor: siteMetadata.theme,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={ overFlow ? "" : "lenis lenis-stopped" }>
      <Providers>
        <body>
          <ScrollContainer
            options={{
              lerp: 0.1,
              duration: 1.2,
              smoothTouch: false,
              wheelMultiplier: 0.7,
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
