import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import PrintIcon from "../images/motion.png";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MedHis = () => {
  const history = useHistory();
  const MySwal = withReactContent(Swal);

  const [userData, setUserData] = useState([]);
  const sharedetails = () => {
    MySwal.fire('Proceed to resource allocation');
    history.push("/workflow");

  };
  const callPatient = async () => {
    try {
      const res = await fetch(
        "https://pkgstore.datahub.io/machine-learning/diabetes/diabetes_json/data/640305ad940d069fa8d8384e218af0f2/diabetes_json.json"
      );

      const data = await res.json();

      console.log("Here is your DB data", data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log("Here is the error", err);
    }
  };

  useEffect(() => {
    callPatient();
  }, []);
  return (
    <>
      <header>
        <h1>patients Health Records</h1>
      </header>
      <div className="container scroll-table">
        <table className="table table-hover table-primary table-striped">
          <thead>
            <tr className="table-danger">
              <th className="table-content" scope="col">
                Select
              </th>
              <th scope="col">Age (years)</th>
              <th scope="col">Plasma glucose concentration</th>
              <th scope="col">Number of times pregnant</th>
              <th scope="col">Diastolic blood pressure (mm Hg)</th>
              <th scope="col">Triceps skin fold thickness (mm)</th>
              <th scope="col">2-Hour serum insulin (mu U/ml)</th>
              <th scope="col">Body mass index</th>
              <th scope="col">Diabetes pedigree function</th>
              <th scope="col">Test result</th>
            </tr>
          </thead>

          {userData.map((curElem) => {
            return (
              <tbody>
                <tr>
                  <th scope="row">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="flexCheckDefault"
                      />
                    </div>
                  </th>
                  <td>{curElem.age}</td>
                  <td>{curElem.plas}</td>
                  <td>{curElem.preg}</td>
                  <td>{curElem.pres}</td>
                  <td>{curElem.skin}</td>
                  <td>{curElem.insu}</td>
                  <td>{curElem.mass}</td>
                  <td>{curElem.pedi}</td>
                  <td>{curElem.class}</td>
                </tr>
              </tbody>
            );
          })}
         
        </table>
      </div>
      <button
        className="btn"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        style={{transform: 'translateX(100px)'}}
        onClick={sharedetails}
      >
        <img src={PrintIcon} className="printIcon" alt="printIcon" /> Share
      </button>
    </>
  );
};

export default MedHis;
