"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-[#111318] dark:text-[#e0e0e0] transition-colors duration-300">
      <div className="relative min-h-screen w-full flex flex-col px-8 py-12 md:px-24 md:py-24 lg:px-48 lg:py-32">
        <main className="flex flex-col h-full w-full">
          <header className="mb-16 flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            <div>
              <h1 className="text-[28px] font-bold tracking-tight text-[#111318] dark:text-white mb-1">
                Chu Ngoc Minh
              </h1>
              <p className="text-sm text-[#616f89] dark:text-gray-400 font-medium italic">
                Software Engineer & Systems Enthusiast
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-8 gap-y-4">
              <a className="text-sm font-medium text-[#111318] dark:text-gray-300 link-hover" href="#">Experience</a>
              <a className="text-sm font-medium text-[#111318] dark:text-gray-300 link-hover" href="#">Projects</a>
              <a className="text-sm font-medium text-[#111318] dark:text-gray-300 link-hover" href="#">GitHub</a>
              <a className="text-sm font-medium text-[#111318] dark:text-gray-300 link-hover" href="#">LinkedIn</a>
              <a className="text-sm font-medium text-[#111318] dark:text-gray-300 link-hover" href="#">CV/Resume</a>
            </nav>
          </header>

          <section className="flex flex-col text-[17px] leading-relaxed text-[#111318] dark:text-gray-200 max-w-2xl">
            <p>
              I build tools and infrastructure with a focus on simplicity, performance, and correctness. My work revolves around the intersection of low-level systems programming and scalable architectural design.
            </p>
            <p>
              Currently, I am exploring distributed systems, compiler design, and the development of minimalist user interfaces that prioritize information density. I believe that software should be as invisible as possible, serving as a reliable extension of human thought rather than a distraction.
            </p>
            <p>
              Operating out of Hanoi, I spend my time contributing to open-source projects, studying legacy hardware architectures, and refining my craft in systems-level languages like Rust and C.
            </p>
            <p>
              In my professional capacity, I focus on building resilient backend services and developer tools that empower teams to ship faster without sacrificing stability.
            </p>
          </section>

          <footer className="mt-24 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-8 max-w-2xl">
            <div className="flex items-center justify-between">
              <a className="text-xs text-[#616f89] dark:text-gray-500 hover:text-primary transition-colors" href="mailto:contact@chuminh.me">
                contact@chuminh.me
              </a>
            </div>
          </footer>
        </main>

        <div className="fixed bottom-8 right-8">
          <button 
            className="p-2 text-[#616f89] hover:text-primary transition-colors"
            onClick={toggleDarkMode}
          >
            <span className="material-symbols-outlined text-[20px]">dark_mode</span>
          </button>
        </div>
      </div>
    </div>
  );
}
