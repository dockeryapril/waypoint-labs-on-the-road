import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-waypoint-navy to-waypoint-slate opacity-90" />
      
      {/* Subtle map-inspired grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
        backgroundImage: `
            linear-gradient(hsl(var(--waypoint-amber)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--waypoint-amber)) 1px, transparent 1px)
          `,
        backgroundSize: '80px 80px'
      }} />
      </div>

      {/* Glowing accent circles */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{
      animationDelay: '1s'
    }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="w-8 h-8 text-primary" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Waypoint Labs
          </h1>
        </div>
        
        <p className="text-2xl md:text-3xl text-foreground/90 font-light max-w-3xl mx-auto leading-relaxed">
          Independent software studio building web and mobile apps, dashboards, and AI tools for people who live and work in motion.
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          ​
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button size="lg" className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => scrollToSection("projects")}>
            View Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-primary/50 hover:border-primary hover:bg-primary/10" onClick={() => scrollToSection("contact")}>
            Get in Touch
          </Button>
        </div>
      </div>
    </section>;
};