import React from "react";
import Head from "next/head";
import { SEO } from "../../typings";
import { urlFor } from "../../sanity";

const SEO = ({ seo }: { seo: SEO }) => {
  const socialTags = (seo: SEO) => {
    const metaTags = [
      { name: "og:title", content: seo.title },

      { name: "og:type", content: seo.openGraphType },
      { name: "og:url", content: seo.url },
      {
        name: "og:image",
        content: seo.image
          ? urlFor(seo.image).url()
          : "/images/Borhan-Saflo-Logo.png",
      },
      { name: "og:image:width", content: "800" },
      { name: "og:image:height", content: "800" },
      { name: "og:image:alt", content: seo.title },
      { name: "og:description", content: seo.description },
      { name: "og:site_name", content: seo.title },
      { name: "twitter:title", content: seo.title },
      { name: "twitter:description", content: seo.description },
      {
        name: "twitter:image:src",
        content: seo.image
          ? urlFor(seo.image).url()
          : "/images/Borhan-Saflo-Logo.png",
      },
      { name: "twitter:card", content: "app" },
      { name: "theme-color", content: seo.themeColor },
    ];
    return metaTags;
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta itemProp="name" content={seo.title} />
      <meta itemProp="description" content={seo.description} />

      <meta
        itemProp="image"
        content={
          seo.image ? urlFor(seo.image).url() : "/images/Borhan-Saflo-Logo.png"
        }
      />
      {socialTags(seo).map(({ name, content }) => {
        return <meta key={name} name={name} content={content} />;
      })}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </Head>
  );
};

export default SEO;
