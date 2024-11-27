import { theysaid, koper, nuffsaid, toup } from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Diego Mais",
  initials: "DM",
  location: "Itapema, Santa Catarina, Brazil, BRT",
  locationLink: "https://www.google.com/maps/place/Itapema",
  about:
    "Full Stack Engineer focused on building products with extra attention to detail",
  summary:
    "As a Full Stack Engineer, I bring a wealth of experience, a dedication to code cleanliness, and a relentless pursuit of excellence. Currently, I work mostly with TypeScript, Node.js, React, GraphQL and Terraform. I have over 5 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/40746974?v=4",
  personalWebsiteUrl: "https://diegomais.github.io",
  contact: {
    email: "diegomais.pro@gmail.com",
    tel: "+5547996168008",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/diegomais",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/diegomais",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/diegomais",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Unisinos",
      degree: "Master of Business Administration - MBA in Financial Business",
      start: "2009",
      end: "2011",
    },
    {
      school: "UNIASSELVI",
      degree: "Bachelor's degree in Information Systems",
      start: "2004",
      end: "2009",
    },
  ],
  work: [
    {
      company: "TheySaid",
      link: "https://www.theysaid.io",
      badges: ["Remote"],
      title: "Senior Software Engineer",
      logo: theysaid,
      start: "2023",
      end: "Present",
      description:
        "Implemented new features, managed cloud infrastructure, worked on migration from Python to Node.js and more. Technologies: Node.js/NestJS, React, TypeScript, GraphQL/Apollo, PostgreSQL, Python/Flask, Terraform",
    },
    {
      company: "'nuffsaid",
      link: "https://www.nuffsaid.com",
      badges: ["Remote"],
      title: "Frontend Engineer → Software Engineer",
      logo: nuffsaid,
      start: "2021",
      end: "2022",
      description:
        "Implemented new design system, worked on new features, started migration to GraphQL and more. Technologies: React, Node.js/NestJS, TypeScript, GraphQL/Apollo, Jest",
    },
    {
      company: "Koper",
      link: "https://www.koper.com.br",
      badges: ["Remote"],
      title: "Frontend/Mobile Engineer → Tech Lead",
      logo: koper,
      start: "2020",
      end: "2021",
      description:
        "Implemented new design system, started migration from AngularJS to React and more. Technologies: React/Next.js, React Native/Expo, TypeScript, GraphQL",
    },
    {
      company: "TO UP Solutions",
      link: "https://www.toup.dev",
      badges: ["Remote"],
      title: "Frontend/Mobile Engineer",
      logo: toup,
      start: "2019",
      end: "2020",
      description:
        "Created web apps for clients. Technologies: React, React Native, Angular, TypeScript",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Node.js",
    "React",
    "React Native",
    "Jest",
    "Terraform",
  ],
  projects: [
    {
      title: "GoBarber",
      techStack: ["Side Project", "TypeScript", "Express", "React", "Expo"],
      description: "A platform to book barber appointments",
    },
    {
      title: "aircnc: code and coffee",
      techStack: ["Side Project", "TypeScript", "Express", "Next.js", "Expo"],
      description:
        "A platform to offer spots for software developers and find talents for your company",
      link: {
        label: "aircnc-diegomais.vercel.app",
        href: "https://aircnc-diegomais.vercel.app",
      },
    },
    {
      title: "Be The Hero",
      techStack: ["Side Project", "TypeScript", "Express", "Next.js", "Expo"],
      description:
        "A platform to connect people interested in helping NGOs with open campaigns",
      link: {
        label: "be-the-hero-diegomais.vercel.app",
        href: "https://be-the-hero-diegomais.vercel.app",
      },
    },
    {
      title: "RocketBox",
      techStack: [
        "Side Project",
        "TypeScript",
        "Express",
        "Next.js",
        "Socket.IO",
      ],
      description:
        "A platform where you can store your files, accessible from your computer or phone",
      link: {
        label: "rocketbox-diegomais.vercel.app",
        href: "https://rocketbox-diegomais.vercel.app",
      },
    },
    {
      title: "tindev",
      techStack: [
        "Side Project",
        "TypeScript",
        "Express",
        "Next.js",
        "Socket.IO",
      ],
      description: "A tinder clone for developers",
      link: {
        label: "diegomais-tindev.netlify.app",
        href: "https://diegomais-tindev.netlify.app",
      },
    },
  ],
} as const;
