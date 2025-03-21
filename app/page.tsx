import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { BlogPostCard } from "@/components/blog-post-card";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Casey Barbello
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Fullstack Developer
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button variant="outline" asChild>
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
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                A selection of my recent work and personal projects.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <ProjectCard
              title="E-commerce Website"
              description="A fully responsive e-commerce platform built with Next.js and Stripe."
              image="/placeholder.svg?height=300&width=400"
              tags={["Next.js", "Stripe", "Tailwind CSS"]}
              link="/projects/ecommerce"
            />
            <ProjectCard
              title="Task Management App"
              description="A productivity app with drag-and-drop functionality and user authentication."
              image="/placeholder.svg?height=300&width=400"
              tags={["React", "Firebase", "TypeScript"]}
              link="/projects/task-app"
            />
            <ProjectCard
              title="Portfolio Website"
              description="A personal portfolio website with dark mode and blog functionality."
              image="/placeholder.svg?height=300&width=400"
              tags={["Next.js", "Tailwind CSS", "MDX"]}
              link="/projects/portfolio"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/projects" className="flex items-center">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Latest from the Blog
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Thoughts, ideas, and insights on web development, design, and
                technology.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
            <BlogPostCard
              title="The Future of React and Next.js"
              excerpt="Exploring the latest features and improvements in React 18 and Next.js 13."
              date="March 15, 2023"
              image="/placeholder.svg?height=200&width=300"
              slug="/blog/future-of-react"
            />
            <BlogPostCard
              title="Designing for Accessibility"
              excerpt="Best practices for creating inclusive web experiences that work for everyone."
              date="February 28, 2023"
              image="/placeholder.svg?height=200&width=300"
              slug="/blog/designing-for-accessibility"
            />
            <BlogPostCard
              title="Getting Started with TypeScript"
              excerpt="A beginner's guide to using TypeScript in your JavaScript projects."
              date="January 12, 2023"
              image="/placeholder.svg?height=200&width=300"
              slug="/blog/typescript-guide"
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/blog" className="flex items-center">
                Read All Posts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
