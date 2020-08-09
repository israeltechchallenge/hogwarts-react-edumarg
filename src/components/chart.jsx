import React from "react";

const MyChart = (props) => {
  console.log(props.students);
  let totalStudents = props.students.length;
  const totalSkills = {};
  const chartData = {};

  for (const student of props.students) {
    for (const [key, value] of Object.entries(student.desierSkills)) {
      if (value >= 3) {
        if (key in totalSkills) totalSkills[key] += 1;
        else totalSkills[key] = 1;
      }
    }
  }

  console.log("totalSkills", totalSkills, "totalStudents", totalStudents);

  for (const [skill, value] of Object.entries(totalSkills)) {
    chartData[skill] = (totalSkills[skill] / totalStudents) * 100;
  }

  console.log("chartData", chartData);

  return <h1>chart</h1>;
};

export default MyChart;
