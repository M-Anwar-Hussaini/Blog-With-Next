import { createClient } from 'next-sanity';

export const client = createClient({
  apiVersion: '2024-10-22',
  dataset: 'production',
  useCdn: false,
  projectId: 'h5ggimcq',
});
