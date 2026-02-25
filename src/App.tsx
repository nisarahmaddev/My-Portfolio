import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Send,
  Download,
} from "lucide-react";
import { ProjectCard } from "./components/ProjectCard";
import { SkillChip } from "./components/SkillChip";
import { TimelineItem } from "./components/TimelineItem";
import { FloatingShapes } from "./components/FloatingShapes";
import { TypeWriter } from "./components/TypeWriter";
import { ParticleField } from "./components/ParticleField";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollReveal } from "./components/ScrollReveal";
import { ThemeProvider, useTheme } from "./components/ThemeProvider";
import { ThemeToggle } from "./components/ThemeToggle";
import { ImageWithFallback } from "./components/figma/imageWithFallback";
import ERROR_IMG_SRC from "./assets/main.png";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
}

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

function AppContent() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (theme === "dark") {
      document.body.style.cursor = "none";
    } else {
      document.body.style.cursor = "auto";
    }
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [theme]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const projects: Project[] = [
    {
      title: "Todo List App",
      description:
        "A sleek and intuitive todo list application with drag-and-drop functionality, real-time syncing, and customizable themes.",
      image:
        "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4NTQ3Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
      liveUrl: "https://todo-list-app-sepia-three.vercel.app/",
      codeUrl: "https://github.com/nisarahmaddev/Todo-List",
    },
    {
      title: "CRUD Application",
      description:
        "Cross-platform mobile banking application with biometric authentication and real-time transaction monitoring.",
      image:
        "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU4NTQ3Mzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React Native", "TypeScript", "Firebase", "Expo"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com/nisarahmaddev/profile-manager",
    },
    {
      title: "Magic Memory",
      description:
        "Full-stack e-commerce solution with inventory management, payment processing, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODQ2OTIyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Next.js", "TypeScript", "Stripe", "Supabase"],
      liveUrl: "https://magic-memory-app.vercel.app/",
      codeUrl: "https://github.com/nisarahmaddev/Magic-Memory",
    },
    {
      title: "Github User Finder",
      description:
        "Collaborative project management application with real-time updates, team collaboration, and productivity analytics.",
      image:
        "https://images.unsplash.com/photo-1651055693398-0d66969cf759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGFwcHxlbnwxfHx8fDE3NTg0NjMwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "TypeScript", "Socket.io", "Node.js"],
      liveUrl: "https://github-user-finder-vercel.vercel.app",
      codeUrl: "https://github.com/nisarahmaddev/Github-User-Finder",
    },
    {
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website showcasing creative work with smooth animations and interactive elements.",
      image:
        "https://images.unsplash.com/photo-1649000808933-1f4aac7cad9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1ODU1NTQyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Vercel"],
      liveUrl: "https://example.com",
      codeUrl: "https://github.com",
    },
    {
      title: "Ecommerce Store",
      description:
        "Full-stack e-commerce solution with inventory management, payment processing, and admin dashboard.",
      image:
        "https://images.unsplash.com/photo-1641567535859-c58187ac4954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU4NTU5NzEyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Vue.js", "TypeScript", "OpenWeather API", "Mapbox"],
      liveUrl: "https://ecommerce-store-vercel-six.vercel.app/",
      codeUrl: "https://github.com/nisarahmaddev/Ecommerce-Store",
    },
  ];

  const skills: string[] = [
    "React.Js",
    "Next.Js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Git",
    "GitHub",
    "Figma",
    "Redux Toolkit",
  ];

  const experience: Experience[] = [
    {
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description:
        "Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern React architectures.",
    },
    {
      role: "Frontend Developer",
      company: "StartupHub",
      period: "2020 - 2022",
      description:
        "Built responsive web applications using React and TypeScript, collaborated with design teams to implement pixel-perfect UIs.",
    },
    {
      role: "Junior Developer",
      company: "WebStudio",
      period: "2019 - 2020",
      description:
        "Developed interactive websites and web applications, gained expertise in modern JavaScript frameworks and best practices.",
    },
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative transition-colors duration-300">
      <ThemeToggle />

      {theme === "dark" && (
        <>
          <ParticleField />
          <CustomCursor />
        </>
      )}

      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      >
        {/* Theme-aware Background */}
        {theme === "dark" ? (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <FloatingShapes />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        )}

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-12">
            {/* Typewriter Effect Title */}
            <div className="relative">
              <h1
                className={`text-6xl md:text-8xl font-bold mb-8 min-h-[1.2em] ${
                  theme === "dark"
                    ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
                    : "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent"
                }`}
              >
                <TypeWriter
                  texts={[
                    "Hi, I'm Nisar Ahmad",
                    "I Build Amazing Web Designs",
                    "I Create Digital Magic",
                    "Welcome to My World",
                  ]}
                  speed={150}
                  deleteSpeed={75}
                  pauseTime={3000}
                />
              </h1>
              {/* Glow effect behind text - only in dark mode */}
              {theme === "dark" && (
                <div className="absolute inset-0 flex items-center 
                                justify-center pointer-events-none">
                  <div className="text-6xl md:text-8xl font-bold opacity-10 
                                  blur-2xl bg-gradient-to-r from-cyan-400 
                                  via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Hi, I'm Nisar Ahmad
                  </div>
                </div>
              )}
            </div>
            <p
              className={`text-xl md:text-2xl mb-12 max-w-2xl mx-auto animate-fade-in ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Front-End Developer • React & TypeScript
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="inline-flex items-center justify-center gap-2 rounded-xl 
                              transition-all duration-300 cursor-pointer disabled:opacity-50 
                              disabled:cursor-not-allowed relative overflow-hidden px-8 py-4 
                              text-lg bg-gradient-to-r from-blue-400 to-purple-500 text-white 
                              font-bold shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/75 
                              transform hover:scale-110 border-2 border-blue-300"
              onClick={() => scrollToSection("contact")}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-50 blur-lg"></div>
              <span className="relative z-10">
                Hire Me
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-mail w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                  <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>
              </span>
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl 
                              transition-all duration-300 cursor-pointer disabled:opacity-50 
                              disabled:cursor-not-allowed font-semibold relative overflow-hidden 
                              px-8 py-4 text-lg border-2 border-blue-500 text-blue-600 bg-transparent 
                              hover:bg-blue-50 hover:text-blue-700 hover:border-blue-600 hover:shadow-lg 
                              hover:shadow-blue-500/25"
                              onClick={() => scrollToSection("projects")}>
              <span className="relative z-10">
                View Work
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-chevron-down w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="fade" delay={200}>
            <h2
              className={`text-4xl md:text-5xl font-bold text-center mb-24 bg-clip-text text-transparent ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-400 to-blue-400"
                  : "bg-gradient-to-r from-blue-600 to-purple-600"
              }`}
            >
              About Me
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Profile Photo with Neon Border */}
            <ScrollReveal direction="left" delay={400}>
              <div className="flex justify-center md:justify-start">
                <div className="relative">
                  <div
                    className={`w-80 h-80 rounded-3xl backdrop-blur-md border-2 p-4 transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gray-900/50 border-purple-500/30 hover:border-purple-400/60"
                        : "bg-white/50 border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <ImageWithFallback
                      src={ERROR_IMG_SRC}
                      alt="Nisar Ahmad"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  {/* Glow effect - only in dark mode */}
                  {theme === "dark" && (
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl 
                                    blur-lg opacity-30 -z-10 animate-pulse"></div>
                  )}
                </div>
              </div>
            </ScrollReveal>

            {/* Bio and Skills */}
            <ScrollReveal direction="right" delay={600}>
              <div className="space-y-12">
                <div className="space-y-6">
                  <p
                    className={`text-lg leading-relaxed ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    I'm a passionate front-end developer with 1+ years of
                    experience creating beautiful, responsive web applications.
                    I specialize in React and TypeScript, turning complex
                    problems into simple, elegant solutions.
                  </p>
                  <p
                    className={`text-lg leading-relaxed ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    When I'm not coding, you'll find me exploring new design
                    trends, contributing to open-source projects, or hiking in
                    the mountains.
                  </p>
                </div>

                {/* Skills */}
                <div>
                  <h3
                    className={`text-xl font-bold mb-6 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                      <SkillChip key={index} name={skill} />
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    className="inline-flex items-center 
                                    justify-center gap-2 rounded-xl transition-all duration-300 
                                    cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed 
                                    font-semibold relative overflow-hidden px-6 py-3 text-base border-2 
                                    border-blue-500 text-blue-600 bg-transparent hover:bg-blue-50 
                                    hover:text-blue-700 hover:border-blue-600 hover:shadow-lg 
                                    hover:shadow-blue-500/25"
                                    onClick={() => window.open("/Nisar Ahmad Resume.pdf", "_blank")}>
                    <span className="relative z-10">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-download w-4 h-4"
                        aria-hidden="true"
                      >
                        <path d="M12 15V3"></path>
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <path d="m7 10 5 5 5-5"></path>
                      </svg>
                      Resume
                    </span>
                  </button>
                  <button className="inline-flex items-center justify-center gap-2 rounded-xl 
                                    transition-all duration-300 cursor-pointer disabled:opacity-50 
                                    disabled:cursor-not-allowed font-semibold relative overflow-hidden 
                                    px-6 py-3 text-base text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                                    onClick={() => scrollToSection("contact")}>
                    <span className="relative z-10">Get in Touch</span>
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="fade" delay={200}>
            <h2
              className={`text-4xl md:text-5xl font-bold text-center mb-24 bg-clip-text text-transparent ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-400 to-blue-400"
                  : "bg-gradient-to-r from-blue-600 to-purple-600"
              }`}
            >
              Featured Projects
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 150}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="fade" delay={200}>
            <h2
              className={`text-4xl md:text-5xl font-bold text-center mb-24 bg-clip-text text-transparent ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-400 to-blue-400"
                  : "bg-gradient-to-r from-blue-600 to-purple-600"
              }`}
            >
              Experience
            </h2>
          </ScrollReveal>

          <div className="space-y-0">
            {experience.map((exp, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 200}>
                <TimelineItem
                  {...exp}
                  isLast={index === experience.length - 1}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="fade" delay={200}>
            <h2
              className={`text-4xl md:text-5xl font-bold text-center mb-24 bg-clip-text text-transparent ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-400 to-blue-400"
                  : "bg-gradient-to-r from-blue-600 to-purple-600"
              }`}
            >
              Get In Touch
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Glass Contact Form with Neon Outline */}
            <ScrollReveal direction="left" delay={400}>
              <div className="relative">
                <div
                  className={`backdrop-blur-md border-2 rounded-2xl p-8 transition-all duration-300 ${
                    theme === "dark"
                      ? "bg-gray-900/30 border-purple-500/30 hover:border-purple-400/50"
                      : "bg-white/60 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label
                        className={`block mb-3 font-semibold ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className={`w-full py-3 border rounded-lg focus:outline-none transition-all duration-300 ${
                          theme === "dark"
                            ? "bg-gray-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/25"
                            : "bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/25"
                        }`}
                        placeholder=" Your Name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        className={`block mb-3 font-semibold ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full py-3 border rounded-lg focus:outline-none transition-all duration-300 ${
                          theme === "dark"
                            ? "bg-gray-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/25"
                            : "bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/25"
                        }`}
                        placeholder=" your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label
                        className={`block mb-3 font-semibold ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Message
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        rows={4}
                        className={`w-full py-3 border rounded-lg focus:outline-none transition-all duration-300 resize-none ${
                          theme === "dark"
                            ? "bg-gray-800/50 border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-400 focus:shadow-lg focus:shadow-purple-500/25"
                            : "bg-white/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:shadow-lg focus:shadow-blue-500/25"
                        }`}
                        placeholder=" Tell me about your project..."
                        required
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        className="inline-flex items-center justify-center gap-2 rounded-xl transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed font-semibold relative overflow-hidden px-6 py-3 text-base bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:shadow-xl transform hover:scale-105 w-full"
                        type="submit"
                      >
                        <span className="relative z-10 flex gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-send w-4 h-4 relative top-1"
                            aria-hidden="true"  
                          >
                            <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                            <path d="m21.854 2.147-10.94 10.939"></path>
                          </svg>
                          Send Message
                        </span>
                      </button>
                      {/* <Button
                        type="submit"
                        variant="primary"
                        className="w-full"
                      >
                        <Send className="w-4 h-4" />
                        Send Message
                      </Button> */}
                    </div>
                  </form>
                </div>
                {/* Glowing border effect - only in dark mode */}
                {theme === "dark" && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 -z-10"></div>
                )}
              </div>
            </ScrollReveal>

            {/* Social Links & Info */}
            <ScrollReveal direction="right" delay={600}>
              <div className="space-y-12">
                <div
                  className={`backdrop-blur-md border rounded-2xl p-8 ${
                    theme === "dark"
                      ? "bg-gray-900/30 border-purple-500/20"
                      : "bg-white/60 border-gray-200"
                  }`}
                >
                  <h3
                    className={`text-xl font-bold mb-6 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Let's Connect
                  </h3>
                  <p
                    className={`mb-8 leading-relaxed ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    I'm always open to discussing new opportunities, creative
                    projects, or just having a chat about technology and design.
                  </p>

                  <div className="space-y-6">
                    <a
                      href="mailto:alex@example.com"
                      className={`flex items-center gap-3 transition-colors ${
                        theme === "dark"
                          ? "text-gray-300 hover:text-purple-300"
                          : "text-gray-600 hover:text-blue-600"
                      }`}
                    >
                      <Mail className="w-5 h-5" />
                      nisarmahar7594@gmail.com
                    </a>

                    <div className="flex gap-4 pt-4">
                      <a
                        href="https://github.com/nisarahmaddev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 border rounded-lg transition-all duration-300 ${
                          theme === "dark"
                            ? "bg-gray-800/50 border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/10 text-white"
                            : "bg-white/80 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-600"
                        }`}
                      >
                        <Github className="w-6 h-6" />
                      </a>

                      <a
                        href="https://www.linkedin.com/in/nisar-ahmad-5770a12b1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 border rounded-lg transition-all duration-300 ${
                          theme === "dark"
                            ? "bg-gray-800/50 border-purple-500/30 hover:border-purple-400/50 hover:bg-purple-500/10 text-white"
                            : "bg-white/80 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-600"
                        }`}
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>

                <div
                  className={`text-center text-sm ${
                    theme === "dark" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  <p>© 2025 Nisar Ahmad. All rights reserved.</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
