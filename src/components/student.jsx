import React, { Component } from "react";
class Student extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="col-md-10 mx-auto">
          <h2 className="my-3">Student</h2>
          <form>
            <div className="form-group">
              <label htmlFor="InputFirstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="InputFirstName"
                name="InputFirstName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="InputLastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="InputLastName"
                name="InputLastName"
              />
            </div>

            <div className="form-group">
              <label htmlFor="InputEmail">Email address</label>
              <input
                type="email"
                className="form-control"
                id="InputEmail"
                name="InputEmail"
              />
            </div>

            <div className="row">
              <div className="col-5 mx-auto">
                <h4 className="my-2">Current Skills and level</h4>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col-5">Skil</th>
                      <th scope="col-5">Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pt-3 mt-1">Potion making</td>
                      <td>
                        <div className="form-group ">
                          <label
                            className="sr-only"
                            htmlFor="inputCurrentPotionLevel"
                          >
                            Current potion level
                          </label>
                          <select
                            id="inputCurrentPotionLevel"
                            className="form-control"
                          >
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3 mt-1">Spells</td>
                      <td>
                        <div className="form-group ">
                          <label
                            className="sr-only"
                            htmlFor="inputCurrentSpellsLevel"
                          >
                            Current spells level
                          </label>
                          <select
                            id="inputCurrentSpellsLevel"
                            className="form-control"
                          >
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3 mt-1">Quidditch</td>
                      <td>
                        <div className="form-group ">
                          <label
                            className="sr-only"
                            htmlFor="inputCurrentQuidditchLevel"
                          >
                            Current Quidditch level
                          </label>
                          <select
                            id="inputCurrentQuidditchLevel"
                            className="form-control"
                          >
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3 mt-1">Animagus</td>
                      <td>
                        <div className="form-group ">
                          <label
                            className="sr-only"
                            htmlFor="inputCurrentAnimagusLevel"
                          >
                            Current Animagus level
                          </label>
                          <select
                            id="inputCurrentAnimagusLevel"
                            className="form-control"
                          >
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3 mt-1">Apparate</td>
                      <td>
                        <div className="form-group ">
                          <label
                            className="sr-only"
                            htmlFor="inputCurrentApparateLevel"
                          >
                            Current Apparate level
                          </label>
                          <select
                            id="inputCurrentApparateLevel"
                            className="form-control"
                          >
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3 mt-1">Metamorphmagi</td>
                      <td>
                        <div className="form-group ">
                          <label
                            className="sr-only"
                            htmlFor="inputMetamorphmagiCurrentLevel"
                          >
                            potion level
                          </label>
                          <select
                            id="inputMetamorphmagiCurrentLevel"
                            className="form-control"
                          >
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3 mt-1">Parseltongue</td>
                      <td>
                        <div className="form-group ">
                          <label
                            className="sr-only"
                            htmlFor="inputCurrentParseltongueLevel"
                          >
                            Current Parseltongue level
                          </label>
                          <select
                            id="inputCurrentParseltongueLevel"
                            className="form-control"
                          >
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-5 mx-auto">
                <h4 className="my-2">Desier Skills and level</h4>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col-5">Skil</th>
                      <th scope="col-5">Level</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="pt-3 mt-1">Potion making</td>
                      <td>
                        <div className="form-group ">
                          <label
                            className="sr-only"
                            htmlFor="inputDesierPotionLevel"
                          >
                            desier potion level
                          </label>
                          <select
                            id="inputDesierPotionLevel"
                            className="form-control"
                          >
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3 mt-1">Spells</td>
                      <td>
                        <div className="form-group ">
                          <label
                            className="sr-only"
                            htmlFor="inputDesierSpellsLevel"
                          >
                            desier spells level
                          </label>
                          <select
                            id="inputDesierSpellsLevel"
                            className="form-control"
                          >
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3 mt-1">Quidditch</td>
                      <td>
                        <div className="form-group ">
                          <label
                            className="sr-only"
                            htmlFor="inputDesierQuidditchLevel"
                          >
                            desier Quidditch level
                          </label>
                          <select
                            id="inputDesierQuidditchLevel"
                            className="form-control"
                          >
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3 mt-1">Animagus</td>
                      <td>
                        <div className="form-group ">
                          <label
                            className="sr-only"
                            htmlFor="inputDesierAnimagusLevel"
                          >
                            desier Animagus level
                          </label>
                          <select
                            id="inputDesierAnimagusLevel"
                            className="form-control"
                          >
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3 mt-1">Apparate</td>
                      <td>
                        <div className="form-group ">
                          <label
                            className="sr-only"
                            htmlFor="inputDesierApparateLevel"
                          >
                            desier Apparate level
                          </label>
                          <select
                            id="inputDesierApparateLevel"
                            className="form-control"
                          >
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3 mt-1">Metamorphmagi</td>
                      <td>
                        <div className="form-group ">
                          <label
                            className="sr-only"
                            htmlFor="inputMetamorphmagiDesierLevel"
                          >
                            potion level
                          </label>
                          <select
                            id="inputMetamorphmagiDesierLevel"
                            className="form-control"
                          >
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="pt-3 mt-1">Parseltongue</td>
                      <td>
                        <div className="form-group ">
                          <label
                            className="sr-only"
                            htmlFor="inputDesierParseltongueLevel"
                          >
                            desier Parseltongue level
                          </label>
                          <select
                            id="inputDesierParseltongueLevel"
                            className="form-control"
                          >
                            <option selected>Choose...</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Student;
