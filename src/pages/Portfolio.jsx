import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Phone,
} from "lucide-react";
import myImage from "../assets/myImage.png";
import DriveEase from "../assets/DriveEase.png";
import bbEnterprise from "../assets/bbEnterprise.png";
import adab from "../assets/adab.png";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "DriveEase",
      description:
        "Modern car rental web application platform with AI recommendations",
      image: DriveEase,
      tech: ["React", "Node.js", "Mongodb"],
      color: "from-purple-500 to-pink-500",
      live: "https://drive-ease-frontend-xi.vercel.app/",
      code: "https://github.com/yourname/driveease",
    },
    {
      title: "Adab",
      description:
        "Modern shopping experience with razorpay payment integration",
      image: adab,
      tech: ["React.js", "node.js", "mongodb"],
      color: "from-blue-500 to-cyan-500",
      live: "https://adab.onrender.com/",
      code: "https://github.com/yourname/driveease",
    },
    {
      title: "Marketing Agency Site",
      description:
        "A responsive static landing page featuring smooth animations and a clean, modern design",
      image: bbEnterprise,
      tech: ["React.js", "aos", "tailwind css "],
      color: "from-orange-500 to-red-500",
      live: "https://bbenterprise.onrender.com/",
      code: "https://github.com/yourname/driveease",
    },
  ];

  const skills = [
    { name: "React & Next.js", level: 92 },
    { name: "UI/UX Design", level: 82 },
    { name: "javascript", level: 42 },
    { name: "Node.js", level: 85 },
    { name: "Python & AI", level: 20 },
  ];

  const handleProjectClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20"></div>
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
            transition: "all 0.3s ease-out",
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl animate-bounce"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-gray-900/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Muhzine ck
            </div>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSection(item.toLowerCase())}
                  className={`transition-all duration-300 hover:text-purple-400 ${
                    activeSection === item.toLowerCase()
                      ? "text-purple-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-gray-900/95 backdrop-blur-lg">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActiveSection(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className="text-2xl hover:text-purple-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Home Section */}
      {activeSection === "home" && (
        <section className="mt-30 relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto">
            {/* Profile image with animated circle */}
            <div className="mb-8 animate-pulse">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src={myImage}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Creative
              </span>
              <br />
              <span className="text-white">Developer</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
              Crafting digital experiences that blend innovation with stunning
              design.
              <br />
              Specializing in modern web applications and interactive
              interfaces.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => setActiveSection("projects")}
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
              >
                View My Work
                <ExternalLink className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => setActiveSection("contact")}
                className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>

            {/* Scroll Down Icon */}
            <div className="mt-16 animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto text-purple-400" />
            </div>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === "about" && (
        <section className="relative z-10 min-h-screen flex items-center px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  About Me
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a passionate web developer and designer with 1+ years of
                  experience creating digital experiences that make a
                  difference. I specialize in modern frameworks, cutting-edge
                  design trends, and performance optimization.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  When I'm not coding, you'll find me exploring new design
                  trends, contributing to open-source projects, or experimenting
                  with AI.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-purple-400 mb-6">
                  Skills & Expertise
                </h3>
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-purple-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === "projects" && (
        <section className="relative z-10 min-h-screen px-6 py-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project.live);
                        }}
                        className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleProjectClick(project.code);
                        }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors duration-300 bg-transparent border-none cursor-pointer p-0"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </button>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <section className="relative z-10 min-h-screen flex items-center px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent pb-2">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Ready to bring your vision to life? I'm always excited to work on
              new projects and collaborate with amazing people.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div
              className="group p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-gray-400">muhsinck77@gmail.com</p>
              </div>

              <div className="group p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <Linkedin className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-400">@Muhsin Muhsin</p>
              </div>

              <div className="group p-6 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <Github className="w-8 h-8 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold mb-2">GitHub</h3>
                <p className="text-gray-400">@muhsinmuhsi</p>
              </div>
            </div>


            <div className="p-2">
              <Phone className="inline"/> +91 7025328136
            </div>

            <button className="px-12 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              Start a Project
            </button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-gray-800">
        <p className="text-gray-500">
          © 2025 muammed muhsin ck. Crafted with passion and modern tech.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;