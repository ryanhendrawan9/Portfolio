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
              Hi! I'm Ryan Hendrawan, Government professional with 7+ years of
              experience in cultural heritage and museum management, skilled in
              preserving cultural assets and enhancing public engagement.
            </p>
            <p className="mb-6 text-lg leading-7">
              Pursuing a career in frontend developer, with a focus on creating
              visually engaging and accessible websites. Ready to combine
              cultural insights and technical skills to craft impactful digital
              experiences for users.
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
                  GIT
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
                  Figma
                </p>
              </div>
              <button
                className="flex items-center gap-1 px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600"
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
