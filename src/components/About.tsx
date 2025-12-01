import { User, Target, Zap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-primary">Waypoint Labs</span>
        </h2>
        
        <div className="prose prose-lg prose-invert max-w-none mb-12">
          <p className="text-xl text-foreground/90 leading-relaxed mb-6">
            Waypoint Labs is founded by a software developer who is also an over-the-road expedite truck driver. 
            Our mission is to create tools that make life on the road smarter, healthier, and more financially free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors">
            <User className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Built by</h3>
            <p className="text-muted-foreground">Solo dev/founder on the road</p>
          </div>

          <div className="p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors">
            <Target className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Focus</h3>
            <p className="text-muted-foreground">Logistics, mobility, wellness, finance</p>
          </div>

          <div className="p-6 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors">
            <Zap className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Approach</h3>
            <p className="text-muted-foreground">Practical tools, shipped fast, iterated often</p>
          </div>
        </div>
      </div>
    </section>
  );
};
