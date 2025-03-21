import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// This would typically come from a database, CMS, or MDX files
const posts = [
  {
    slug: "future-of-react",
    title: "The Future of React and Next.js",
    date: "March 15, 2023",
    content: `
      <p>React has come a long way since its initial release in 2013. With the introduction of React 18 and Next.js 13, we're seeing significant improvements in performance, developer experience, and capabilities.</p>
      
      <h2>React 18 Highlights</h2>
      <p>React 18 introduces several new features that improve the performance and user experience of React applications:</p>
      <ul>
        <li>Concurrent Rendering: Allows React to prepare multiple versions of the UI at the same time.</li>
        <li>Automatic Batching: Reduces the number of re-renders by grouping state updates.</li>
        <li>Transitions: A new API for distinguishing between urgent and non-urgent updates.</li>
        <li>Suspense Improvements: Better support for data fetching and code splitting.</li>
      </ul>
      
      <h2>Next.js 13 and the App Router</h2>
      <p>Next.js 13 introduces the App Router, a new paradigm for building Next.js applications:</p>
      <ul>
        <li>Server Components: Render components on the server for improved performance.</li>
        <li>Streaming: Progressively send UI from the server to the client.</li>
        <li>Nested Layouts: Create nested UI that preserves state across navigations.</li>
        <li>Simplified Data Fetching: Fetch data directly in components.</li>
      </ul>
      
      <p>These advancements are making React and Next.js more powerful and easier to use than ever before. As these technologies continue to evolve, we can expect even more improvements in the future.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    slug: "designing-for-accessibility",
    title: "Designing for Accessibility",
    date: "February 28, 2023",
    content: `
      <p>Accessibility is not just a nice-to-have feature; it's a fundamental aspect of good web design. By creating accessible websites, we ensure that everyone, regardless of their abilities, can use and enjoy the web.</p>
      
      <h2>Key Principles of Accessible Design</h2>
      <p>Here are some essential principles to follow when designing for accessibility:</p>
      <ul>
        <li>Perceivable: Information and user interface components must be presentable to users in ways they can perceive.</li>
        <li>Operable: User interface components and navigation must be operable.</li>
        <li>Understandable: Information and the operation of the user interface must be understandable.</li>
        <li>Robust: Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.</li>
      </ul>
      
      <h2>Practical Tips for Accessible Web Design</h2>
      <ul>
        <li>Use semantic HTML to provide meaning and structure to your content.</li>
        <li>Ensure sufficient color contrast between text and background.</li>
        <li>Provide text alternatives for non-text content like images.</li>
        <li>Make all functionality available from a keyboard.</li>
        <li>Create designs that can adapt to different viewport sizes and zoom levels.</li>
        <li>Use ARIA attributes when necessary to enhance accessibility.</li>
        <li>Test your website with screen readers and other assistive technologies.</li>
      </ul>
      
      <p>By incorporating these principles and practices into your design process, you can create web experiences that are accessible to everyone.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
  },
  {
    slug: "typescript-guide",
    title: "Getting Started with TypeScript",
    date: "January 12, 2023",
    content: `
      <p>TypeScript is a superset of JavaScript that adds static type definitions. It helps catch errors early in the development process and provides better tooling and documentation for your code.</p>
      
      <h2>Why Use TypeScript?</h2>
      <p>TypeScript offers several advantages over plain JavaScript:</p>
      <ul>
        <li>Static typing: Catch type-related errors at compile time rather than runtime.</li>
        <li>Better IDE support: Get better code completion, navigation, and refactoring tools.</li>
        <li>Enhanced readability: Types serve as documentation for your code.</li>
        <li>Safer refactoring: The compiler will catch many errors when you change your code.</li>
        <li>Gradual adoption: You can add TypeScript to an existing JavaScript project incrementally.</li>
      </ul>
      
      <h2>Getting Started with TypeScript</h2>
      <p>Here's how to start using TypeScript in your projects:</p>
      <ol>
        <li>Install TypeScript: <code>npm install -g typescript</code></li>
        <li>Create a tsconfig.json file: <code>tsc --init</code></li>
        <li>Start writing TypeScript: Create files with the .ts extension.</li>
        <li>Compile your code: <code>tsc</code></li>
      </ol>
      
      <h2>Basic TypeScript Examples</h2>
      <pre><code>// Basic types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];

// Functions with type annotations
function add(a: number, b: number): number {
  return a + b;
}

// Interfaces
interface User {
  id: number;
  name: string;
  email?: string; // Optional property
}

// Using the interface
const user: User = {
  id: 1,
  name: "Casey Barbello"
};
</code></pre>
      
      <p>TypeScript is a powerful tool that can help you write more robust and maintainable code. By investing time in learning TypeScript, you'll become a more effective developer.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Casey Barbello's Blog`,
    description: post.content.substring(0, 160).replace(/<[^>]*>/g, ""),
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((post) => post.slug === params.slug);

  if (!post) {
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
          {post.title}
        </h1>
        <p className="mt-4 text-muted-foreground">{post.date}</p>

        <div className="relative mt-8 aspect-video overflow-hidden rounded-xl">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div
          className="prose prose-gray dark:prose-invert mt-8 max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  );
}
