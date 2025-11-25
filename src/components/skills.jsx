import Html from "../assets/icons/html.png";
import Css from "../assets/icons/css.png";
import TailwindCss from "../assets/icons/tailwindcss.png";
import Js from "../assets/icons/js.png";
import React from "../assets/icons/react.png";
import Git from "../assets/icons/github.png";
import Python from "../assets/icons/python.png";
import Sql from "../assets/icons/sql.png";
import Excel from "../assets/icons/excel.png";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Skills() {
  const [headerRef, isHeaderVisible] = useScrollAnimation(0.2);
  const [cardsRef, isCardsVisible] = useScrollAnimation(0.1);

  const skills = [
    { name: "HTML", icon: Html },
    { name: "CSS", icon: Css },
    { name: "TAILWINDCSS", icon: TailwindCss },
    { name: "JAVASCRIPT", icon: Js },
    { name: "REACT Js", icon: React },
    { name: "PYTHON", icon: Python },
    { name: "SQL", icon: Sql },
    { name: "AI TOOLS", icon: null, isCustom: true },
    { name: "VIBE CODING", icon: null, isCustom: true },
    { name: "GITHUB", icon: Git },
    { name: "EXCEL", icon: Excel }
  ];

  return (
    <section id="skills" className="skills-section__container mt-10 px-4">
      <div 
        ref={headerRef}
        className={`skills-section__head fade-in-up ${isHeaderVisible ? 'visible' : ''}`}
      >
        <h1 className="text-6xl md:text-5xl text-center mb-10 font-bold gradient-text">
          SKILLS
        </h1>
      </div>

      <div 
        ref={cardsRef}
        className={`flex flex-wrap gap-10 justify-evenly ${isCardsVisible ? 'visible' : ''}`}
      >
        {skills.map((skill, index) => (
          <div 
            key={skill.name}
            className={`skills-section_card hover-lift hover-glow scale-in stagger-${(index % 6) + 1} ${
              isCardsVisible ? 'visible' : ''
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {skill.isCustom ? (
              <div className="w-32 h-32 flex items-center justify-center">
                {skill.name === "AI TOOLS" ? (
                  <svg className="w-20 h-20 text-[#1F3A8A] hover-scale transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
                    <path d="M19 15L20.09 18.26L24 19L20.09 19.74L19 23L17.91 19.74L14 19L17.91 18.26L19 15Z"/>
                    <path d="M5 15L6.09 18.26L10 19L6.09 19.74L5 23L3.91 19.74L0 19L3.91 18.26L5 15Z"/>
                  </svg>
                ) : (
                  <svg className="w-20 h-20 text-[#1F3A8A] hover-scale transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    <path d="M8 12h8v2H8z"/>
                    <path d="M8 8h8v2H8z"/>
                  </svg>
                )}
              </div>
            ) : (
              <img 
                src={skill.icon} 
                alt={skill.name}
                className="hover-scale transition-transform duration-300"
              />
            )}
            <p className="text-4xl font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
