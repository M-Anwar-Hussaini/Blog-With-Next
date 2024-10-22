import { Any } from 'next-sanity';

export interface SimpleBlogCard {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: object;
}

export interface DetailedBlog {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: object;
  content: Any;
}
