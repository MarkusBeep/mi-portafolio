export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  isProfessional?: boolean;
}

export interface WebProject {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  isProfessional?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/MarkusBeep",
    icon: "Github", // Icono de Lucide
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/tu-usuario",
    icon: "Linkedin",
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@MarkusSounds", // Para tu proyecto musical
    icon: "Youtube",
  },
  {
    name: "Email",
    url: "mailto:marcoshl510@gmail.com",
    icon: "Mail",
  },
];

export const personalData = {
  name: "Marcos Herrera",
  role: "Web Developer",
  bio: "Specialized in WordPress/Elementor - Javascript.",
  email: "marcoshl510@gmail.com",
  socials: {
    github: "https://github.com/MarkusBeep",
    linkedin: "https://www.linkedin.com/in/mar-h/",
    youtube: "https://youtube.com/@MarkusSounds",
  },
};

export const projects: Project[] = [
  {
    title: "Portafolio Web",
    description:
      "Sitios web personales desarrollados con React, TypeScript y Tailwind CSS v4.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/MarkusBeep",
  },
  {
    title: "Desarrollo WordPress Custom",
    description:
      "Sitios desarrollados con experiencia profesional con layouts personalizados usando Elementor y ACF.",
    tags: ["WordPress", "Elementor", "ACF"],
    link: "https://ejemplo.com",
  },
];

export const skillsData: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5/CSS3",
      "Vite",
    ],
  },
  {
    category: "CMS & WordPress",
    skills: ["WordPress", "Elementor", "Advanced Custom Fields (ACF)"],
  },
  {
    category: "tools & Others",
    skills: ["Git", "GitHub", "Responsive Design"],
  },
];

export const portfolioWebs: WebProject[] = [
  {
    title: "Carrozzini Studios",
    description:
      "Professional Website developed in Wordpress with responsive design, strucure optimization and custom designing",
    tags: ["WordPress", "Elementor"],
    link: "https://carrozzinistudios.com/",
    isProfessional: true,
  },
  {
    title: "Unidad Educativa Emanuel",
    description:
      "Institutional web page for Unidad Educativa Emanuel, focused on the academic presentation",
    tags: ["WordPress", "Elementor"],
    link: "https://www.emanuel.edu.ec/",
    isProfessional: true,
  },
  {
    title: "Portafolio Web Dev",
    description:
      "Personal Portfolio to show personal and professional projects",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    github: "https://github.com",
    isProfessional: false,
  },

  {
    title: "Budget calculator",
    description:
      "Budget tool to calculate shopping activites with IVA calculation percentages",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/MarkusBeep",
    link: "https://markusbeep.github.io/cotizaciones/",
    isProfessional: false,
  },
];

export interface SkillProficiency {
  name: string;
  level: number;
  label: "Begginer" | "Expert" | "Advanced" | "Intermediate";
}

export const skillProficiency: SkillProficiency[] = [
  { name: "HTML & CSS", level: 90, label: "Expert" },
  { name: "JavaScript", level: 88, label: "Expert" },
  { name: "WordPress", level: 82, label: "Advanced" },
  { name: "React", level: 65, label: "Intermediate" },
  { name: "TypeScript", level: 20, label: "Begginer" },
];
