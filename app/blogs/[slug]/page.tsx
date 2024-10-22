import { DetailedBlog } from '@/lib/interface';
import { client, urlFor } from '@/lib/sanity';
import { defineQuery, PortableText } from 'next-sanity';
import Image from 'next/image';

export const revalidate = 30;

async function fetchBlog(slug: string) {
  const query = defineQuery(`
    * [_type == 'blog' &&
        slug.current == $slug
    ] {
      'currentSlug': slug.current,
      title,
      content,
      titleImage    
    } [0]
    `);
  const blog = await client.fetch(query, { slug });
  return blog;
}

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog: DetailedBlog = await fetchBlog(params.slug);
  return (
    <div className="mt-8 px-2">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Anwar Hussaini - Blog
        </span>
        <span className="block mt-2 text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {blog.title}
        </span>
      </h1>
      <Image
        src={urlFor(blog.titleImage).url() || ''}
        alt={blog.title}
        width={500}
        height={500}
        className="w-full mt-4 rounded-lg shadow border h-60 object-cover"
        priority
      />
      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary">
        <PortableText value={blog.content} />
      </div>
    </div>
  );
}
