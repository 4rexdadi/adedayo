import { StaticImageData } from "next/image";
import Img from "../../public/assets/images/1.png";

export type Work = {
  id: number;
  company: string;
  companyWebsite: string;
  role: string;
  date: {
    start: string;
    end: string;
  };
  accomplishments: {
    id: number;
    point: string;
  }[];
};

export type Project = {
  id: number;
  date: number | string;
  title: string;
  introTitle: string;
  liveSite: string;
  linkName: string;
  role: string;
  gitHub: string;
  technologies: string[];
  video: StaticImageData | string;
  mainImage: StaticImageData | string;
  images: {
    url: StaticImageData | string;
    caption: string;
  }[];
  description: string[];
};

export const projectData: Project[] = [
  {
    id: 0,
    date: "Jul 2023 - Present",
    title: "AfroTada",
    introTitle: "Illuminating Africa - The AfroTada Journey",
    liveSite: "https://www.afrotada.com",
    linkName: "check out the website",
    role: "Software Developer - Frontend Developerr",
    gitHub: "",
    technologies: ["React", "Tailwind CSS", "Redux", "Framer Motion", "Axios", "Quill js"],
    video: "google.com",
    mainImage: Img,
    images: [
      {
        url: Img,
        caption: "Demo caption",
      },
      {
        url: Img,
        caption: "Demo caption",
      },
      {
        url: Img,
        caption: "Demo caption",
      },
    ],
    description: [
      "Overview: AfroTada is more than just a platform; it’s a movement aimed at preserving and celebrating the rich tapestry of African culture, history, and knowledge. By providing a digital space for authentic stories, traditions, and information, AfroTada serves as a beacon of African consciousness, bridging the gap between the past, present, and future.",
      "Challenges: Building AfroTada from the ground up presented numerous challenges, particularly as the sole frontend developer tasked with creating dynamic features such as the interactive map and dashboard system, which weren’t too hard. The tricky part was developing the custom text editor, which initially I suggested outsourcing. However, our lead engineer, who handles the backend, encouraged me to tackle it myself, and I embraced the challenge. The journey to find the right tool for the text editor led to the discovery of Quill.js, which, despite its steep learning curve, my easy adaptability to new technologies made the integration unnoticed. Quill.js was like the base, so I built the extra features needed for our platform and styled accordingly to match the design.",
      "Learning: Throughout the AfroTada journey, I acquired proficiency in Tailwind CSS and mastered the art of crafting a sophisticated text editor enriched with custom interactions. Moreover, this project sparked my curiosity in C#, driven by the fast performance of our backend built with ASP.Net Core. This project also expanded my knowledge beyond just tech stuff, also granting me insights into business strategies and the entrepreneurial ecosystem.",
      "This experience not only enhanced technical skills but also fostered a deeper understanding of the importance of perseverance and adaptability in software development.",
    ],
  },
  {
    id: 1,
    date: "Sep 2022 - Present",
    title: "Forex Dashboard",
    introTitle: "Navigating Markets with Precision through the Forex Dashboard Experience",
    liveSite: "https://forexdash.netlify.app",
    linkName: "try out the demo",
    role: "Software Developer - Full Stack Web Application",
    gitHub: "https://github.com/4rexdadi/ForexDash",
    technologies: ["React", "Node", "Express", "SASS", "Redux", "Framer Motion", "Apex Charts", "Mongo DB"],
    video: "google.com",
    mainImage: Img,
    images: [
      {
        url: Img,
        caption: "Demo caption",
      },
      {
        url: Img,
        caption: "Demo caption",
      },
      {
        url: Img,
        caption: "Demo caption",
      },
    ],
    description: [
      "Overview: The Forex Dashboard provides a visual representation of your trading accounts using complex statistical formulas. It implements chart types like pie charts, bar charts, tables, trend lines, etc., to help users identify historical patterns from trade activities, enabling more informed trading/investment decisions.",
      "Challenges: The original idea was to create a system where users could use their investor login credentials from MT4/MT5 to onboard directly, allowing the dashboard access to users' trading histories and data. However, it turned out to be too expensive. So, I switched gears to a more pragmatic approach, opting to use a free third-party API provided by MyFxbook, which came with its own set of issues and limitations. The solution works, but there's a bit of regret in not having the ideal setup 😞.",
      "Learning: This project marked my foray into full-stack development. As mentioned, I don't identify with a particular tool. This is a typical example because I had to learn Node.js and Express.js within a short period to use them as a backend solution for this project.",
      "Despite the hiccups, the project has grown and become a reliable tool for my trading community. It's used almost daily by a few of my forex trading friends. It serves as a reminder that progress often involves overcoming bumps in the road.",
      "Open Source: The project is openly accessible on GitHub, fostering collaboration and encouraging others to contribute to its evolution.",
    ],
  },
  {
    id: 2,
    date: 2021,
    title: "Forex dashboard",
    introTitle: "demo project",
    liveSite: "google.com",
    linkName: "check out the website",
    role: "software developer",
    gitHub: "github.com",
    technologies: ["react", "css", "next", "python"],
    video: "google.com",
    mainImage: Img,
    images: [
      {
        url: Img,
        caption: "Demo caption",
      },
      {
        url: Img,
        caption: "Demo caption",
      },
      {
        url: Img,
        caption: "Demo caption",
      },
    ],
    description: [
      "would be the kind of project I take on: challenging, new, and, of course, fun. The initial pitch was simple: let's build a video-only dating app (Tinder meets TikTok)",
      "Our collaboration was nothing like I had ever experienced before. They pushed me hard to explore uncharted paths that usually led to a better solution to the problem we were trying to solve",
      "This remains one of the best projects I've been lucky enough to participate in. I've learned a lot, experienced a lot, failed a lot, and had some of the best product design thinking with Farb and Brian. 10/10 would recommend it 😄",
    ],
  },
  {
    id: 3,
    date: 2021,
    title: "Forex dashboard",
    introTitle: "demo project",
    liveSite: "google.com",
    linkName: "check out the website",
    role: "software developer",
    gitHub: "github.com",
    technologies: ["react", "css", "next", "python"],
    video: "google.com",
    mainImage: Img,
    images: [
      {
        url: Img,
        caption: "Demo caption",
      },
      {
        url: Img,
        caption: "Demo caption",
      },
      {
        url: Img,
        caption: "Demo caption",
      },
    ],
    description: [
      "would be the kind of project I take on: challenging, new, and, of course, fun. The initial pitch was simple: let's build a video-only dating app (Tinder meets TikTok)",
      "Our collaboration was nothing like I had ever experienced before. They pushed me hard to explore uncharted paths that usually led to a better solution to the problem we were trying to solve",
      "This remains one of the best projects I've been lucky enough to participate in. I've learned a lot, experienced a lot, failed a lot, and had some of the best product design thinking with Farb and Brian. 10/10 would recommend it 😄",
    ],
  },
  {
    id: 4,
    date: 2021,
    title: "Forex dashboard",
    introTitle: "demo project",
    liveSite: "google.com",
    linkName: "check out the website",
    role: "software developer",
    gitHub: "github.com",
    technologies: ["react", "css", "next", "python"],
    video: "google.com",
    mainImage: Img,
    images: [
      {
        url: Img,
        caption: "Demo caption",
      },
      {
        url: Img,
        caption: "Demo caption",
      },
      {
        url: Img,
        caption: "Demo caption",
      },
    ],
    description: [
      "would be the kind of project I take on: challenging, new, and, of course, fun. The initial pitch was simple: let's build a video-only dating app (Tinder meets TikTok)",
      "Our collaboration was nothing like I had ever experienced before. They pushed me hard to explore uncharted paths that usually led to a better solution to the problem we were trying to solve",
      "This remains one of the best projects I've been lucky enough to participate in. I've learned a lot, experienced a lot, failed a lot, and had some of the best product design thinking with Farb and Brian. 10/10 would recommend it 😄",
    ],
  },
];

export const jobData: Work[] = [
  {
    id: 0,
    company: "AfroTada",
    companyWebsite: "https://www.afrotada.com",
    role: "Software Developer",
    date: {
      start: "Jun 2023",
      end: "Present",
    },
    accomplishments: [
      {
        id: 1,
        point:
          "Spearheaded the development of AfroTada’s major features, including the dashboard system and rich text editor. Adhering to layout principles and utilising modern technologies such as JavaScript, React, and CSS/Tailwind to enhance functionality and aesthetics, I effectively managed frontend features and conducted code refactoring.",
      },
      {
        id: 2,
        point:
          "Played a pivotal role in optimising the web application, focusing on performance enhancements to achieve a superior user experience with swift loading times. I accomplished this by implementing code splitting, utilising React Lazy Loading, and employing Redux for effective state management, among other techniques.",
      },
      {
        id: 3,
        point:
          "Collaborated seamlessly with a cross-functional team, including a backend engineer and designer, to achieve cohesive project outcomes.",
      },
    ],
  },
];

export default { projectData, jobData };
