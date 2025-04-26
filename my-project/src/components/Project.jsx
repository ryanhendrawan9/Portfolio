import React from "react";
import Wedding from "../assets/project-1.png";
import Figma from "../assets/project-2.png";
import Cafe from "../assets/project-3.png";
import Portfolio from "../assets/project-4.png";
import Reqres from "../assets/project-5.png";
import Netflix from "../assets/project-6.png";
import Food from "../assets/project-7.png";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      title: "Wedding Invitation",
      description:
        "This is my first project and The Beginning of My Tech Love Story was Inspired by a tutorial from YouTube's Sandhika Galih, I learned how to design a website that is elegant, responsive, and interactive.",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      link: "https://ryanhendrawan9.github.io/ulhaqkarin/",
      github: "https://github.com/ryanhendrawan9/ulhaqkarin.git",
      image: Wedding,
    },
    {
      title: "Restaurant UI Design",
      description:
        "In this project, I focused on creating a clean, user-friendly interface that delivers a seamless experience. Working on this helped me sharpen my Figma skills and refine my understanding of user-centered design principles.",
      techStack: ["Figma"],
      link: "https://www.figma.com/proto/FxbiuU3YZ7xhBHVwQkWoKz/Assignment_DayVL_RyanHendrawan?node-id=33-199&p=f&t=LYRiDkKUXdGvx1Ku-1&scaling=contain&content-scaling=fixed&page-id=0%3A1",
      image: Figma,
    },
    {
      title: "Flagship Harvest Supply",
      description:
        "A modern and responsive café website, featuring a clean UI, smooth animations, and a fully adaptive layout. Highlights include a stylish menu display, testimonials, and an interactive contact section.",
      techStack: ["HTML", "CSS", "JavaScript", "Tailwind"],
      link: "https://ryanhendrawan9.github.io/flagshipharvestsupply/",
      github: "https://github.com/ryanhendrawan9/flagshipharvestsupply.git",
      image: Cafe,
    },
    {
      title: "Portfolio",
      description:
        "A modern and responsive portfolio website built with React.js, Vite, Tailwind CSS, and Framer Motion. Showcasing my projects, skills, and experiences with smooth animations and an engaging UI.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "React",
        "Vite",
        "Framer Motion",
      ],
      link: "https://ryanhendrawan9.github.io/Portfolio/",
      github: "https://github.com/ryanhendrawan9/Portfolio.git",
      image: Portfolio,
    },
    {
      title: "Mini Project Reqres API",
      description:
        "In this project, I’ve learned how to handle user authentication with Reqres API, fetch dynamic data, and implement animations that enhance user experience using Framer Motion. This helped me improve both my front-end and animation skills.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "React",
        "Vite",
        "Framer Motion",
        "Reqres API",
      ],
      link: "https://miniproject-reqres.vercel.app/",
      github: "https://github.com/ryanhendrawan9/miniproject-reqres.git",
      image: Reqres,
    },
    {
      title: "Netflix Clone",
      description:
        "Netflix Clone Website With Movie Database API and Firebase User Authentication In React JS",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Vite",
        "TMDB API",
        "Firebase",
      ],
      link: "https://clone-netflix-react-iota.vercel.app/",
      github: "https://github.com/ryanhendrawan9/clone-netflix-react.git",
      image: Netflix,
    },
    {
      title: "Dibimbing Food",
      description:
        "Next.js food discovery web app featuring modern UI with glassmorphism design, JWT authentication, CRUD operations, responsive layout, and real-time notifications. This project developed my skills in state management, component reusability, and creating intuitive user experiences with consistent styling.",
      techStack: [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind",
        "React",
        "Next.js",
        "API",
        "CRUD",
        "Jest",
      ],
      link: "https://dibimbing-food-nextjs.vercel.app/",
      github: "https://github.com/ryanhendrawan9/DibimbingFood-Nextjs.git",
      image: Food,
    },
  ];
  return (
    <section id="project" className="px-6 py-16 bg-gray-950 bg-gradient-to-r">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-5xl font-bold text-center text-gray-300">
          Projects
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden transition-transform transform bg-gray-900 rounded-lg shadow-lg hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48 px-3 pt-3 rounded-2xl"
              />
              <div className="p-6">
                <h3 className="mb-2 text-2xl font-semibold text-gray-300">
                  {project.title}
                </h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1 text-sm font-medium text-gray-300 bg-gray-700 rounded-full"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]"
                  >
                    View Project
                  </a>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 text-white transition-colors bg-gray-700 rounded-lg shadow-md hover:bg-gray-500"
                    >
                      <FaGithub /> Github
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
