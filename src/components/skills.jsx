import DonutChart from "./donut";

const chartData = [
  { label: "ReactJS", value: 80 },
  { label: "TailwindCSS", value: 85 },
  { label: "GitHub", value: 95 },
  { label: "Python", value: 80 },
  { label: "RestAPI", value: 75 },
  { label: "Deployment", value: 90 },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section__container mt-10 px-4">
      <div className="skills-section__head">
        <h1 className="text-6xl md:text-5xl text-center mb-10 font-bold">
          SKILLS
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {chartData.map((item, index) => (
          <DonutChart key={index} label={item.label} value={item.value} />
        ))}
      </div>
    </section>
  );
}
