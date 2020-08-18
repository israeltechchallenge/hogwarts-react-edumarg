import React from "react";
import CanvasJSReact from "../canvasjs.react";
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const MyChart = (props) => {
  console.log(props.students);
  let totalStudents = props.studentList.length;
  const totalSkills = {};
  const chartData = [];

  for (const student of props.studentList) {
    for (const [key, value] of Object.entries(student.desireSkills)) {
      if (value >= 2) {
        if (key in totalSkills) totalSkills[key] += 1;
        else totalSkills[key] = 1;
      }
    }
  }

  console.log("totalSkills", totalSkills, "totalStudents", totalStudents);

  for (const [skill, value] of Object.entries(totalSkills)) {
    let data = {};
    data["y"] = (totalSkills[skill] / totalStudents) * 100;
    data["label"] = skill;
    chartData.push(data);
  }

  console.log("chart data", chartData);

  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "Desire Skills by Popularity",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: chartData,
      },
    ],
  };

  return (
    <React.Fragment>
      <CanvasJSChart options={options} />
    </React.Fragment>
  );
};

export default MyChart;
