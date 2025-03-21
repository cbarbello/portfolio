import { ProjectCard } from "@/components/project-card";

export const projects = [
  {
    id: 1,
    title: "Wrist-Mounted Peltier Device",
    description:
      "I created a wrist-mounted cooling device with a copper heat sink and RC fan.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Hardware", "Electronics", "3D Printing"],
    link: "/projects/peltier-device",
  },
  {
    id: 2,
    title: "Rotating Disco Ball Earring",
    description: "A diso ball earring that spins.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Next.js", "Tailwind CSS", "MDX"],
    link: "/projects/disco-ball-earring",
  },
  {
    id: 3,
    title: "Solar-Powered, Spinning Hanging Planter",
    description: "It spins when the sun hits it for even growth",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Hardware", "Electronics", "3D Printing"],
    link: "/projects/spinning-planter",
  },
  {
    id: 4,
    title: "Entirely Custom Drone ",
    description: "It sort of flies.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Hardware", "Electronics", "3D Printing", "C++"],
    link: "/projects/weather-app",
  },
];

export const metadata = {
  title: "Projects | Casey Barbello",
  description: "Portfolio of my side projects.",
};

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          My Projects
        </h1>
        <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          A collection of my, side projects, and... uhm... "experiments".
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
