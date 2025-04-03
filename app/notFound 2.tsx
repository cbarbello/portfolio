import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-muted-foreground">
        Ooops, this page doesn't exist. I should probably fix that.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Back to Home</Link>
      </Button>
    </div>
  );
}
