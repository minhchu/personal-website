import { experiences } from "../../data/experience";
import { Navigation } from "../components/navigation";
import { ThemeToggle } from "../components/theme-toggle";

export const metadata = {
  title: "Experience | Chu Ngoc Minh",
  description: "Professional experience and career timeline",
};

export default function ExperiencePage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-[#e0e0e0] transition-colors duration-300 h-screen flex flex-col">
      <div className="relative flex h-full w-full flex-col overflow-hidden px-8 py-8 md:px-16 md:py-12 lg:px-24 lg:py-14 max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4 mb-16 w-full shrink-0">
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#111318] dark:text-white">
              Chu Ngoc Minh
            </h1>
          </div>
          <Navigation />
        </header>

        <main className="flex-1 overflow-y-auto no-scrollbar w-full">
          <div className="flex flex-col gap-12 max-w-4xl pb-12">
            {experiences.map((experience) => (
              <div key={experience.id} className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-x-12 group">
                <div className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#616f89] dark:text-gray-500 pt-1.5">
                  {experience.period}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 border-b border-gray-100 dark:border-gray-800 pb-1">
                    <h3 className="font-bold text-[18px]">{experience.title}</h3>
                    <span className="text-sm font-medium text-[#111318] dark:text-white">{experience.company}</span>
                  </div>
                  <p className="text-[15px] leading-relaxed text-[#4a5568] dark:text-gray-400 mt-1">
                    {experience.description}
                  </p>
                  <p className="text-[13px] text-[#616f89] dark:text-gray-500 font-medium italic">
                    Tech: {experience.technologies}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </main>

        <ThemeToggle />
      </div>
    </div>
  );
}
