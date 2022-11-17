import React from "react";
import { useHistory } from "react-router-dom";
import Supervisor from "../images/icon-supervisor.svg";
import Calculator from "../images/icon-calculator.svg";
import Karma from "../images/icon-karma.svg";
import Predict from "../images/predictionStatus.png";
import Builder from "../images/icon-team-builder.svg";

const ToolSearch = () => {
  const history = useHistory();

  const onSubmit = () => {
    history.push("/patientDetails");
  };

  const handleRoute = () => {
    history.push("/hopitalDetails");
  };

  const medicalHistory = () => {
    history.push("/medicalHistory");
  };

  const planwork = () => {
    history.push("/workflow");
  };

  const learning = () => {
    history.push("/learning");
  };

  return (
    <>
      <header>
        <h1>RAMM Services</h1>
        <p>
          Our Machine Learning powered tools use millions of data
          points to ensure that predictions are accurate.
        </p>
      </header>
      <div className="container">
        <div className="box box-cyan" onClick={onSubmit}>
          <h2>Patient details</h2>
          <p>Monitors the health conditions of the indivisual patient</p>
          <img src={Supervisor} alt="supervisor" />
        </div>
        <div className="box box-red" onClick={handleRoute}>
          <h2>Resources available</h2>
          <p>
            Scans our Hospital network to create the optimal plan for
            Re-admission
          </p>
          <img src={Builder} alt="supervisor" />
        </div>
        <div className="box box-blue" onClick={medicalHistory}>
          <h2>Health Records</h2>
          <p>
            Uses data from past medical history to provide better delivery
            estimates
          </p>
          <img src={Calculator} alt="supervisor" />
        </div>
        <div className="box box-orange" onClick={planwork}>
          <h2>Prediction Status</h2>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img className="predict" src={Predict} alt="Status" />
        </div>
        <div className="box box-green" onClick={learning}>
          <h2>Learning</h2>
          <p>Regularly evaluates our talent to ensure quality</p>
          <img src={Karma} alt="Learning and Development"/>
        </div>
      </div>
    </>
  );
};

export default ToolSearch;
