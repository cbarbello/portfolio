import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
        Project Post Not Found
      </h1>
      <p className="mt-4 text-muted-foreground">
        Sorry, the project you're looking for doesn't exist or has been removed.
      </p>
      <Button asChild className="mt-8">
        <Link href="/projects">Back to Projects</Link>
      </Button>
    </div>
  );
}
