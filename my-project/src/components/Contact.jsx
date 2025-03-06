import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-16 bg-gray-950">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-5xl font-bold text-center text-gray-300">
          Contact Me
        </h2>
        <div className="grid gap-10 lg:grid-cols-2">
          {/* contact info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-300 lg:text-6xl">
                Let's Talk
              </h1>
              <p className="my-5 text-gray-300">
                Got a project in mind or just want to say hi? Feel free to reach
                out, let’s create something amazing together!
              </p>
              <h3 className="text-2xl font-semibold text-gray-300">Email</h3>
              <p className="mt-2 text-gray-600">
                <a
                  href="mailto:ryanhendrawan9@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  ryanhendrawan9@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">Phone</h3>
              <p className="mt-2 text-gray-600">
                <a
                  href="https://wa.me/6282192892384"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  +6282192892384
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-300">
                Follow Me
              </h3>
              <div className="flex gap-3 mt-5 text-2xl transition-all">
                <a
                  href="https://www.linkedin.com/in/ryanhendrawan9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-400 hover:text-white" />
                </a>
                <a
                  href="https://github.com/ryanhendrawan9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-blue-400 hover:text-white" />
                </a>
                <a
                  href="https://www.instagram.com/ryanhendrawan9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-blue-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
          {/* contact form */}
          <div className="bg-gray-900 rounded-lg shadow-[0px_0px_20px_10px_rgba(0,0,0,0.3)] shadow-blue-500 p-8">
            <h3 className="mb-6 text-3xl font-semibold text-gray-300">
              Get in Touch
            </h3>
            <form
              action="https://docs.google.com/forms/d/e/1FAIpQLSdNTdhI4WO_4ezs7zzkD2-t7_L6v0EfrEeLe1iieyxKN2alkg/formResponse?usp=dialog"
              method="POST"
              target="_blank"
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="entry.697390927"
                  required
                  className="w-full p-3 mt-1 text-gray-300 border border-gray-300 rounded-lg shadow-sm bg-gray-950 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="entry.1620178198"
                  required
                  className="w-full p-3 mt-1 text-gray-300 border border-gray-300 rounded-lg shadow-sm bg-gray-950 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  name="entry.2034552730"
                  rows={5}
                  required
                  className="w-full p-3 mt-1 text-gray-300 border border-gray-300 rounded-lg shadow-sm bg-gray-950 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-white transition-colors bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
