import { BlogPostCard } from "@/components/blog-post-card";

// This would typically come from a database, CMS, or MDX files
const posts = [
  {
    id: 1,
    title: "The Future of React and Next.js",
    excerpt:
      "Exploring the latest features and improvements in React 18 and Next.js 13.",
    date: "March 15, 2023",
    image: "/placeholder.svg?height=200&width=300",
    slug: "/blog/future-of-react",
  },
  {
    id: 2,
    title: "Designing for Accessibility",
    excerpt:
      "Best practices for creating inclusive web experiences that work for everyone.",
    date: "February 28, 2023",
    image: "/placeholder.svg?height=200&width=300",
    slug: "/blog/designing-for-accessibility",
  },
  {
    id: 3,
    title: "Getting Started with TypeScript",
    excerpt:
      "A beginner's guide to using TypeScript in your JavaScript projects.",
    date: "January 12, 2023",
    image: "/placeholder.svg?height=200&width=300",
    slug: "/blog/typescript-guide",
  },
  {
    id: 4,
    title: "Building a Design System",
    excerpt:
      "How to create a consistent design system for your web applications.",
    date: "December 5, 2022",
    image: "/placeholder.svg?height=200&width=300",
    slug: "/blog/design-system",
  },
  {
    id: 5,
    title: "Optimizing Website Performance",
    excerpt:
      "Techniques for improving load times and user experience on your website.",
    date: "November 18, 2022",
    image: "/placeholder.svg?height=200&width=300",
    slug: "/blog/website-performance",
  },
  {
    id: 6,
    title: "Introduction to Web Animation",
    excerpt: "Learn how to add engaging animations to your web projects.",
    date: "October 22, 2022",
    image: "/placeholder.svg?height=200&width=300",
    slug: "/blog/web-animation",
  },
];

export const metadata = {
  title: "Blog | Casey Barbello",
  description:
    "Articles and insights on web development, design, and technology by Casey Barbello.",
};

export default function BlogPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Thoughts, ideas, and insights on web development, design, and
          technology.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
