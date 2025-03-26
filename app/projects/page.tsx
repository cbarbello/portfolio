import { ProjectCard } from "@/components/project-card";

export const projects = [
  {
    id: 1,
    title: "Wrist-Mounted Cooling Device",
    description:
      "I created a wrist-mounted cooling device with a copper heat sink and RC fan.",
    image: "/wrist-mounted-cooling-device-v4.jpeg?height=325&width=325",
    tags: ["Hardware", "Electronics", "3D Printing"],
    link: "/projects/peltier-device",
  },
  {
    id: 2,
    title: "Rotating Disco Ball Earring",
    description: "A disco ball earring that spins.",
    image: "/spinning-disco-ball-earring.jpeg?height=325&width=325",
    tags: ["Hardware", "Electronics", "3D Printing"],
    link: "/projects/disco-ball-earring",
  },
  {
    id: 3,
    title: "Solar-Powered, Spinning Hanging Planter",
    description: "It spins when the sun hits it for even growth",
    image: "/placeholder.svg?height=325&width=325",
    tags: ["Hardware", "Electronics", "3D Printing"],
    link: "/projects/spinning-planter",
  },
  {
    id: 4,
    title: "Custom-Built Drone",
    description: "It sort of flies. I wrote the flight controller.",
    image: "/custom-built-drone.jpeg?height=325&width=325",
    tags: ["Hardware", "Electronics", "3D Printing", "C++"],
    link: "/projects/cutom-built-drone",
  },
  {
    id: 5,
    title: "Over-Powered Squirt Gun",
    description: "Waters plants, and the wall.",
    image: "/over-powered-squirt-gun.jpeg?height=325&width=325",
    tags: ["Hardware", "Electronics"],
    link: "/projects/over-powered-squirt-gun",
  },
];

export const metadata = {
  title: "Projects | Casey Barbello",
  description: "Portfolio of my side projects.",
};

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 place-content-center">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          My Projects
        </h1>
        <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-325">
          A collection of my side projects, experiments, and other interesting
          finds.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 place-content-center">
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
