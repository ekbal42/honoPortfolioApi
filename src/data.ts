import type { Project } from "./types.js";
export const projects: Project[] = [
  {
    id: "1",
    name: "Portfolio",
    description: "A portfolio website where I showcase my projects and skills.",
    imageUrl:
      "https://user-images.githubusercontent.com/76368020/203590358-6d9c2c1e-0f9b-4e3f-8b9e-6b0b9e4c9e3e.png",
    url: "https://asif-ekbal-portfolio.netlify.app/",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "2",
    name: "Hono",
    description:
      "Hono is a framework for building APIs with Node.js and TypeScript.",
    imageUrl:
      "https://user-images.githubusercontent.com/76368020/203590358-6d9c2c1e-0f9b-4e3f-8b9e-6b0b9e4c9e3e.png",
    url: "https://github.com/honojs/hono",
    tags: ["Node.js", "TypeScript"],
  },
];
