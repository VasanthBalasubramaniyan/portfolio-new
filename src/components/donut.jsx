import Plot from "react-plotly.js";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const DonutChart = ({ label, value }) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [fontSize, setFontSize] = useState(14);

  useEffect(() => {
    const handleResize = () => {
      setFontSize(window.innerWidth < 768 ? 12 : 14);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${inView ? "visible" : ""}`} 
      style={{ width: "100%" }}
    >
      <Plot
        data={[
          {
            type: "pie",
            values: [value, 100 - value],
            labels: [label, "", value],
            textinfo: "none", 
            textfont: { size: fontSize }, 
            hole: 0.7,
            showlegend: false,
            direction: "counterclockwise",
            rotation: 90,
            marker: {
              colors: ["#7A51EB", "#f2f2f2"],
            },
          },
        ]}
        layout={{
          autosize: true,
          height: 250,
          margin: { t: 0, b: 0, l: 0, r: 0 },
          paper_bgcolor: "rgba(0,0,0,0)",
          plot_bgcolor: "rgba(0,0,0,0)",
          annotations: [
            {
              text: `<b>${label}<br>${value}%</b>`, // ✅ fixed string format
              x: 0.5,
              y: 0.5,
              showarrow: false,
              font: { size: fontSize },
              xanchor: "center",
              yanchor: "middle",
            },
          ],
        }}
        config={{ responsive: true, staticPlot: true }}
        style={{ width: "100%" }}
      />
    </div>
  );
};
export default DonutChart;