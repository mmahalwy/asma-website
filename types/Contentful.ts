import { IPickFields } from './generated/contentful';

export type Author = {
  name?: string;
  phone?: string;
  bio: string;
  title?: string;
  email?: string;
  company?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  rssUrl?: string;
  picks: IPickFields[];
  image: HeroImage;
};

export type HeroImage = {
  imageUrl: string;
  description: string;
  title: string;
};

export type BlogPost = {
  id: string;
  body: string;
  description: string;
  publishedDate: string;
  slug: string;
  tags: Array<string>;
  title: string;
  heroImage?: HeroImage;
  author?: Author;
};
