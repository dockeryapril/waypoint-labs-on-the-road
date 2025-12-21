export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  status: "Live (early access)" | "In development" | "Concept" | "Internal";
  tags: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: "loadmaster-gpt",
    name: "LoadMasterGPT",
    category: "Logistics/Transportation",
    description: "AI-assisted load analysis and planning for underserved expedite drivers with straight trucks, hotshots, or commercial vans. Helps evaluate offers, track RPM, and make smarter route decisions.",
    status: "Live (early access)",
    tags: ["AI", "Logistics", "Data analytics"],
    link: "https://www.loadmastergpt.com/"
  },
  {
    id: "mindful-mixer",
    name: "Freight Flag",
    category: "Wellness / Audio",
    description: "AI-powered scam detection for freight email workflows. Protects brokers, dispatchers, and carriers from fake MC numbers, identity spoofing, and fraudulent rate confirmations through automated inbox scanning.",
    status: "In development",
    tags: ["AI", "Logistics", "Security"],
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
