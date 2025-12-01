export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  status: "MVP live soon" | "In development" | "Concept" | "Internal";
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "loadmaster-gpt",
    name: "LoadMaster GPT",
    category: "Trucking / Logistics",
    description: "AI-assisted load analysis and planning for expedite and box-truck drivers. Helps evaluate offers, track RPM, and make smarter route decisions.",
    status: "MVP live soon",
    tags: ["AI", "Logistics", "Internal tool"],
    link: "#"
  },
  {
    id: "mindful-mixer",
    name: "Mindful Mixer",
    category: "Wellness / Audio",
    description: "Nature sound and ambient mixer designed for drivers and travelers who need calm, focus, or sleep on the road.",
    status: "In development",
    tags: ["Wellness", "Audio"],
    link: "#"
  },
  {
    id: "commitment-app",
    name: "Commitment App",
    category: "Habits / Self-Development",
    description: "Simple 'days committed' tracker with affirmations and an emergency reset button for staying on track with one key habit.",
    status: "Concept",
    tags: ["Habits", "Self-development"],
    link: "#"
  },
  {
    id: "ledger-pro",
    name: "Ledger Pro",
    category: "Finance / Trucking",
    description: "Tax deduction and expense dashboard for truckers, turning messy receipts into a clear picture at tax time.",
    status: "Concept",
    tags: ["Finance", "Trucking"],
    link: "#"
  }
];
