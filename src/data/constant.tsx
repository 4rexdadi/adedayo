import { StaticImageData } from "next/image";

import PhotoMatch0 from "../../public/assets/images/projects/photo-match/0.webp";
import PhotoMatch1 from "../../public/assets/images/projects/photo-match/1.webp";
import PhotoMatch from "../../public/assets/images/projects/photo-match/mainImage.webp";

import ForexDash0 from "../../public/assets/images/projects/forex-dash/0.webp";
import ForexDash1 from "../../public/assets/images/projects/forex-dash/1.webp";
import ForexDash2 from "../../public/assets/images/projects/forex-dash/2.webp";
import ForexDash3 from "../../public/assets/images/projects/forex-dash/3.webp";
import ForexDash4 from "../../public/assets/images/projects/forex-dash/4.webp";
import ForexDash5 from "../../public/assets/images/projects/forex-dash/5.webp";
import ForexDash6 from "../../public/assets/images/projects/forex-dash/6.webp";
import ForexDash7 from "../../public/assets/images/projects/forex-dash/7.webp";
import ForexDash8 from "../../public/assets/images/projects/forex-dash/8.webp";
import ForexDash9 from "../../public/assets/images/projects/forex-dash/9.webp";
import ForexDash from "../../public/assets/images/projects/forex-dash/mainImage.webp";

import PointXY0 from "../../public/assets/images/projects/pointxy/0.webp";
import PointXY1 from "../../public/assets/images/projects/pointxy/1.png";
import PointXY2 from "../../public/assets/images/projects/pointxy/2.png";
import PointXY3 from "../../public/assets/images/projects/pointxy/3.png";
import PointXY4 from "../../public/assets/images/projects/pointxy/4.png";

import VsCodeTheme0 from "../../public/assets/images/projects/theme/1.webp";
import VsCodeTheme1 from "../../public/assets/images/projects/theme/2.webp";
import VsCodeTheme2 from "../../public/assets/images/projects/theme/3.webp";
import VsCodeTheme from "../../public/assets/images/projects/theme/mainImage.webp";

