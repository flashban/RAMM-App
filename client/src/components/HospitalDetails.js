import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fetchData } from "../api";
import CountUp from "react-countup";

function HospitalDetails() {
  const history = useHistory();
  const [userData, setMedico] = useState([]);
  const callMedicals = async () => {
    try {
      const res = await fetchData();
      console.log("Here is Hospital data", res.hospitalData);
      setMedico(res.hospitalData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callMedicals();
  }, []);

  const wikihow = () => {
    history.push("/workflow");
  };

  return (
    <>
      <header>
        <h1>Medical hospitals Statewise</h1>
      </header>
      <div className="container scroll-table">
        {userData.map((element) => {
          return (
            <div className="box box-red">
              <h2>{element.name}</h2>
              <p>
                <b>state :</b> {element.state}
                <br></br>
                <b>City : </b>
                {element.city}
                <br></br>
                <b>Ownership : </b>
                {element.ownership}
                <br></br>
                <b>Admission Capacity : </b>
                <CountUp
                  start={0}
                  end={element.admissionCapacity}
                  duration={2.5}
                  separator=","
                />
                <br></br>
                <b>Total Number of Beds : </b>
                <CountUp
                  start={0}
                  end={element.hospitalBeds}
                  duration={2.5}
                  separator=","
                />
              </p>
              <button
                className="btn"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={wikihow}
              >
                Know more
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HospitalDetails;
