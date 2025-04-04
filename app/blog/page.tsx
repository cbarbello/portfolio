import { BlogPostCard } from "@/app/blog/blog-post-card";

export const blogPosts = [
  {
    id: 1,
    title: "Placeholder Title",
    excerpt: "It's a placeholder. Don't click on it.",
    date: "March 15, 2023",
    image: "/placeholder.png?height=325&width=325",
    slug: "/blog/placeholder",
  },
];

export const metadata = {
  title: "Blog | Casey Barbello",
  description: "My blog.",
};

export default function BlogPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Blog
        </h1>
        <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          I have opinions and stuff.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((blogPost) => (
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
      </div>
    </div>
  );
}
