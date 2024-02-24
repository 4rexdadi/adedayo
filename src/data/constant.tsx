import { StaticImageData } from "next/image";

import PhotoMatch0 from "../../public/assets/images/projects/photo-match/0.png";
import PhotoMatch1 from "../../public/assets/images/projects/photo-match/1.png";
import PhotoMatch2 from "../../public/assets/images/projects/photo-match/2.png";
import PhotoMatch from "../../public/assets/images/projects/photo-match/mainImage.png";

import ForexDash0 from "../../public/assets/images/projects/forex-dash/0.png";
import ForexDash1 from "../../public/assets/images/projects/forex-dash/1.png";
import ForexDash2 from "../../public/assets/images/projects/forex-dash/2.png";
import ForexDash3 from "../../public/assets/images/projects/forex-dash/3.png";
import ForexDash4 from "../../public/assets/images/projects/forex-dash/4.png";
import ForexDash5 from "../../public/assets/images/projects/forex-dash/5.png";
import ForexDash6 from "../../public/assets/images/projects/forex-dash/6.png";
import ForexDash7 from "../../public/assets/images/projects/forex-dash/7.png";
import ForexDash8 from "../../public/assets/images/projects/forex-dash/8.png";
import ForexDash9 from "../../public/assets/images/projects/forex-dash/9.png";
import ForexDash from "../../public/assets/images/projects/forex-dash/mainImage.png";

import VsCodeTheme0 from "../../public/assets/images/projects/theme/1.jpeg";
import VsCodeTheme1 from "../../public/assets/images/projects/theme/2.jpeg";
import VsCodeTheme2 from "../../public/assets/images/projects/theme/3.jpeg";
import VsCodeTheme from "../../public/assets/images/projects/theme/mainImage.png";

