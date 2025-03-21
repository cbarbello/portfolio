import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const blogblogPosts = [
  {
    slug: "placeholder",
    title: "Placeholder",
    date: "March 15, 2023",
    content: `
      <p>Why are you here? I told you it was a placeholder. Check out my projects page if you'd like.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blogPost = blogblogPosts.find(
    (blogPost) => blogPost.slug === params.slug
  );

  if (!blogPost) {
    return {
      title: "blog post Not Found",
      description: "IDK where this is. Sorry for my UX.",
    };
  }

  return {
    title: `${blogPost.title} | Casey Barbello's Blog`,
    description: blogPost.content.substring(0, 160).replace(/<[^>]*>/g, ""),
  };
}

export default function BlogblogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const blogPost = blogblogPosts.find(
    (blogPost) => blogPost.slug === params.slug
  );

  if (!blogPost) {
    notFound();
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {blogPost.title}
        </h1>
        <p className="mt-4 text-muted-foreground">{blogPost.date}</p>

        <div className="relative mt-8 aspect-video overflow-hidden rounded-xl">
          <Image
            src={blogPost.image || "/placeholder.svg"}
            alt={blogPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          className="prose prose-gray dark:prose-invert mt-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
      </div>
    </div>
  );
}
