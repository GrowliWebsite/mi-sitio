import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { MDXLayoutRenderer } from 'next-contentlayer/hooks';

export const generateStaticParams = () =>
  allPosts.map((post) => ({ slug: post.slug }));

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="prose mx-auto py-24 px-4">
      <h1>{post.title}</h1>
      <p className="text-sm text-gray-500">{post.date}</p>
      <MDXLayoutRenderer code={post.body.code} components={{}} />
    </article>
  );
}