import AfroTada0 from "../../public/assets/images/projects/afrotada/0.png";
import AfroTada1 from "../../public/assets/images/projects/afrotada/1.png";
import AfroTada2 from "../../public/assets/images/projects/afrotada/2.png";
import AfroTada3 from "../../public/assets/images/projects/afrotada/3.png";
import AfroTada4 from "../../public/assets/images/projects/afrotada/4.png";
import AfroTada from "../../public/assets/images/projects/afrotada/mainImage.png";

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
  roles: string;
  mainRole: string;
  gitHub: string;
  technologies: string[];
  video: string;
  videoALT: StaticImageData | string;
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
    roles: "Software Developer - Frontend Developer",
    mainRole: "Frontend Developer",
    gitHub: "",
    technologies: [
      "React",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
      "Axios",
      "Quill js",
    ],
    video: "/assets/videos/vid1.mp4",
    videoALT: "",
    mainImage: AfroTada,
    images: [
      {
        url: AfroTada0,
        caption: "Demo caption",
      },
      {
        url: AfroTada1,
        caption: "Demo caption",
      },
      {
        url: AfroTada2,
        caption: "Demo caption",
      },
      {
        url: AfroTada3,
        caption: "Demo caption",
      },
      {
        url: AfroTada4,
        caption: "Demo caption",
      },
    ],
    description: [
      "Overview: AfroTada is more than just a platform; it’s a movement aimed at preserving and celebrating the rich tapestry of African culture, history, and knowledge. By providing a digital space for authentic stories, traditions, and information, AfroTada serves as a beacon of African consciousness, bridging the gap between the past, present, and future.",
      "Challenges: Building AfroTada presented numerous challenges, particularly as the sole frontend developer tasked with creating dynamic features such as the interactive map and dashboard system, which weren’t too hard. The tricky part was developing the custom text editor, which initially I suggested outsourcing. However, our lead engineer, who handles the backend, encouraged me to tackle it myself, and I embraced the challenge. The journey to find the right tool for the text editor led to the discovery of Quill.js, which, despite its steep learning curve, my easy adaptability to new technologies made the integration unnoticed. Quill.js was like the base, so I built the extra features needed for our platform and styled accordingly to match the design.",
      "Learning: Throughout the AfroTada journey, I acquired proficiency in Tailwind CSS and mastered the art of crafting a sophisticated text editor enriched with custom interactions. Moreover, this project sparked my curiosity in C#, driven by the fast performance of our backend built with ASP.Net Core. This project also expanded my knowledge beyond just tech stuff, also granting me insights into business strategies and the entrepreneurial ecosystem.",
      "This experience not only enhanced technical skills but also fostered a deeper understanding of the importance of perseverance and adaptability in software development.",
    ],
  },
  {
    id: 1,
    date: "Sep 2022 - Present",
    title: "Forex Dashboard",
    introTitle:
      "Navigating Markets with Precision through the Forex Dashboard Experience",
    liveSite: "https://forexdash.netlify.app",
    linkName: "try out the demo",
    roles: "Software Developer - Full Stack Web Application",
    mainRole: "Full Stack Web Application",
    gitHub: "https://github.com/4rexdadi/ForexDash",
    technologies: [
      "React",
      "Node",
      "Express",
      "SASS",
      "Redux",
      "Framer Motion",
      "Apex Charts",
      "Mongo DB",
    ],
    video: "/assets/videos/vid1.mp4",
    videoALT: "",
    mainImage: ForexDash,
    images: [
      {
        url: ForexDash0,
        caption: "Demo caption",
      },
      {
        url: ForexDash1,
        caption: "Demo caption",
      },
      {
        url: ForexDash2,
        caption: "Demo caption",
      },
      {
        url: ForexDash3,
        caption: "Demo caption",
      },
      {
        url: ForexDash4,
        caption: "Demo caption",
      },
      {
        url: ForexDash5,
        caption: "Demo caption",
      },
      {
        url: ForexDash6,
        caption: "Demo caption",
      },
      {
        url: ForexDash7,
        caption: "Demo caption",
      },
      {
        url: ForexDash8,
        caption: "Demo caption",
      },
      {
        url: ForexDash9,
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
    date: "Mar 2022",
    title: "Code Dadi Theme",
    introTitle: "Immerse yourself in a sleek and efficient coding environment",
    liveSite:
      "https://marketplace.visualstudio.com/items?itemName=CodeDadi.code-dadi-dark",
    linkName: "try it out",
    roles: "Software Developer - Microsoft VSCode Extension",
    mainRole: "Microsoft VSCode Extension",
    gitHub: "",
    technologies: ["JSON", "VSCode Extension"],
    video: "",
    videoALT: VsCodeTheme,
    mainImage: VsCodeTheme,
    images: [
      {
        url: VsCodeTheme0,
        caption: "Demo caption",
      },
      {
        url: VsCodeTheme1,
        caption: "Demo caption",
      },
      {
        url: VsCodeTheme2,
        caption: "Demo caption",
      },
    ],
    description: [
      "Overview: This theme offers a harmonious blend of colors and syntax highlighting, enhancing readability and reducing eye strain during long coding sessions. Whether you're a seasoned developer or just starting your coding journey, the Code Dadi Theme provides a visually pleasing and distraction-free workspace, allowing you to focus on what matters most - writing clean and efficient code.",
      "Installation:",
      "1. Open the extensions sidebar on Visual Studio Code",
      "2. Search for Code Dadi Theme",
      "3. Click Install",
      "4. Click Reload to reload your editor",
      "5. Select the Manage Cog (bottom left) > Color Theme > Code Dadi Dark Theme",
      "6. 🌟🌟🌟🌟🌟 Rate five-stars 😃",
    ],
  },
  {
    id: 3,
    date: "Mar 2022 - Apr 2022",
    title: "Photo Match",
    introTitle: "Enhancing Memory Skills - The Photo Match Experience",
    liveSite: "https://photo-match.netlify.app",
    linkName: "check out the website",
    roles: "Software Developer - Web Game",
    mainRole: "Web Game",
    gitHub: "",
    technologies: ["React", "Rest API"],
    video: "/assets/videos/vid1.mp4",
    videoALT: "",
    mainImage: PhotoMatch,
    images: [
      {
        url: PhotoMatch0,
        caption: "Demo caption",
      },
      {
        url: PhotoMatch1,
        caption: "Demo caption",
      },
      {
        url: PhotoMatch2,
        caption: "Demo caption",
      },
    ],
    description: [
      "Overview: Dive into the world of memory enhancement with Photo Match, an interactive game designed to challenge and improve memory skills. Players must swiftly find all matching images before time runs out, fostering cognitive abilities while providing an enjoyable gaming experience.",
      "Learning: I honed my skills in React, mastering the creation of interactive user interfaces. Working with the Rest API deepened my understanding of data management and API integration within web applications. ",
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
