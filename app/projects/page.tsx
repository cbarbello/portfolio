import { ProjectCard } from "@/components/project-card";

// This would typically come from a database or CMS
const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce platform built with Next.js and Stripe.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    link: "/projects/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A productivity app with drag-and-drop functionality and user authentication.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Firebase", "TypeScript"],
    link: "/projects/task-app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website with dark mode and blog functionality.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "Tailwind CSS", "MDX"],
    link: "/projects/portfolio",
  },
  {
    id: 4,
    title: "Weather Dashboard",
    description:
      "A weather application that displays current and forecasted weather data.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "OpenWeather API", "Chart.js"],
    link: "/projects/weather-app",
  },
  {
    id: 5,
    title: "Recipe Finder",
    description:
      "A web app that helps users find recipes based on ingredients they have.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "Spoonacular API", "Tailwind CSS"],
    link: "/projects/recipe-finder",
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description:
      "An analytics dashboard for tracking social media performance.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "D3.js", "Material UI"],
    link: "/projects/social-dashboard",
  },
];

export const metadata = {
  title: "Projects | Casey Barbello",
  description:
    "Portfolio of web development and design projects by Casey Barbello.",
};

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          My Projects
        </h1>
        <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          A collection of my work, side projects, and experiments.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
