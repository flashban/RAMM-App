import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import HospitalBed from "../images/hospital-bed.png";
import Doctor from "../images/male-nurse.png";
import Nurse from "../images/nurse.png";
import Specialist from "../images/researcher.png";
import CountUp from "react-countup";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const AllocateResource = () => {
  const MySwal = withReactContent(Swal);
  const history = useHistory();
  const [udata, setData] = useState([]);
  const submitDetails = () => {
    MySwal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Thank you for submitting. We will inform the concerned health workers of the Set selected!!',
      showConfirmButton: false,
      timer: 3000
    });
    history.push("/tool");
  };
  const resource = async () => {
    try {
      const res = await fetch("");

      const data = await res.json();

      console.log("Data is here :", data);
      setData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    resource();
  }, []);
  return (
    <>
      <div className="container">
        <section>
          <div className="total-cases block">
            <img src={Doctor} className="printIcon" alt="printIcon" />
            <CountUp
              className="numbers"
              start={0}
              end={80}
              duration={2.5}
              separator=","
            />
            <p className="label">Active Doctors</p>
          </div>
          <div className="active-cases block">
            <img src={Nurse} className="printIcon" alt="printIcon" />
            <CountUp
              className="numbers"
              start={0}
              end={120}
              duration={2.5}
              separator=","
            />
            <p className="label">Active Nurses</p>
          </div>
          <div className="death-cases block">
            <img src={Specialist} className="printIcon" alt="printIcon" />
            <CountUp
              className="numbers"
              start={0}
              end={35}
              duration={2.5}
              separator=","
            />
            <p className="label">Active specialists</p>
          </div>
          <div className="recovered-cases block">
            <img src={HospitalBed} className="printIcon" alt="printIcon" />
            <CountUp
              className="numbers"
              start={0}
              end={250}
              duration={2.5}
              separator=","
            />
            <p className="label">Total beds</p>
            <CountUp
              className="numbers"
              start={0}
              end={90}
              duration={2.5}
              separator=","
            />
            <p className="label">allocated beds</p>
            <CountUp
              className="numbers"
              start={0}
              end={160}
              duration={2.5}
              separator=","
            />
            <p className="label">Free beds</p>
          </div>
          <div className="news">
            <div className="container">
              <header>
                <h1>Resource Available Status</h1>
              </header>
              <div className="container">
                <div className="box box-cyan">
                  <h2>Set 1</h2>
                  <p>
                    <b>Doctor Name :</b> Harshvardhan
                    <br></br>
                    <b>Nurses :</b> Sudha, Manish
                    <br></br>
                    <b>Allocated room :</b>'B' floor 9904
                  </p>
                  <p style={{ transform: "translateX(20px)" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                  </p>
                </div>

                <div className="box box-cyan">
                  <h2>Set 2</h2>
                  <p>
                    <b>Doctor Name :</b> Naveen Prasad
                    <br></br>
                    <b>Nurses :</b> Manish, Aruna
                    <br></br>
                    <b>Allocated room :</b>'A' floor 3302
                  </p>
                  <p style={{ transform: "translateX(20px)" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                  </p>
                </div>

                <div className="box box-cyan">
                  <h2>Set 3</h2>
                  <p>
                    <b>Doctor Name :</b> Jack Timothy
                    <br></br>
                    <b>Nurses :</b> Kashyup, Hira 
                    <br></br>
                    <b>Allocated room :</b>'C' floor 4589
                  </p>
                  <p style={{ transform: "translateX(20px)" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                  </p>
                </div>

                <div className="box box-cyan">
                  <h2>Set 4</h2>
                  <p>
                    <b>Doctor Name :</b> Harshvardhan
                    <br></br>
                    <b>Nurses :</b> Geeta, Shivam
                    <br></br>
                    <b>Allocated room :</b>'B' floor 7845
                  </p>
                  <p style={{ transform: "translateX(20px)" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="flexCheckDefault"
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <button
          className="btn"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          onClick={submitDetails}
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default AllocateResource;