import AfroTada0 from "../../public/assets/images/projects/afrotada/0.webp";
import AfroTada1 from "../../public/assets/images/projects/afrotada/1.webp";
import AfroTada2 from "../../public/assets/images/projects/afrotada/2.webp";
import AfroTada3 from "../../public/assets/images/projects/afrotada/3.webp";
import AfroTada4 from "../../public/assets/images/projects/afrotada/4.webp";
import AfroTada from "../../public/assets/images/projects/afrotada/mainImage.webp";

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
  slug: string;
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
    id: 4,
    date: "Apr 2024 - Present",
    title: "Point XY",
    slug: "point-xy",
    introTitle: "Revolutionizing Logistics with Point XY",
    liveSite: "https://www.pointxy.app/",
    linkName: "explore the website",
    roles: "Lead Software Developer - Web and Mobile Applications",
    mainRole: "Lead Software Developer - Web and Mobile Applications",
    gitHub: "",
    technologies: [
      "React Native",
      "TypeScript",
      "Expo",
      "Google Maps SDK",
      "Google Places API",
      "Google Directions API",
      "React.js",
      "Tailwind CSS",
      "Next.js",
      "Apex Charts",
      "Superbase",
    ],
    video: "",
    videoALT: PointXY0,
    mainImage: PointXY0,
    images: [
      {
        url: PointXY1,
        caption: "Customer App - Order tracking and live delivery updates",
      },
      {
        url: "/assets/videos/pointxy/0.mp4",
        caption: "Official Point XY Website",
      },
      {
        url: PointXY2,
        caption: "Rider app - Real-time navigation system",
      },
      {
        url: PointXY3,
        caption: "Vendor app - Advanced order management tools",
      },
      {
        url: PointXY4,
        caption: "Point XY Eco-system",
      },
    ],
    description: [
      "Overview: Point XY is an innovative logistics platform that seamlessly connects customers, vendors, and riders through tailored applications. The project includes three dedicated mobile apps—Customer, Vendor, and Rider—complemented by a responsive website and a robust admin dashboard, providing a unified ecosystem for logistics management.",
      "Challenges: Leading the development of multi-platform applications involved implementing advanced geolocation technologies, real-time tracking with Google Maps SDK, address autocomplete using the Places API, and optimized routing via the Directions API. Migrating the legacy JavaScript codebase to TypeScript resulted in a 50% reduction in bugs and significantly improved code maintainability.",
      "Key Contributions:",
      " -  Rider App: Architected a real-time navigation system integrating the Google Maps SDK and Directions API, reducing average delivery time by 25%. Implemented push notifications for live delivery updates, enhancing rider efficiency and reducing missed deliveries.",
      " -  Customer App: Designed and deployed a seamless booking interface with address autocomplete powered by the Google Places API. This feature improved order placement accuracy by 40%, while live tracking functionality significantly boosted customer satisfaction ratings, as evidenced by a 30% increase in positive feedback.",
      " -  Vendor App: Engineered advanced order management tools, including inventory synchronization and order tracking, enabling vendors to process orders 20% faster. Integrated communication channels for direct interactions with riders, streamlining issue resolution and improving vendor-to-rider coordination.",
      " -  Website: Developed a highly responsive and SEO-optimized website using Next.js and Tailwind CSS. This resulted in a 50% boost in organic traffic and a 35% reduction in bounce rates, solidifying Point XY’s online presence and customer reach.",
      " -  Admin Dashboard: Designed and implemented an analytics dashboard using Apex Charts and Supabase, enabling real-time data visualization for key performance metrics. Streamlined operational oversight by integrating advanced reporting features, reducing decision-making time by 40% and improving operational efficiency.",
      "Learning: This project sharpened my expertise in React Native, and Expo, while enabling me to master integrations with advanced Google APIs. It also broadened my experience in cross-platform development and teamwork, emphasizing the importance of delivering cohesive and scalable solutions.",
    ],
  },
  {
    id: 0,
    date: "Jul 2023 - Present",
    title: "AfroTada",
    slug: "afrotada",
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
    video: "",
    videoALT: AfroTada,
    mainImage: AfroTada,
    images: [
      {
        url: AfroTada0,
        caption: "Mobile screens 📱",
      },
      {
        url: AfroTada1,
        caption: "Interactive map of Africa page for desktop",
      },
      {
        url: AfroTada2,
        caption:
          "Dashboard page - more features will be shown, depending of who's logged in.",
      },
      {
        url: AfroTada3,
        caption: "Minimal rich text editor with professional writing tools",
      },
      {
        url: AfroTada4,
        caption:
          "Single country page - when a country is clicked on the map, you get beautiful screen with information and articles for that country",
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
    date: "Sep 2022 - Continuous Update",
    title: "Forex Dashboard",
    slug: "forex-dashboard",
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
    video: "/assets/videos/forex-dash/vid.mp4",
    videoALT: "",
    mainImage: ForexDash,
    images: [
      {
        url: ForexDash0,
        caption:
          "Main screen - newly logged In account with no historical data.",
      },
      {
        url: ForexDash1,
        caption: "Login page",
      },
      {
        url: ForexDash2,
        caption:
          "Main screen with few trades. Note, this is a demo trading account, so dont judge me 😜",
      },
      {
        url: ForexDash3,
        caption: "You can see data statistics for the last 5 trading days",
      },
      {
        url: ForexDash4,
        caption: "You can visually monitor your daily growth",
      },
      {
        url: ForexDash5,
        caption: "Trade histories",
      },
      {
        url: ForexDash6,
        caption:
          "Live charts directly from TradingView - you can make your analysis here",
      },
      {
        url: ForexDash7,
        caption: "Monitor crypto assets",
      },
      {
        url: ForexDash8,
        caption: "Visualize profits gained and losses",
      },
      {
        url: ForexDash9,
        caption: "Track your lot sizes and monitore watchlist accounts",
      },
    ],
    description: [
      "Overview: The Forex Dashboard provides a visual representation of your trading accounts using complex statistical formulas. It implements chart types like pie charts, bar charts, tables, trend lines, etc., to help users identify historical patterns from trade activities, enabling more informed trading/investment decisions.",
      "Challenges: The original idea was to create a system where users could use their investor login credentials from MT4/MT5 to onboard directly, allowing the dashboard access to users' trading histories and data. However, it turned out to be too expensive. So, I switched gears to a more pragmatic approach, opting to use a free third-party API provided by MyFxbook, which came with its own set of issues and limitations. The solution works, but there's a bit of regret in not having the ideal setup 😞.",
      "Learning: This project marked my foray into full-stack development. I don't identify with a particular tool. This is a typical example because I had to learn Node.js and Express.js within a short period to use them as a backend solution for this project.",
      "Despite the hiccups, the project has grown and become a reliable tool for my trading community. It's used almost daily by a few of my forex trading friends. It serves as a reminder that progress often involves overcoming bumps in the road.",
      "Open Source: The project is openly accessible on GitHub, fostering collaboration and encouraging others to contribute to its evolution.",
    ],
  },
  {
    id: 2,
    date: "Mar 2022",
    title: "Code Dadi Theme",
    slug: "code-dadi-theme",
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
        caption:
          "Navy blue verision - get my themes now and save your eyes from pains, just a friendly advice",
      },
      {
        url: VsCodeTheme1,
        caption: "The terminal looks even more better",
      },
      {
        url: VsCodeTheme2,
        caption: "Dark version. This is my favorite 👍",
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
    date: "Apr 2022",
    title: "Photo Match",
    slug: "photo-match",
    introTitle: "Enhancing Memory Skills - The Photo Match Experience",
    liveSite: "https://photo-match.netlify.app",
    linkName: "check out the website",
    roles: "Software Developer - Web Game",
    mainRole: "Web Game",
    gitHub: "",
    technologies: ["React", "Rest API"],
    video: "/assets/videos/photo-match/vid.mp4",
    videoALT: "",
    mainImage: PhotoMatch,
    images: [
      {
        url: PhotoMatch0,
        caption:
          "Type in here what every comes to your mind and get picture results.",
      },
      {
        url: PhotoMatch1,
        caption: "You have limited time to find all matching photos",
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
    company: "PointXY",
    companyWebsite: "https://www.pointxy.app/",
    role: "Lead Software Developer",
    date: {
      start: "Apr 2024",
      end: "Present",
    },
    accomplishments: [
      {
        id: 1,
        point:
          "Leading the development of PointXY’s logistics applications across Customer, Vendor, Rider, and Business platforms, integrating advanced Google services such as geolocation, Places API for address autocomplete, Directions API for optimized routing, and Maps SDK for real-time tracking. These integrations streamlined operations and improved delivery accuracy.",
      },
      {
        id: 2,
        point:
          "Spearheaded the migration of legacy JavaScript codebase to TypeScript, reducing bugs by 50% and improving code maintainability.",
      },
      {
        id: 3,
        point:
          "Collaborated with product, UI/UX, and development teams to implement new designs for mobile apps, the website, and the admin dashboard, resulting in a 30% boost in user engagement and an enhanced overall user experience.",
      },
    ],
  },
  {
    id: 1,
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
          "Managed the entire front-end codebase, achieving a 5X increase in monthly website traffic and earning recognition from the Mastercard Foundation. Additionally, received a service award at the University of Pretoria, South Africa",
      },
      {
        id: 2,
        point:
          "Led the development of key features such as the dashboard system, interactive map, and rich text editor using JavaScript, React, and CSS/Tailwind, collaborating with a cross-functional team, including backend engineers and designers, for cohesive project outcomes.",
      },
      {
        id: 3,
        point:
          "Optimized web app performance by implementing code splitting, React Lazy Loading, and Redux for state management, reducing load times by 40% and significantly enhancing user experience.",
      },
    ],
  },
];

export default { projectData, jobData };
