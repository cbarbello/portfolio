import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "About | Casey Barbello",
  description: "Learn more about me.",
};

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src="/profile-picture.jpg"
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
              Hi, I'm Casey Barbello, a Senior Full Stack developer with with
              over 8 years of experience working across the stack. I left my
              previous career at Meta to pursue my hobbies and find a position
              that better aligns with my interests.
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              My backend languages are Python, Node, SQL, and PostgreSQL, and I
              use React, Next.js, TypeScript on the frontend. I'm a curious
              person by nature, so I'm passionate about learning new things,
              deep-diving into complex problems, and solving bottlenecks. I can
              also work across XFN pillars and do whatever is necessary to get a
              a project over the line whenever business needs require it.
            </p>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              I also have a hardware side to me that stated when I was a child
              (yes, I used to dumpster-dive for electronics to dissasemble). I
              have now accumulated enough things that I can rapidly turn a
              random idea into reality.
            </p>
            <h2 className="mt-8 text-2xl font-bold">Skills</h2>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-gray-500 dark:text-gray-400">
              <li>Python & Node.js</li>
              <li>SQL & PostgreSQL</li>
              <li>RESTful APIs</li>
              <li>CI/CD</li>
              <li>React & Next.js</li>
              <li>TypeScript</li>
              <li>Performance Optimization</li>
              <li>Git</li>
              <li>Microcontrollers</li>
              <li>Electronics</li>
              <li>Hardware</li>
            </ul>
            <div className="mt-8">
              <Button asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold">Relevant Work Experience</h2>
          <div className="mt-6 space-y-8">
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-bold">Senior Software Engineer </h3>
              <p className="text-muted-foreground">
                Meta • April 2019 - April 2024
              </p>
              <p className="mt-2">
                {" "}
                Led the replacement of a legacy feature-gating system, achieving
                the complete elimination of release errors and a 99% reduction
                in database fetches per page load.
              </p>
              Spearheaded multiple high-impact projects, including a geographic
              object-mapping API, a CMS-backed user-facing communications
              framework, and a "Trending Topics" dashboard utilized by the
              Instagram Reels Sales Team. Mentored two interns on high-impact
              projects, guided 10+ new hires through Meta’s bootcamp, and
              delivered presentations on emerging tools & technologies to peers.
              <p className="mt-2">
                Optimized a high-traffic onboarding flow by streamlining steps
                for creators, resulting in a 10% higher completion rate and a 2%
                increase in quality creator profiles.
              </p>
              <p className="mt-2">
                Spearheaded multiple high-impact projects, including a
                geographic object-mapping API, a CMS-backed user-facing
                communications framework, and a "Trending Topics" dashboard
                utilized by the Instagram Reels Sales Team.
              </p>
              <p className="mt-2">
                Mentored two interns on high-impact projects, guided 10+ new
                hires through Meta’s bootcamp, and delivered presentations on
                emerging tools & technologies to peers.e
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-bold">
                Full Stack Software Engineer
              </h3>
              <p className="text-muted-foreground">
                Gigster • Full Stack Software Engineer • October 2017 -
                September 2018
              </p>
              <p className="mt-2">
                Developed and maintained the Gigster CLI, a tool used by
                freelance developers to bootstrap projects with scaffolding
                tailored towards development and deployment on the Gigster
                platform.
              </p>
              <p className="mt-2">
                Contributed to the Gigster Dashboard, a web-app used to
                facilitate management of distributed development teams.
              </p>
              <p className="mt-2">
                Designed, scoped, and implemented backend services for various
                client projects.
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-bold">Software Engineer</h3>
              <p className="text-muted-foreground">
                Sophos • Software Engineer • January 2016 - June 2018
              </p>
              <p className="mt-2">
                Developed a mobile VPN client with real-time malware analysis
                and policy enforcement.
              </p>
              <p className="mt-2">
                Implemented proximity-based data center speed tests, improving
                the efficiency of application-side ranking and queuing.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold">Slightly Less Relevant</h2>
          <div className="mt-6 space-y-8">
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-bold"> Software Engineer, Intern </h3>
              <p className="text-muted-foreground">
                Sophos • June 2015 - September 2015
              </p>
              <p className="mt-2">Intermship</p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-bold">SQA Test Engineer</h3>
              <p className="text-muted-foreground">
                Karl Storz Imaging • June 2014 - June 2015
              </p>
              <p className="mt-2">
                Wrote tests for medical device software (endoscopes)
              </p>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-bold">Assistant Web Developer</h3>
              <p className="text-muted-foreground">
                University of Californica, Santa Barbara • June 2012 - June 2014
              </p>
              <p className="mt-2">Managed various parts of the UCSB website</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="mt-6 space-y-8">
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-bold"> RateMyGold </h3>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <h3 className="text-xl font-bold">GrademGold</h3>
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
                University of California • 2011 - 2015
              </p>
              <p className="mt-2">
                Transferred from Economics to Computer Science
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
