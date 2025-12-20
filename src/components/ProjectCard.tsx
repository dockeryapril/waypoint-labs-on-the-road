import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
interface ProjectCardProps {
  project: Project;
}
const statusColors = {
  "Live (early access)": "bg-primary/20 text-primary border-primary/50",
  "In development": "bg-blue-500/20 text-blue-400 border-blue-500/50",
  "Concept": "bg-purple-500/20 text-purple-400 border-purple-500/50",
  "Internal": "bg-green-500/20 text-green-400 border-green-500/50"
};
export const ProjectCard = ({
  project
}: ProjectCardProps) => {
  return <Card className="group h-full flex flex-col bg-card/80 backdrop-blur border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <CardHeader>
        <div className="flex items-start justify-between mb-3">
          <Badge variant="outline" className="text-xs">
            {project.category}
          </Badge>
          <Badge variant="outline" className={`text-xs ${statusColors[project.status]}`}>
            {project.status}
          </Badge>
        </div>
        <CardTitle className="text-2xl group-hover:text-primary transition-colors">
          {project.name}
        </CardTitle>
        <CardDescription className="text-muted-foreground text-base leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>)}
        </div>
        {project.link && <Button variant="ghost" className="w-full group/btn text-primary hover:text-primary hover:bg-primary/10" asChild>
            <a href=https://www.loadmastergpt.com/>
              View the app    
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </Button>}
      </CardContent>
    </Card>;
};