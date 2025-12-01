import { roadmap } from "@/data/roadmap";
import { CheckCircle2 } from "lucide-react";

export const Roadmap = () => {
  return (
    <section id="roadmap" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What's <span className="text-primary">Next</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Our focus for the coming months.
          </p>
        </div>

        <div className="space-y-6">
          {roadmap.map((item, index) => (
            <div 
              key={item.id}
              className="flex gap-4 p-6 rounded-lg bg-card/50 border border-border hover:border-primary/50 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
