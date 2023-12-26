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
        id: 2,
        point:
          "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
      },
      {
        id: 3,
        point:
          "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
      },
      {
        id: 4,
        point:
          "Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship",
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
