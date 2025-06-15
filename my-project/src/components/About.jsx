import React from "react";
import AboutImg from "../assets/About.png";
import { FaChevronRight } from "react-icons/fa";

const About = () => {
  return (
    <div id="about" className="z-50 py-20 text-gray-300 bg-gray-950">
      <div className="px-4 mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold text-center md:text-5xl mb-11">
          About Me
        </h2>
        <div className="flex flex-col items-center gap-20 md:flex-row">
          {/* img section */}
          <div className="relative border hidden md:block border-blue-600 p-1 rounded-full bg-blue-500 shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
            <img
              src={AboutImg}
              alt=""
              className="w-[300px] md:w-[800px] rounded-full border-blue-600 border shadow-blue-500 "
            />
          </div>
          {/* paragraph section */}
          <div className="p-5 md:p-10 bg-gray-950 rounded-md shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500">
            <p className="mb-6 text-lg leading-7">
              Hi! I'm Ryan Hendrawan, Front-End Developer with 7+ years of
              government administration experience, now leveraging strong
              analytical, project management, and problem-solving skills into
              building high-performance web applications.
            </p>
            <p className="mb-6 text-lg leading-7">
              Completed multiple front-end projects using React.js, Next.js, and
              modern frameworks with a perfect score and awards during intensive
              bootcamp. Passionate about delivering accessible, scalable, and
              engaging user experiences.
            </p>
            <p className="text-lg leading-7 ">
              My journey into tech began from a non-IT background, and I've
              embraced every challenge to hone my skills in development,
              problem-solving, and teamwork. I’m always eager to learn and
              explore new technologies to deliver cutting-edge web experiences.
            </p>
            <div className="mt-5">
              <h1 className="mb-5 text-2xl font-bold text-blue-400">
                My Skills
              </h1>
              <div className="flex flex-wrap gap-4 mb-5 text-sm">
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  HTML
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  CSS
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  JavaScript
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  TypeScript
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  Bootstrap
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  Tailwind
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  Node.js
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  Git
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  GitHub
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  React
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  Vite
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  Next.js
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  Jest
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  Lighthouse
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  Firebase
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  Framer Motion
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  Postman
                </p>
                <p className="px-2 py-1 text-gray-300 bg-gray-900 rounded-full cursor-pointer">
                  Figma
                </p>
              </div>
              <button
                className="flex items-center gap-1 px-3 py-1 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC]"
                onClick={() =>
                  (window.location.href = "mailto:ryanhendrawan9@gmail.com")
                }
              >
                Work With Me
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
