import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "About | Casey Barbello",
  description: "Learn more about Casey Barbello, a Full-Stack developer.",
};

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Casey Barbello"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Hi, I'm Casey Barbello, a full-stack developer with with over 8
              years of experience working across the stack. I left my previous
              career at Meta to pursue my hobbies and find a position that
              better aligns with my interests.
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              My backend specialties are Python, Node, SQL, and Postgress. My
              frontend specialties are React, Next.js, TypeScript. I'm a curious
              person by nature, so I'm passionate about learning new things,
              deep-diving into complex problems, and solving bottlenecks. I can
              also work across XFN pillars and do whatever is necessary to get a
              a project over the line whenever business needs require it.
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              I also have a hardware side to me that stated when I was a child
              (yes, I dumbster dove for electronics and took them apart). I now
              build whatever comes to my mind when I have the time.
            </p>
            <h2 className="mt-8 text-2xl font-bold">Skills</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-gray-500 dark:text-gray-400">
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>Accessibility</li>
              <li>Performance Optimization</li>
              <li>Git & GitHub</li>
            </ul>
            <div className="mt-8">
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="mt-6 space-y-8">
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-bold">Senior Frontend Developer</h3>
              <p className="text-muted-foreground">
                Tech Company Inc. • 2021 - Present
              </p>
              <p className="mt-2">
                Lead frontend development for multiple projects, mentored junior
                developers, and implemented best practices for accessibility and
                performance.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-bold">Frontend Developer</h3>
              <p className="text-muted-foreground">
                Digital Agency XYZ • 2018 - 2021
              </p>
              <p className="mt-2">
                Developed responsive websites and web applications for various
                clients, focusing on clean code and user experience.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-bold">UI/UX Designer</h3>
              <p className="text-muted-foreground">
                Creative Studio ABC • 2016 - 2018
              </p>
              <p className="mt-2">
                Created user interfaces and experiences for web and mobile
                applications, conducted user research, and developed design
                systems.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="mt-6 space-y-8">
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-bold">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-muted-foreground">
                University of Technology • 2012 - 2016
              </p>
              <p className="mt-2">
                Specialized in web development and human-computer interaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
