import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { ImageWithFallback } from "./figma/imageWithFallback";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  codeUrl?: string;
}

export function ProjectCard({
  title,
  description,
  image,
  tags,
  liveUrl,
  codeUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <div
      className={`group relative rounded-2xl backdrop-blur-md border p-6 transition-all duration-300 hover:transform hover:scale-105 ${
        theme === "dark"
          ? "bg-gray-900/50 border-purple-500/20 hover:bg-gray-800/50 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-500/20"
          : "bg-white/60 border-gray-200 hover:bg-white/80 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-500/20"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative mb-6 overflow-hidden rounded-xl border ${
          theme === "dark" ? "border-purple-500/30" : "border-gray-300"
        }`}
      >
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />

        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center 
                      gap-4 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {liveUrl && (
            <button className="inline-flex items-center justify-center gap-2 rounded-xl transition-all 
                              duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed 
                              font-semibold relative overflow-hidden px-4 py-2 text-sm bg-gradient-to-r 
                              from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 
                              hover:shadow-blue-500/40 hover:shadow-xl transform hover:scale-105"
                              onClick={() => window.open(liveUrl, "_blank")}>
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
                  className="lucide lucide-external-link w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14 21 3"></path>
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                </svg>
                Live Demo
              </span>
            </button>
          )}
          {codeUrl && (
            <button className="inline-flex items-center justify-center gap-2 rounded-xl transition-all 
                              duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed  
                              font-semibold relative overflow-hidden px-4 py-2 text-sm border-2 border-blue-500 
                              text-blue-600 bg-transparent hover:bg-blue-50 hover:text-blue-700 
                              hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
                              onClick={() => window.open(codeUrl, "_blank")}>
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
                  className="lucide lucide-github w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
                View Code
              </span>
            </button>
          )}
        </div>

        {theme === "dark" && (
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
        )}
      </div>

      <div className="space-y-4">
        <h3
          className={`font-bold ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm leading-relaxed ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`px-3 py-1 text-xs rounded-full border transition-colors ${
                theme === "dark"
                  ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 border-purple-500/30 hover:border-purple-400/50"
                  : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 border-blue-200 hover:border-blue-300"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
