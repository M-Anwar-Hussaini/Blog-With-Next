import { createClient } from 'next-sanity';
import ImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  apiVersion: '2024-10-22',
  dataset: 'production',
  useCdn: false,
  projectId: 'h5ggimcq',
});

export function urlFor(source: SanityImageSource) {
  return ImageUrlBuilder(client).image(source);
}
