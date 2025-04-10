import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/app/projects/project-card";
import type { Metadata } from "next";
import { projectPosts } from "./projects/project-posts";

const featuredProjectIds = new Set([1, 2, 3]);
const featuredProjects = projectPosts.filter((projectPost) =>
  featuredProjectIds.has(projectPost.id)
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
                <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl">
                  Casey Barbello
                </h1>
                <h2 className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Senior Full Stack Software Engineer
                </h2>
              </div>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                {"(This site is under construction)"}
              </p>
              <div className="space-x-4">
                <Button variant="outline">
                  <Link
                    href="https://github.com/cbarbello/portfolio"
                    target="_blank"
                    className="hover:underline"
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
              {featuredProjects.map(
                ({ id, title, description, image, tags, slug }) => (
                  <ProjectCard
                    key={id}
                    title={title}
                    description={description}
                    image={image}
                    tags={tags}
                    slug={slug}
                  />
                )
              )}
            </div>
            <div className="container mx-auto mt-8 flex justify-center">
              <Button variant="outline">
                <Link href="/projects" className="flex items-center">
                  View All Projects
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
