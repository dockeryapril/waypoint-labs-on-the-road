import { Truck, Code2, Handshake } from "lucide-react";

export const WhoItsFor = () => {
  const audiences = [
    {
      icon: Truck,
      title: "Drivers",
      description: "Plan better loads, protect your time, and make smarter money decisions on the road."
    },
    {
      icon: Code2,
      title: "Builders",
      description: "Developers and makers interested in logistics, travel, and wellness tools that solve real problems."
    },
    {
      icon: Handshake,
      title: "Future Partners",
      description: "Companies that want niche tools for trucking, logistics, or remote work. Let's build together."
    }
  ];

  return (
    <section id="who-its-for" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who It's <span className="text-primary">For</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Built for the people who keep moving forward.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience) => (
            <div 
              key={audience.title}
              className="p-8 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <audience.icon className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{audience.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
