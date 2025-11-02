import { Experience, Project, Credit } from "./lib/definitions";

// menu bar

export const name = 'Charlotte\nJacques';

export const sections = [
  {
    id: 'about',
    title: 'About Me',
  }, 
  {
    id: 'experience',
    title: 'Experience',
  }, 
  {
    id: 'skills', 
    title: 'Skills'
  }, 
  {
    id: 'projects',
    title: 'Projects'
  },
];


// about section

export const greeting = "Hi, my name is Charlotte!";

export const bio = "I am a third year computer science student at the University of Victoria with a keen interest in fullstack development. I have a passion for creating technology that can have a positive impact on the world, and I am always eager to learn and try new things. In my spare time, I enjoy reading and crocheting, as well as outdoor activities such as hiking and rock climbing!";


// experience section

export const experience:Experience[] = [
  {
    id: 0,
    title: "Software Engineer Co-op",
    company: "Routific",
    dateRange: "September-December 2025",
    bulletPoints: [
      "Collaborated with other engineers, designers, and product managers to develop both backend and frontend features for the next generation of the Routific platform",
      "Implemented analytics tracking to help uncover usability patterns and issues with current features",
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
      "Ran a user study with 37 participants to assess the effectiveness of the application",
      "Performed coding and analysis of qualitative data from the study to extract insights",
      "Conducted a literature review and co-wrote an academic paper to share the study's findings"
    ],
    image: '/experience/vixi.png',
    alt: 'VIXI Labs logo',
  }
];


// skills section

export const skills:string[] = [
  'Python', 'Java', 'C', 'Dart', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Bootstrap CSS', 'Flutter', 'PHP', 'Django', 'MySQL', 'PostgreSQL', 'GitHub', 'Node.js'
]


// project section

export const projects:Project[] = [
  {
    id: 0,
    title: 'Octocards',
    tagline: 'Visual study app with a spaced repetition algorithm',
    techStack: ['Django', 'Bootstrap CSS', 'HTML', 'CSS', 'JavaScript'],
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
  },
  {
    id: 3,
    title: 'VikeEats',
    tagline: "Extracurricular club project",
    techStack: ['HTML', 'CSS', 'JavaScript', 'Python'],
    image: '/projects/canada_unknown.png',
    github: 'https://github.com/VikeLabs/VikeEats',
    description: "I am currently working as a member of the backend team on a project for VikeLabs, a software development club at the University of Victoria. The goal of our project is to create a website that provides easy access to information on all of UVic's food outlets, including menus, hours, and dietary restriction lists.\nUsing the Beautiful Soup Python library, I have scraped various UVic websites to obtain menu information, and made this data available to the frontend team by creating an API with Flask.\nThroughout the making of this project, I have learned to collaborate effectively with teammmates in a software development context, and have become proficient in GitHub version control."
  },
];


// icon credits

export const iconCredits:Credit[] = [
  {
    id: 0,
    location: '62856/github',
    name: 'GitHub'
  },
  {
    id: 1,
    location: 'lYRyQVjFfJy5/github',
    name: 'GitHub'
  },
  {
    id: 2,
    location: '98960/linkedin',
    name: 'LinkedIn'
  }, 
  {
    id: 3,
    location: '16166/linkedin',
    name: 'LinkedIn'
  },
  {
    id: 4,
    location: '59832/menu',
    name: 'Menu'
  },
];