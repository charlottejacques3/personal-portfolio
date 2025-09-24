import { Experience } from "./lib/definitions";

// about section

export const greeting = "Hi, my name is Charlotte!";

export const bio = "I am a third year computer science student at the University of Victoria. I am interested in fullstack development and data science, and I have a passion for creating technology that can have a positive impact on the world. I am always eager to learn and try new things, etc.";


// experience section

export const experience:Experience[] = [
  {
    id: 0,
    title: "Software Engineer Co-op",
    company: "Routific",
    dateRange: "September-December 2025",
    bulletPoints: [
      "Point 1",
      "Point 2",
    ],
    image: '/experience/routific.png',
    alt: 'Routific logo',
  },
  {
    id: 1,
    title: "NSERC Undergraduate Student Researcher",
    company: "VIXI Labs (University of Victoria)",
    dateRange: "May-August 2025",
    bulletPoints: [
      "Designed and developed a fullstack mobile application for fostering gratitude",
      "Conducted a user study with 37 participants to assess the effectiveness of the application",
      "Performed coding and analysis of qualitative data from the study...",
      "[Conducted?] a literature review, co-wrote the paper, etc."
    ],
    image: '/experience/vixi.png',
    alt: 'VIXI Labs logo',
  }
];