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
  date: number;
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
    id: 1,
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
