type Work = {
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
}[];

export const projectData = [
  {
    id: 0,
    date: 2021,
    tittle: "",
    liveSite: "",
    roles: "",
    gitHub: "",
    technologies: {
      frontEnd: "",
      backEnd: "",
    },
    vid: "",
    description: "",
  },
];

export const jobData: Work = [
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
  {
    id: 1,
    company: "Upstatement",
    companyWebsite: "google.com",
    role: "Lead Engineer",
    date: {
      start: "May 2018",
      end: "Present",
    },
    accomplishments: [
      {
        id: 1,
        point:
          "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
      },
      {
        id: 3,
        point:
          "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
      },
    ],
  },
];

export default { projectData, jobData };
