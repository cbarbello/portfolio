import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

export function BlogPostCard({
  title,
  excerpt,
  date,
  image,
  slug,
}: BlogPostCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image || "/placeholder.png"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground">{date}</div>
        <h3 className="mt-2 text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{excerpt}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={slug}
          className="text-sm font-medium text-primary hover:underline"
        >
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
}
