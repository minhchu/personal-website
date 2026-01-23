import { ThemeToggle } from "./components/theme-toggle";

export default function Home() {

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-[#e0e0e0] transition-colors duration-300">
      <div className="relative min-h-screen w-full flex flex-col px-8 py-12 md:px-24 md:py-16 lg:px-48 lg:py-24">
        <main className="flex flex-col h-full w-full">
          <header className="mb-16 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            <div>
              <h1 className="text-[28px] font-bold tracking-tight text-[#111318] dark:text-white mb-1">
                Minh Chu
              </h1>
              <p className="text-sm text-[#616f89] dark:text-gray-400 font-medium italic">
                Software Engineer & Systems Enthusiast
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-4">
              <a className="text-sm font-medium text-[#111318] dark:text-gray-300 link-hover" href="#">Experience</a>
              <a className="text-sm font-medium text-[#111318] dark:text-gray-300 link-hover inline-flex items-center gap-1" href="https://github.com/minhchu" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="text-sm font-medium text-[#111318] dark:text-gray-300 link-hover inline-flex items-center gap-1" href="https://www.linkedin.com/in/minhchungoc/" target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </nav>
          </header>

          <section className="flex flex-col text-[17px] leading-relaxed text-[#111318] dark:text-gray-200 max-w-2xl">
            <p>
              I am a software engineer who enjoys the process of discovery through code. I specialize in building scalable products and robust software architecture, with a strong focus on minimizing technical debt and ensuring long-term maintainability.
            </p>
            <p>
              My experience spans from early-stage startups to established platforms. I&apos;ve taken ownership of entire system architectures, mentored teams, and delivered full-stack solutions across diverse domains including health-tech, e-commerce, and AI-driven agricultural tools.
            </p>
            <p>
              Operating out of Hanoi, I am always looking for new challenges that allow me to leverage my skills to build efficient and impactful tools.
            </p>
          </section>

          <footer className="mt-24 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-8 max-w-2xl">
            <div className="flex items-center justify-between">
              <a className="text-xs text-[#616f89] dark:text-gray-500 hover:text-primary transition-colors" href="mailto:contact@chuminh.me">
                © 2026 Minh Chu
              </a>
            </div>
          </footer>
        </main>

        <ThemeToggle />
      </div>
    </div>
  );
}
