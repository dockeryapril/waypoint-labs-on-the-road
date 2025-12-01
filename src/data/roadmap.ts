export interface RoadmapItem {
  id: string;
  title: string;
  description: string;
}

export const roadmap: RoadmapItem[] = [
  {
    id: "loadmaster",
    title: "Polishing LoadMaster GPT",
    description: "Refining as a flagship tool for expedite teams with better load analysis and route optimization."
  },
  {
    id: "mindful-mixer",
    title: "Iterating on Mindful Mixer",
    description: "Adding better sound controls, timers, and custom mixing capabilities."
  },
  {
    id: "future-saas",
    title: "Exploring Future SaaS Products",
    description: "Building internal tools for trucking and logistics that could scale to wider audiences."
  }
];
