import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SimpleBlogCard } from '@/lib/interface';
import { client, urlFor } from '@/lib/sanity';
import { defineQuery } from 'next-sanity';
import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 30;

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-5 md:gap-4 gap-2">
      {data.map((post, index) => (
        <Card key={index} className="flex flex-col">
          <Image
            src={urlFor(post.titleImage).url() || ''}
            alt={post.title}
            width={500}
            height={500}
            className="rounded-t-lg h-[200px] w-full object-cover"
          />
          <CardContent className="mt-5 flex flex-col flex-grow">
            <h3 className="text-xl line-clamp-2 mb-4 font-bold">
              {post.title}
            </h3>
            <p className="line-clamp-5 text-md mb-6 text-gray-600 dark:text-gray-400">
              {post.smallDescription}
            </p>

            <Button className="mt-auto w-full" asChild>
              <Link href={`/blogs/${post.currentSlug}`}>Read More</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
