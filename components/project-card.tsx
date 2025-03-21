import Image from "next/image"
import Link from "next/link"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <Link href={link} className="text-sm font-medium text-primary hover:underline">
          View Project
        </Link>
      </CardFooter>
    </Card>
  )
}

