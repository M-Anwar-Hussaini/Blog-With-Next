import { SimpleBlogCard } from '@/lib/interface';
import { client } from '@/lib/sanity';
import { defineQuery } from 'next-sanity';

async function fetchData() {
  const query = defineQuery(`
      *[_type == 'blog'] | order(createaAt desc) {
      title,
      smallDescription,
      'currentSlug': slug.current,
      titleImage
      }
    `);
  const data: SimpleBlogCard[] = await client.fetch(query);
  return data;
}

export default async function Home() {
  const data = await fetchData();
  console.log(data);
  return <>here some another text</>;
}
