import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "React",
        icon: react,
        iconBg: "#accbe1",
        date: "September 2024 - Present",
        points: [
            "Building responsive portfolios using React.js with seamless 3D integration.",
            "Crafting dynamic designs with React.js and optimizing cross-device performance.",
            "Incorporating interactive 3D elements for visually striking applications.",
            "Developing and maintaining modern, responsive portfolio projects.",
            "Ensuring cross-browser compatibility and smooth user experiences."
        ],
    },
    {
        title: " UI/UX Designer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Juin 2023 - Present",
        points: [
            "Designing user-friendly interfaces with a focus on accessibility and aesthetics.",
            "Creating intuitive UX flows to enhance user engagement and satisfaction.",
            "Developing responsive designs that adapt seamlessly across all devices.",
            "Prototyping and iterating designs based on user feedback and testing.",
            "Balancing functionality and visual appeal in modern UI/UX designs.",
        ],
    },
    {
        title: "Concept Designer",
        company_name: "Shopify",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Jan 2023 - Present",
        points: [
            "Brainstorming and creating product ideas.",
            "Sketching and prototyping design concepts.",
            "Refining designs with team feedback.",
            "Turning ideas into clear plans.",
            "Ensuring designs meet project goals.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "Meta",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Jan 2024 - Present",
        points: [
            "Building end-to-end web applications with both front-end and back-end technologies.",
            "Creating responsive and dynamic user interfaces that enhance user experiences.",
            "Developing server-side logic and ensuring efficient API integrations.",
            "Managing databases and implementing secure data handling practices.",
            "Optimizing application performance and scalability for diverse use cases.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/shahdbelhadj/shahdbelhadj',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shahdbelhadj',
    }
];

export const projects = [
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Restaurant Application',
        description: "Developed a web application for real-time restaurant reservations with user-friendly booking features."
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Malware',
        description: "Created a Python malware project designed to encrypt files as a demonstration of cybersecurity vulnerabilities."
        
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Face Detection',
        description:" Developed an IoT app with face detection for secure access control."
    }
]