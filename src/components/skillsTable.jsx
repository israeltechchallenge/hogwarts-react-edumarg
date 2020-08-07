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
            <tr key={`${props.type}${skill.replace(" ", "")}`}>
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
                    key={`${props.type}${skill.replace(" ", "")}level`}
                    className="form-control"
                    name={`${skill
                      .replace(" ", "")
                      .replace(skill[0], skill[0].toLocaleLowerCase())}`}
                    id={`$${skill
                      .replace(" ", "")
                      .replace(skill[0], skill[0].toLocaleLowerCase())}`}
                    onChange={(event) => props.onChange(event)}
                  >
                    <option defaultValue>Choose Level...</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
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
