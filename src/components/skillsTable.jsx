import React from "react";
const SkillsTable = (props) => {
  const skills = [
    "Potion Making",
    "Spells",
    "Quidditch",
    "Animagus",
    "Apparate",
    "Metamorphmagi",
    "Parcelongue",
  ];

  return (
    <React.Fragment>
      <table className="table">
        <thead>
          <tr>
            <th scope="col-5">Skil</th>
            <th scope="col-5">Level</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => (
            <tr key={`${props.skillType}${skill.replace(" ", "")}`}>
              <td className="pt-3 mt-1">{skill}</td>
              <td>
                <div className="form-group ">
                  <label
                    className="sr-only"
                    htmlFor={`${props.skillType}${skill.replace(" ", "")}level`}
                  >
                    {`Current ${skill} level`}
                  </label>
                  <select
                    id={`${props.skillType}${skill.replace(" ", "")}level`}
                    className="form-control"
                  >
                    <option defaultValue>Choose...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default SkillsTable;
