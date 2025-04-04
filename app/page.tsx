import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/app/projects/project-card";
import { BlogPostCard } from "@/app/blog/blog-post-card";
import { projects } from "./projects/page";
import { blogPosts } from "./blog/page";
import type { Metadata } from "next";

const featuredProjectIds = new Set([1, 2, 4]);
const featuredProjects = projects.filter((project) =>
  featuredProjectIds.has(project.id)
);

const featuredBlogPostIds = new Set([1]);
const featuredBlogPosts = blogPosts.filter((blogPost) =>
  featuredBlogPostIds.has(blogPost.id)
);

export const metadata: Metadata = {
  title: "Casey Barbello's Portfolio",
};

export default function HomePage() {
  return (
    <>
      <GoogleAnalytics gaId="G-KSCWGZC3DE" />
      <link rel="icon" href="/favicon.ico" />
      <div className="flex flex-col min-h-screen">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-12 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1>Casey Barbello</h1>
                <h2 className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Senior Full Stack Software Engineer
                </h2>
              </div>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {"(This site is under construction)"}
              </p>
              <div className="space-x-4">
                <Button asChild variant="outline">
                  <Link
                    href="https://github.com/cbarbello/portfolio"
                    target="_blank"
                  >
                    Source Code
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Projects
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  slug={project.slug}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/projects" className="flex items-center">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Featured Blog Posts
                </h2>
              </div>
              {featuredBlogPosts.map((blogPost) => (
                <BlogPostCard
                  key={blogPost.id}
                  title={blogPost.title}
                  excerpt={blogPost.excerpt}
                  date={blogPost.date}
                  image={blogPost.image}
                  slug={blogPost.slug}
                />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/blog" className="flex items-center">
                  Read All Posts
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
