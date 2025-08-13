// 1. Personal / sidebar info
export const personalInfo = {
  name: "Muhammad Nazril",
  title: "High School Student",
  avatar: "/profile.png", // keep inside /public
  badges: ["Web Developer", "Tech Enthusiast", "Still Learning"],
  socials: {
    github: {
      label: "GitHub",
      href: "https://github.com/na-x-ril",
    },
    instagram: {
      label: "Instagram",
      href: "https://instagram.com/mnazril_7673",
    },
  },
};

// 2. Navigation items for sidebar
export const navItems = [
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// 3. Technology → official documentation links
export const techLinks: Record<string, string> = {
  "Next.js": "https://nextjs.org/",
  "Tailwind CSS": "https://tailwindcss.com/",
  JavaScript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  Clerk: "https://clerk.com/",
  Convex: "https://www.convex.dev/",
};

// 4. Projects
export const projects = [
  {
    title: "D'Nazrill Portfolio",
    description: "Portfolio website showcasing my projects, contacts and social media.",
    tags: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/na-x-ril/nazril-portfolio/",
    liveUrl: "https://onlynazril7z.vercel.app/",
  },
  {
    title: "NZChat",
    description: "A simple realtime chat application using Next.js, Clerk, Convex and Tailwind CSS.",
    tags: ["Next.js", "Tailwind CSS", "Clerk", "Convex"],
    githubUrl: "https://github.com/na-x-ril/nzchat/",
    liveUrl: "https://nzchat.vercel.app/",
  },
  {
    title: "NZDigest",
    description: "AI-powered sumarizer.",
    tags: ["Next.js", "Tailwind CSS"],
    githubUrl: "https://github.com/na-x-ril/nzdigest/",
    liveUrl: "https://nzdigest.vercel.app/en",
  },
  {
    title: "API-Nazlly",
    description: "An API to scrape TikTok metadata.",
    tags: ["JavaScript"],
    githubUrl: "https://github.com/na-x-ril/api-nazlly/",
    liveUrl: "https://api-nazlly.vercel.app/",
  },
  {
    title: "Whatsapp Ext",
    description: "Chrome extension to send many chats at once.",
    tags: ["JavaScript"],
    githubUrl: "https://github.com/na-x-ril/whatsapp-ext/",
  },
  {
    title: "GainNode",
    description: "JavaScript script to change the sound quality on a website.",
    tags: ["JavaScript"],
    githubUrl: "https://github.com/na-x-ril/audioGain/",
  },
];

// 5. Skills
export const skills = [
  {
    name: "JavaScript",
    iconKey: "SiJavascript",
    color: "text-yellow-500",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    iconKey: "SiTypescript",
    color: "text-blue-500",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    iconKey: "SiReact",
    color: "text-cyan-500",
    link: "https://react.dev/",
  },
  {
    name: "Node.js",
    iconKey: "SiNodedotjs",
    color: "text-green-500",
    link: "https://nodejs.org/",
  },
  {
    name: "ExpressJS",
    iconKey: "SiExpress",
    color: "text-gray-600",
    link: "https://expressjs.com/",
  },
  {
    name: "Tailwind CSS",
    iconKey: "SiTailwindcss",
    color: "text-teal-500",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Git",
    iconKey: "SiGit",
    color: "text-orange-500",
    link: "https://git-scm.com/",
  },
  {
    name: "GenAI",
    iconKey: "AI",
    color: "text-purple-500",
    link: "https://aistudio.google.com/",
  },
];