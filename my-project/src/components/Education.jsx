import React from "react";

const education = [
  {
    institution: "dibimbing.id",
    degree: "Front-End Web Development",
    year: "Nov 2024 - May 2025",
    description: [
      "Final Score : 98.14 (A+)",
      "Award : Most Valuable Player, Best Final Portfolio Project and Most Active Student",
    ],
    icon: "🎓",
  },
  {
    institution: "Universitas Lambung Mangkurat",
    degree: "Bachelor of Law",
    year: "2016 - 2022",
    description: [],
    icon: "🎓",
  },
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Senstech (Internship)",
    year: "Jun 2025 - Aug 2025",
    description: [],
    icon: "💼",
  },
  {
    role: "Government Administration",
    company: "Dinas Pendidikan dan Kebudayaan Prov. Kalimantan Selatan",
    year: "2018 - Present",
    description: [],
    icon: "💼",
  },
];

const Education = () => {
  return (
    <section id="education" className="px-6 py-16 bg-gradient-to-r bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-4xl font-extrabold text-center text-gray-300 md:text-5xl">
          Education & Experience
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Education section */}
          <div>
            <h3 className="mb-6 text-3xl font-semibold text-gray-300">
              Education
            </h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="flex items-start p-6 mb-6 transition-transform transform bg-gray-900 shadow-md rounded-xl hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mr-6 text-4xl text-blue-500">{edu.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-200">
                    {edu.institution}
                  </h4>
                  <p className="text-gray-300">{edu.degree}</p>
                  <p className="text-sm italic text-gray-300">{edu.year}</p>
                  {/* Render array description */}
                  {edu.description.length > 0 && (
                    <div className="mt-2">
                      {edu.description.map((desc, i) => (
                        <p key={i} className="text-gray-300">
                          {desc}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Experience Section */}
          <div>
            <h3 className="mb-6 text-3xl font-semibold text-gray-300">
              Experience
            </h3>
            {experience.map((exp, index) => (
              <div
                key={index}
                className="flex items-start p-6 mb-6 transition-transform transform bg-gray-900 shadow-md rounded-xl hover:shadow-xl hover:-translate-y-2"
              >
                <div className="mr-6 text-4xl text-blue-500">{exp.icon}</div>
                <div>
                  <h4 className="text-xl font-bold text-gray-200">
                    {exp.role}
                  </h4>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-sm italic text-gray-300">{exp.year}</p>
                  {/* Render array description */}
                  {exp.description.length > 0 && (
                    <div className="mt-2">
                      {exp.description.map((desc, i) => (
                        <p key={i} className="text-gray-300">
                          {desc}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
