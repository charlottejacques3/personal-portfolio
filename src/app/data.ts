import { Experience } from "./lib/definitions";
import { Project } from "./lib/definitions";

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


// project section

export const projects:Project[] = [
  {
    id: 0,
    title: 'Octocards',
    tagline: 'Visual study app with a spaced repetition algorithm',
    techStack: ['Django', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
    image: '/projects/octocards.png',
    github: 'https://github.com/charlottejacques3/octocards',
    description: "I designed a web application to help visual learners organize their study material into flashcards and tables in a way that makes sense to them. To promote maximum retention, they can then review the content with the program's spaced repetition algorithm. In addition, I have implemented features for users to group their study material into classes and topics.\nThis application was coded mostly in Python's Django framework, which provided a way to store the user's study material in model classes connected to a SQLite database, and display it in a view. I coded the frontend in CSS, making use of the Bootstrap library."
  },
  {
    id: 1,
    title: 'Gratitude Buddy',
    tagline: 'Mobile application for promoting gratitude',
    techStack: ['Flutter', 'Dart', 'Firebase'],
    image: '/projects/pennywise.png',
    github: 'https://github.com/charlottejacques3/gratitude_app',
    description: "I developed my frontend and backend skills by designing and coding a website showcasing Canada's lesser known parks. The parks can be browsed either through a list or a map.\nThe park information is stored in a mySQL database, and served to the website using PHP. I used HTML and CSS to design the site, and JavaScript to make the site responsive across various devices."
  },
  {
    id: 2,
    title: 'Canada Unknown',
    tagline: "Website showcasing Canada's underrated parks",
    techStack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    image: '/projects/canada_unknown.png',
    github: 'https://github.com/charlottejacques3/gratitude_app',
    description: "I developed my frontend and backend skills by designing and coding a website showcasing Canada's lesser known parks. The parks can be browsed either through a list or a map.\nThe park information is stored in a mySQL database, and served to the website using PHP. I used HTML and CSS to design the site, and JavaScript to make the site responsive across various devices."
  }
];