export interface Project {
    id: string;
    name: string;
    description: string;
    features: string[];
    technologies: string;
    url: string;
}

export const projects: Project[] = [
    {
        id: "pwgen",
        name: "pwgen",
        description: "A fast, flexible command-line password generator built in Rust. Generate secure random passwords or memorable word-based passphrases with customizable length, special characters, and more.",
        features: [
            "Cryptographically secure random passwords",
            "Memorable word-based passphrases",
            "Configurable length and character sets",
            "Library and CLI support"
        ],
        technologies: "Rust, Clap, Rand",
        url: "https://github.com/minhchu/pwgen"
    }
];
