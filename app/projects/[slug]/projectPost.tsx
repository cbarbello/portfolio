import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const projectPosts = [
  {
    slug: "placeholder",
    title: "Placeholder",
    date: "March 15, 2023",
    content: `
      <p>Hey, I told you it was a placeholder... Check out my projects page if you'd like.</p>
    `,
    image: "/placeholder.png?height=325&width=325",
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const projectPost = projectPosts.find(
    (projectPost) => projectPost.slug === params.slug
  );

  if (!projectPost) {
    return {
      title: "Project post not found",
      description: "Project post not found",
    };
  }

  return {
    title: `${projectPost.title} | Casey Barbello's Projects`,
    description: projectPost.content.substring(0, 160).replace(/<[^>]*>/g, ""),
  };
}

export default function BlogprojectPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const projectPost = projectPosts.find(
    (projectPost) => projectPost.slug === params.slug
  );

  if (!projectPost) {
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
          {projectPost.title}
        </h1>
        <p className="mt-4 text-muted-foreground">{projectPost.date}</p>

        <div className="relative mt-8 aspect-square overflow-hidden rounded-xl">
          <Image
            src={projectPost.image || "/placeholder.png"}
            alt={projectPost.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          className="prose prose-gray dark:prose-invert mt-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: projectPost.content }}
        />
      </div>
    </div>
  );
}
