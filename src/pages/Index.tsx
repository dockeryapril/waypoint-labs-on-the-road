import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { WhoItsFor } from "@/components/WhoItsFor";
import { Roadmap } from "@/components/Roadmap";
import { Contact } from "@/components/Contact";
const Index = () => {
  return <div className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      
      
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border bg-card/30">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Waypoint Labs. Building tools for the road ahead.</p>
        </div>
      </footer>
    </div>;
};
export default Index;