import Html from "../assets/icons/html.png";
import Css from "../assets/icons/css.png";
import TailwindCss from "../assets/icons/tailwindcss.png";
import Js from "../assets/icons/js.png";
import React from "../assets/icons/react.png";
import Git from "../assets/icons/github.png";
import Python from "../assets/icons/python.png";
import Sql from "../assets/icons/sql.png";
import Excel from "../assets/icons/excel.png";

export default function Skills() {
  return (
    <section id="skills" className="skills-section__container mt-10 px-4">
      <div className="skills-section__head">
        <h1 className="text-6xl md:text-5xl text-center mb-10 font-bold">
          SKILLS
        </h1>
      </div>

      <div className="flex flex-wrap gap-10 justify-evenly ">
        <div className="skills-section_card">
          <img src={Html} />
          <p className="text-4xl font-medium">HTML</p>
        </div>
        <div className="skills-section_card">
          <img src={Css} />
          <p className="text-4xl font-medium">CSS</p>
        </div>
        <div className="skills-section_card">
          <img src={TailwindCss} />
          <p className="text-4xl font-medium">TAILWINDCSS</p>
        </div>
        <div className="skills-section_card">
          <img src={Js} />
          <p className="text-4xl font-medium">JAVASCRIPT</p>
        </div>
        <div className="skills-section_card">
          <img src={React} />
          <p className="text-4xl font-medium">REACT Js</p>
        </div>
        <div className="skills-section_card">
          <img src={Git} />
          <p className="text-4xl font-medium">GITHUB</p>
        </div>
        <div className="skills-section_card">
          <img src={Sql} />
          <p className="text-4xl font-medium">SQL</p>~
        </div>
        <div className="skills-section_card">
          <img src={Python} />
          <p className="text-4xl font-medium">PYTHON</p>
        </div>
        <div className="skills-section_card">
          <img src={Excel} />
          <p className="text-4xl font-medium">EXCEL</p>
        </div>
      </div>
    </section>
  );
}
