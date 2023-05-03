import "@/app/styles/globals.scss";
import { getMeta } from "@/sanity/sanity-utils";
import { Metadata } from "next";
import Analytics from "./components/Analytics";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Analytics />
      <body>{children}</body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const meta = await getMeta();
  return {
    title: meta.title,
    description: meta.description,
    icons: {
      icon: {
        url: "/favicon.ico",
      },
      shortcut: { url: "/favicon.ico" },
      apple: { url: "/apple-touch-icon.png", type: "image/png" },
    },
    manifest: "/site.webmanifest",
    openGraph: {
      title: meta.title,
      description: meta.description,
      siteName: meta.siteName,
      type: meta.openGraphType,
      locale: "en-US",
      url: meta.url,
      images: [
        {
          url: meta.image,
          width: 800,
          height: 800,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      title: meta.title,
      description: meta.description,
      card: "app",
      app: {
        name: meta.siteName,
        id: {
          iphone: "twitter_app://iphone",
          ipad: "twitter_app://ipad",
          googleplay: "twitter_app://googleplay",
        },
        url: {
          iphone: "twitter_app://iphone",
          ipad: "twitter_app://ipad",
        },
      },
      images: {
        url: meta.image,
        alt: meta.title,
      },
    },
    themeColor: meta.themeColor,
  };
}

export const revalidate = 3600;
