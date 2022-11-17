import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";


const WorkFlow = () => {
  const history = useHistory();
  const allocateResourse = () => {
    history.push("/allocate");
  };
  useEffect(() => {
    console.log(Math.round(Math.random() * (5 - 1) + 1));
  }, []);
  return (
    <>
      <header>
        <h1>Prediction Status</h1>
      </header>
      <div className="container">
        <div className="box box-orange">
          <h2>Patient Status</h2>
          <p>
            <b>Patient Name :</b> Harish
            <br></br>
            <b>Age :</b> 56
            <br></br>
            <b>Sufferring from :</b> Diabetics
            <br></br>
            <b>Last admitted :</b> 24-03-2021
            <br></br>
            <b>Last hospital visited :</b> Lilavati Hospital
            <br></br>
            <b>Contact :</b> 9904561245
            <br></br>
            <b>Readmission Prediction :</b> Positive
            <br></br>
            <button
              className="btn"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={allocateResourse}
            >
              proceed
            </button>
          </p>
        </div>

        <div className="box box-orange">
          <h2>Patient Status</h2>
          <p>
            <b>Patient Name :</b> kamla
            <br></br>
            <b>Age :</b> 30
            <br></br>
            <b>Sufferring from :</b> Diabetics
            <br></br>
            <b>Last admitted :</b> 24-03-2021
            <br></br>
            <b>Last hospital visited :</b> Lilavati Hospital
            <br></br>
            <b>Contact :</b> 9904561245
            <br></br>
            <b>Readmission Prediction :</b> negative
            <br></br>
            <button
              className="btn"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={allocateResourse}
            >
              proceed
            </button>
          </p>
        </div>

      </div>
    </>
  );
};

export default WorkFlow;
