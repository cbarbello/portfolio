import { ProjectCard } from "@/app/projects/project-card";
import { projectPosts } from "./project-posts";

export const metadata = {
  title: "Projects | Casey Barbello",
  description: "Portfolio of my side projects.",
};

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 place-content-center">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-325">
          A collection of my side projects, experiments, and other interesting
          finds.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 place-content-center">
          {projectPosts.map(({ id, title, description, image, tags, slug }) => (
            <ProjectCard
              key={id}
              title={title}
              description={description}
              image={image}
              tags={tags}
              slug={slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
