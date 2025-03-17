import React from "react";
import { Download } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Profile from "../assets/profile.png";
import { motion } from "framer-motion";
import "../css/Hero.css";
import CV from "../assets/CV-Ryan-Hendrawan-2025.pdf";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-col items-center justify-center pb-10 text-white h-max md:h-screen bg-gradient-to-l bg-gray-950"
    >
      {/* stars */}
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="flex flex-col items-center justify-between gap-16 mx-auto mt-24 max-w-7xl md:flex-row md:gap-40">
        <div className="px-4 md:space-y-6">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-4 text-4xl font-bold md:text-6xl"
          >
            Hi👋, I'm <p className="text-blue-400">Ryan Hendrawan</p>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="mb-3 text-xl md:text-2xl"
          >
            Frontend Developer
          </motion.p>
          <motion.button
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="px-3 py-2 flex items-center gap-2 bg-blue-500 rounded-md text-white hover:bg-blue-600 shadow-blue-500 border-2 border-blue-400 transition-all shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] "
            onClick={() => {
              const link = document.createElement("a");
              link.href = CV;
              link.download = "CV Ryan Hendrawan.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <Download className="w-5 h-5" /> Download CV
          </motion.button>
          <div className="flex gap-3 mt-5 text-2xl transition-all md:mt-0">
            <a
              href="https://www.linkedin.com/in/ryanhendrawan9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-400" />
            </a>
            <a
              href="https://github.com/ryanhendrawan9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-blue-400" />
            </a>
            <a
              href="https://www.instagram.com/ryanhendrawan9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="hover:text-blue-400" />
            </a>
          </div>
        </div>
        <div className="relative group">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0 }}
            src={Profile}
            alt=""
            className="rounded-full border border-blue-600 md:w-[350px] w-[250px] shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
