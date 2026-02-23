import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin } from "lucide-react";
export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Solid yellow background */}
      <div className="absolute inset-0 bg-waypoint-yellow" />

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <MapPin className="w-8 h-8 text-primary" />
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-waypoint-navy">
            Waypoint Labs
          </h1>
        </div>

        <p className="text-2xl md:text-3xl text-waypoint-navy/80 font-light max-w-3xl mx-auto leading-relaxed">
          Independent software studio building web and mobile apps, dashboards, and AI tools for people and businesses that live and work in motion.
        
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            className="group text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => scrollToSection("projects")}>

            View Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 border-2 border-waypoint-navy text-waypoint-navy hover:bg-waypoint-navy hover:text-waypoint-yellow"
            onClick={() => scrollToSection("contact")}>

            Get in Touch
          </Button>
        </div>
      </div>
    </section>);

};