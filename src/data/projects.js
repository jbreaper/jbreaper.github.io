const projects = [{
        id: 1,
        title: "TTRPG Character Sheet TUI",
        description: "A terminal user interface for managing TTRPG characters",
        tech: "Rust",
        techDetails: [
            "Ratatui framework for terminal UI",
            "Serde for serialization",
            "Structopt for CLI arguments",
            "Custom state management system",
            "Character data saved in JSON format"
        ],
        longDescription: "This project aims to create a comprehensive terminal-based UI for managing tabletop RPG character sheets. It uses Rust for performance and memory safety, with a focus on efficient keyboard navigation and a responsive interface.",
        startDate: "January 2023",
        progress: 75,
        githubLink: "https://github.com/yourusername/ttrpg-character-tui",
        features: [
            "Character creation wizard",
            "Stat tracking and modification",
            "Inventory management",
            "Spell and ability cataloging",
            "Export to PDF and JSON formats"
        ]
    },
    {
        id: 2,
        title: "Pi OS",
        description: "Operating system for Raspberry Pi",
        tech: "Rust",
        techDetails: [
            "Bare metal Rust implementation",
            "Custom bootloader",
            "Implementation of UART, GPIO interfaces",
            "Async/await runtime",
            "Memory management system"
        ],
        longDescription: "Pi OS is a minimal operating system written in Rust for the Raspberry Pi platform. It focuses on providing a lightweight, secure foundation for embedded applications while maintaining modern language features.",
        startDate: "March 2022",
        progress: 30,
        githubLink: "https://github.com/yourusername/pi-os",
        features: [
            "Bare metal scheduler",
            "Basic device drivers",
            "Network stack (in progress)",
            "File system implementation",
            "Simple shell interface"
        ]
    },
    {
        id: 3,
        title: "Personal Website",
        description: "Portfolio website built with React",
        tech: "React",
        techDetails: [
            "React library with hooks",
            "React Router for navigation",
            "CSS modules for styling",
            "Responsive design",
            "Terminal-style UI"
        ],
        longDescription: "My personal website showcases my programming projects and skills. It features a unique terminal-style interface that reflects my interest in command-line tools and retro computing aesthetics.",
        startDate: "February 2023",
        progress: 90,
        githubLink: "https://github.com/yourusername/personal-website",
        features: [
            "Project portfolio",
            "Interactive terminal interface",
            "Responsive design",
            "Dark/light mode",
            "Blog section (planned)"
        ]
    }
];

export default projects;