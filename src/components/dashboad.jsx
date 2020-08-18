import React from "react";
import MyChart from "./chart";
import StudentsByDate from "./searchDate";
import StudentsBySkills from "./searchBySkill";

const MyDashBoard = (props) => {
  return (
    <React.Fragment>
      <MyChart studentList={props.studentList} />
      <StudentsByDate />
      <StudentsBySkills type={"current"} />
      <StudentsBySkills type={"desire"} />
    </React.Fragment>
  );
};

export default MyDashBoard;
