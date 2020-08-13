import { NextSeoProps } from 'next-seo';

export const config = {
  siteName: 'Asma Khalifa',
  siteDescription: 'A multimedia designer located in Toronto, Canada',
  defaultPageTitle: 'Asma Khalifa',
  baseUrl: 'twitter.com',
  websiteLogo: null,
  twitterHandle: '@',
  twitterCardType: 'twitter',
};

type SeoConfigType = {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  images?: Array<{ url: string; width?: number; height?: number; alt?: string }>;
};

export function createSEOConfig({
  title,
  description,
  canonicalUrl,
  images,
}: SeoConfigType = {}): NextSeoProps {
  const seoTitle = title || config.defaultPageTitle;
  const setDescription = description ?? config.siteDescription;

  return {
    title: seoTitle,
    description: setDescription,
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl,
      title: seoTitle,
      description: setDescription,
      images: images ?? [
        {
          url: config.websiteLogo,
          width: 280,
          height: 280,
          alt: config.siteName,
        },
      ],
      site_name: config.siteName,
    },
    twitter: {
      handle: config.twitterHandle,
      site: config.twitterHandle,
      cardType: config.twitterCardType,
    },
  }; // defaultImageHeight: 500, // defaultImageWidth: 500,
}
