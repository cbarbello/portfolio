import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projectPosts } from "@/app/projects/project-posts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projectPost = projectPosts.find(
    (projectPost) => projectPost.slug === slug
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

export default async function ProjectPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const projectPost = projectPosts.find(
    (projectPost) => projectPost.slug === slug
  );

  if (!projectPost) {
    notFound();
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/projects"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to projects
        </Link>

        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          {projectPost.title}
        </h1>

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
