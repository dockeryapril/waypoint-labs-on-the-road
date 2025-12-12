import { Truck, Code2, Handshake } from "lucide-react";
export const WhoItsFor = () => {
  const audiences = [{
    icon: Truck,
    title: "Drivers",
    description: "Plan better loads, protect your time, and make smarter money decisions on the road."
  }, {
    icon: Code2,
    title: "Builders",
    description: "Developers and makers interested in logistics, travel, and wellness tools that solve real problems."
  }, {
    icon: Handshake,
    title: "Future Partners",
    description: "Companies that want niche tools for trucking, logistics, or remote work. Let's build together."
  }];
  return (
    <section id="who-its-for" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Who It's For
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="text-center p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                <audience.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {audience.title}
              </h3>
              <p className="text-muted-foreground">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};