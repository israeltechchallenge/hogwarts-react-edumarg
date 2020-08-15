import React from "react";
import MyChart from "./chart";

const MyDashBoard = (props) => {
  console.log("props students dash", props.studentList);
  return (
    <React.Fragment>
      <MyChart studentList={props.studentList} />
    </React.Fragment>
  );
};

export default MyDashBoard;
