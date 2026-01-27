import { projects } from "../../data/projects";
import { Navigation } from "../components/navigation";
import { ThemeToggle } from "../components/theme-toggle";

export const metadata = {
    title: "Projects | Minh Chu",
    description: "Open source projects and side projects",
};

export default function ProjectsPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-[#e0e0e0] transition-colors duration-300 h-screen flex flex-col">
            <div className="relative flex h-full w-full flex-col overflow-hidden px-8 py-8 md:px-16 md:py-12 lg:px-24 lg:py-14 max-w-7xl mx-auto">
                <header className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-4 mb-16 w-full shrink-0">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-[#111318] dark:text-white">
                            Minh Chu
                        </h1>
                    </div>
                    <Navigation />
                </header>

                <main className="flex-1 overflow-y-auto no-scrollbar w-full">
                    <div className="flex flex-col gap-12 max-w-4xl pb-12">
                        {projects.map((project) => (
                            <div key={project.id} className="flex flex-col gap-3">
                                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-1 border-b border-gray-100 dark:border-gray-800 pb-2">
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold text-[18px] text-blue-600 dark:text-blue-400 hover:underline"
                                    >
                                        {project.name}
                                    </a>
                                    <span className="text-[11px] uppercase tracking-[0.15em] font-bold text-[#616f89] dark:text-gray-500">
                                        Open Source
                                    </span>
                                </div>
                                <p className="text-[15px] leading-relaxed text-[#4a5568] dark:text-gray-400">
                                    {project.description}
                                </p>
                                <ul className="list-disc list-inside text-[14px] text-[#4a5568] dark:text-gray-400 space-y-1">
                                    {project.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                                <p className="text-[13px] text-[#616f89] dark:text-gray-500 font-medium italic">
                                    Tech: {project.technologies}
                                </p>
                            </div>
                        ))}
                    </div>
                </main>

                <ThemeToggle />
            </div>
        </div>
    );
}
