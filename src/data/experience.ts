export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string;
  url?: string;
}

export const experiences: Experience[] = [
  {
    id: "doke-ai",
    title: "Full-stack developer",
    company: "Doke.ai",
    period: "Aug 2025 — Dec 2025",
    description: "Built document data extraction platform enabling users to upload documents and extract structured data instantly with API integration.",
    technologies: "FastAPI, Next.js, Supabase, Clerk, OpenAI API, Stripe, Inngest",
    url: "https://doke.ai"
  },
  {
    id: "webprovise",
    title: "Back-end developer",
    company: "WebProvise",
    period: "Aug 2023 — Apr 2025",
    description: "Designed and developed health management platform from ground up, providing technical leadership and mentoring team members.",
    technologies: "MedusaJS, NestJS, GraphQL, Redis, Docker, Kubernetes, Next.js, PostgreSQL, Stripe, LangChain",
    url: "https://wellehealth.com"
  },
  {
    id: "freelance",
    title: "Freelance developer",
    company: "Freelance",
    period: "Apr 2019 — Aug 2023",
    description: "Developed multiple full-stack applications including CRM systems, webinar platforms, headless CMS migrations, and social network platforms.",
    technologies: "React, TypeScript, Laravel, Next.js, Supabase, AWS, Chakra UI, Tailwind CSS"
  },
  {
    id: "beeketing",
    title: "Full-stack developer",
    company: "Beeketing (now OpenCommerce)",
    period: "Apr 2018 — Apr 2019",
    description: "Built core platform features including tracking system, drag-and-drop email builder, and review monitoring with web scraping.",
    technologies: "Golang, gRPC, Vue.js, PHP, Python, MySQL, Redis, RabbitMQ"
  },
  {
    id: "sero-ai",
    title: "Full-stack developer",
    company: "Sero.ai",
    period: "Mar 2016 — Feb 2018",
    description: "Developed mobile and web apps for crop management with AI-powered disease detection and expert guidance system.",
    technologies: "Node.js, React.js, React Native, MongoDB, MySQL, AWS, Jenkins"
  }
];
