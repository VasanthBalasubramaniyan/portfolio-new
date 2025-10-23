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
    { name: "GITHUB", icon: Git },
    { name: "SQL", icon: Sql },
    { name: "PYTHON", icon: Python },
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
            <img 
              src={skill.icon} 
              alt={skill.name}
              className="hover-scale transition-transform duration-300"
            />
            <p className="text-4xl font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
