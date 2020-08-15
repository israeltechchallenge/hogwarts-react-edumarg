import React from "react";
import CanvasJSReact, { CanvasJS, CanvasJSChart } from "../canvasjs.react";

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
    chartData.append(data);
  }

  // for (const [skill, value] of Object.entries(totalSkills)) {
  //   chartData[skill] = (totalSkills[skill] / totalStudents) * 100;
  // }

  console.log("chartData", chartData);

  // const options = {
  //   exportEnabled: true,
  //   animationEnabled: true,
  //   title: {
  //     text: "Website Traffic Sources",
  //   },
  //   data: [
  //     {
  //       type: "pie",
  //       startAngle: 75,
  //       toolTipContent: "<b>{label}</b>: {y}%",
  //       showInLegend: "true",
  //       legendText: "{label}",
  //       indexLabelFontSize: 16,
  //       indexLabel: "{label} - {y}%",
  //       dataPoints: [],
  //     },
  //   ],
  // };

  return (
    <React.Fragment>
      <h1>Desire Skills by Popularity</h1>
    </React.Fragment>
  );
};

export default MyChart;
