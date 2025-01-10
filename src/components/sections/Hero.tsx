"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

interface Command {
  command: string;
  response?: string;
}

interface ExperienceItem {
  title: string;
  company: string;
  date: string;
  projects: string;
  tech: string;
}

interface EducationItem {
  school: string;
  degree: string;
  date: string;
  grade?: string;
}

interface TranslationType {
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    experience: string;
    years: string;
    terminal: {
      welcome: string;
      readFile: string;
      systemInfo: string;
      os: string;
      host: string;
      shell: string;
      terminal: string;
      packages: string;
      uptime: string;
    };
  };
  about: {
    title: string;
    description: string;
  };
  experience: {
    title: string;
    current: string;
    yerlem: ExperienceItem;
    stechome: ExperienceItem;
    terra: ExperienceItem;
  };
  education: {
    title: string;
    ktu: EducationItem;
    anadolu: EducationItem;
  };
  contact: {
    title: string;
    location: string;
    email: string;
  };
}

export default function Hero() {
  const { language } = useLanguage();
  const t = translations[language];
  const [typedCommands, setTypedCommands] = useState<Command[]>([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [commandIndex, setCommandIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  const initialCommands = [
    {
      command: "ssh portfolio.necmettin.dev",
      response: t.hero.terminal.connecting,
    },
    {
      command: "cat welcome.txt",
      response: `${t.hero.greeting}\n\n${t.hero.description}`,
    },
    {
      command: "neofetch",
      response: `<div class="space-y-1">
<div class="text-yellow-400 mb-2">⚡ necmettin@portfolio</div>
<div class="text-gray-500 mb-3">-------------------</div>
<div class="grid gap-1">
  <div><span class="text-orange-400">${t.hero.terminal.packages}</span>   ${t.hero.experience}</div>
  <div><span class="text-teal-400">${t.hero.terminal.uptime}</span>    ${t.hero.years}</div>
</div>
</div>`,
    },
  ];

  const sections = [
    { id: "about", command: "cat about.txt", label: t.nav.about },
    { id: "skills", command: "ls skills/", label: t.nav.skills },
    { id: "experience", command: "ls experience/", label: t.nav.experience },
    { id: "education", command: "cat education.txt", label: t.nav.education },
    { id: "contact", command: "cat contact.txt", label: t.nav.contact },
  ];

  const handleSectionClick = (command: string) => {
    const newCommand: Command = { command };

    if (command.includes("skills")) {
      const skills = [
        { name: "Next.js", color: "text-blue-400" },
        { name: "React", color: "text-cyan-400" },
        { name: "Flutter", color: "text-sky-400" },
        { name: "Node.js", color: "text-green-400" },
        { name: "TypeScript", color: "text-blue-500" },
        { name: "JavaScript", color: "text-yellow-400" },
        { name: "PostgreSQL", color: "text-indigo-400" },
        { name: "Git", color: "text-orange-400" },
        { name: "TailwindCSS", color: "text-teal-400" },
        { name: "React Native", color: "text-purple-400" },
        { name: "JSF", color: "text-red-400" },
        { name: "REST API", color: "text-emerald-400" },
      ];

      const skillsGrid = `Technical Skills:\n\n<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
${skills
  .map(
    (skill) =>
      `  <div class="flex items-center ${skill.color}">⚡ ${skill.name}</div>`
  )
  .join("\n")}
</div>`;

      newCommand.response = skillsGrid;
    } else if (command.includes("experience")) {
      newCommand.response = `<div class="space-y-8">
  <div class="space-y-2">
    <div class="text-blue-400 text-lg">${t.experience.yerlem.company}</div>
    <div class="text-gray-300 ml-4">├─ ${t.experience.yerlem.title}</div>
    <div class="text-gray-400 ml-4">├─ ${t.experience.yerlem.date}</div>
    <div class="text-gray-300 ml-4">├─ ${t.experience.yerlem.projects}</div>
    <div class="text-gray-400 ml-4">└─ ${t.experience.yerlem.tech}</div>
  </div>

  <div class="space-y-2">
    <div class="text-purple-400 text-lg">${t.experience.stechome.company}</div>
    <div class="text-gray-300 ml-4">├─ ${t.experience.stechome.title}</div>
    <div class="text-gray-400 ml-4">├─ ${t.experience.stechome.date}</div>
    <div class="text-gray-300 ml-4">├─ ${t.experience.stechome.projects}</div>
    <div class="text-gray-400 ml-4">└─ ${t.experience.stechome.tech}</div>
  </div>

  <div class="space-y-2">
    <div class="text-green-400 text-lg">${t.experience.terra.company}</div>
    <div class="text-gray-300 ml-4">├─ ${t.experience.terra.title}</div>
    <div class="text-gray-400 ml-4">├─ ${t.experience.terra.date}</div>
    <div class="text-gray-300 ml-4">├─ ${t.experience.terra.projects}</div>
    <div class="text-gray-400 ml-4">└─ ${t.experience.terra.tech}</div>
  </div>
</div>`;
    } else if (command.includes("about")) {
      newCommand.response = `<div class="text-cyan-300">${t.about.description}</div>`;
    } else if (command.includes("education")) {
      newCommand.response = `<div class="space-y-6">
  <div class="space-y-1">
    <div class="text-yellow-400">${t.education.ktu.school}</div>
    <div class="text-gray-300 ml-4">├─ ${t.education.ktu.degree}</div>
    <div class="text-gray-300 ml-4">├─ ${t.education.ktu.date}</div>
    <div class="text-gray-400 ml-4">└─ ${t.education.ktu.grade}</div>
  </div>

  <div class="space-y-1">
    <div class="text-orange-400">${t.education.anadolu.school}</div>
    <div class="text-gray-300 ml-4">├─ ${t.education.anadolu.degree}</div>
    <div class="text-gray-400 ml-4">└─ ${t.education.anadolu.date}</div>
  </div>
</div>`;
    } else if (command.includes("contact")) {
      newCommand.response = `<div class="space-y-2">
  <div class="text-purple-400">📍 ${t.contact.location}</div>
  <div class="text-blue-400">✉️ ${t.contact.email}</div>
</div>`;
    }

    setTypedCommands((prev) => [...prev, newCommand]);
  };

  // Reset everything when language changes
  useEffect(() => {
    setTypedCommands([]);
    setCurrentCommand("");
    setCommandIndex(0);
    setIsTyping(true);
    setShowContent(false);
  }, [language]);

  // Handle typing animation
  useEffect(() => {
    if (commandIndex >= initialCommands.length) {
      setIsTyping(false);
      setShowContent(true);
      return;
    }

    const currentCmd = initialCommands[commandIndex];
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < currentCmd.command.length) {
        setCurrentCommand((prev) => prev + currentCmd.command[charIndex]);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setTypedCommands((prev) => [...prev, currentCmd]);
          setCurrentCommand("");
          setCommandIndex((prev) => prev + 1);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [commandIndex, language]);

  return (
    <section className="min-h-screen max-w-screen overflow-hidden flex items-center bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 pb-10">
      <div className="w-full max-w-full px-2 sm:px-6 lg:px-8 pt-20 sm:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Terminal Window */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#1E1E1E] rounded-lg shadow-2xl border border-gray-700">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-[#2D2D2D] sticky top-0">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-sm font-mono">
                  necmettin@portfolio:~
                </div>
                <div className="w-12"></div>
              </div>
              {/* Terminal Content */}
              <div className="p-6 [font-family:Menlo,Monaco,monospace] text-sm sm:text-base text-gray-100">
                {typedCommands.map((cmd, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex items-start">
                      <span className="text-green-400 mr-2">$</span>
                      <span className="text-gray-100">{cmd.command}</span>
                    </div>
                    {cmd.response && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 text-gray-300 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: cmd.response }}
                      />
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-center">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-gray-100">{currentCommand}</span>
                    <span className="ml-1 animate-blink">|</span>
                  </div>
                )}
                {showContent && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mt-8"
                  >
                    <div className="text-gray-400 mb-4 text-sm">
                      {t.hero.terminal.prompt}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => handleSectionClick(section.command)}
                          className="px-4 py-2 text-sm bg-[#2D2D2D] text-gray-300 rounded-md hover:bg-[#3D3D3D] hover:text-gray-100 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-600 shadow-lg"
                        >
                          {section.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          {/* Background Decorations */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
