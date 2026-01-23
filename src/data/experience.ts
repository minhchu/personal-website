export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string;
}

export const experiences: Experience[] = [
  {
    id: "doke-ai",
    title: "Senior Backend Engineer",
    company: "Doke.ai",
    period: "2023 — Present",
    description: "Spearheaded backend architecture for high-performance AI tools.",
    technologies: "FastAPI, Next.js, Supabase"
  },
  {
    id: "webprovise",
    title: "Full Stack Engineer", 
    company: "WebProvise",
    period: "2021 — 2023",
    description: "Designed system architecture for scalable e-commerce solutions.",
    technologies: "Node.js, React, AWS, MongoDB"
  },
  {
    id: "freelance",
    title: "Software Consultant",
    company: "Freelance", 
    period: "2020 — 2021",
    description: "Delivered custom full-stack solutions for global clients.",
    technologies: "Python, Django, React Native"
  },
  {
    id: "beeketing",
    title: "Software Engineer",
    company: "Beeketing",
    period: "2019 — 2020", 
    description: "Optimized marketing automation microservices for high throughput.",
    technologies: "Golang, Kubernetes, Vue.js"
  },
  {
    id: "sero-ai",
    title: "Backend Developer",
    company: "Sero.ai",
    period: "2018 — 2019",
    description: "Built crop disease detection APIs serving thousands of farmers.",
    technologies: "Python, TensorFlow, Flask"
  },
  {
    id: "hackanoi",
    title: "Core Organizer",
    company: "Hackanoi",
    period: "2018",
    description: "Orchestrated large-scale hackathons fostering local tech talent.",
    technologies: "Community Building, Event Mgmt"
  },
  {
    id: "tumita",
    title: "Frontend Developer",
    company: "Tumita",
    period: "2017 — 2018",
    description: "Developed responsive UI components for travel booking platforms.",
    technologies: "React, Redux, SCSS"
  },
  {
    id: "azebiz",
    title: "Junior Developer",
    company: "Azebiz", 
    period: "2016 — 2017",
    description: "Maintained legacy systems and implemented new feature modules.",
    technologies: "PHP, Laravel, jQuery"
  }
];
