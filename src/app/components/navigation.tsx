"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/experience", label: "Experience" },
    { href: "/projects", label: "Projects" },
    { href: "https://github.com/minhchu", label: "GitHub", external: true },
    { href: "https://www.linkedin.com/in/minhchungoc/", label: "LinkedIn", external: true }
  ];

  return (
    <nav className="flex flex-wrap gap-x-8 gap-y-4">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        const baseClasses = "text-sm font-medium text-[#111318] dark:text-gray-300 link-hover";
        const activeClasses = isActive ? "underline underline-offset-4" : "";

        if (item.external) {
          return (
            <a
              key={item.href}
              className={`${baseClasses} inline-flex items-center gap-1`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          );
        }

        return (
          <Link
            key={item.href}
            className={`${baseClasses} ${activeClasses}`}
            href={item.href}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
