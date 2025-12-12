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
  return <section id="who-its-for" className="py-24 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          
          
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map(audience => {})}
        </div>
      </div>
    </section>;
};