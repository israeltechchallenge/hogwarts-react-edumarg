import React from "react";
import MyChart from "./chart";
import StudentsByDate from "./searchDate";
import StudentsBySkills from "./searchBySkill";

const MyDashBoard = (props) => {
  console.log("props students dash", props.studentList);
  return (
    <React.Fragment>
      <MyChart studentList={props.studentList} />
      <StudentsByDate />
      <StudentsBySkills type={"Current"} />
      <StudentsBySkills type={"Desire"} />
    </React.Fragment>
  );
};

export default MyDashBoard;
