import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import FilterIcon from "../images/filter_icon.svg";
import PrintIcon from "../images/motion.png";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function PatientDetails() {
  const history = useHistory();
  const MySwal = withReactContent(Swal);
  const sharedetails = () => {
    MySwal.fire('Proceed to resource allocation');
    history.push("/workflow");
  };
  const [userData, setUserData] = useState([]);

  const callPatient = async () => {
    try {
      const res = await fetch("/contact", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();

      console.log("Here is your DB data", data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callPatient();
  }, []);
  return (
    <>
      <header>
        <h1>Patient Details</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <h2>Showing entries</h2>
          </a>
          <div className="dropdown">
            <button
              className="btn"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src={FilterIcon} alt /> sort
            </button>
            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">
                <label>
                  <input className="box-dropdown" type="checkbox" />
                  &nbsp;option 1
                </label>
              </a>
            </div>
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search here..."
                  aria-label="Search"
                />
              </form>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container scroll-table">
        <table className="table table-hover table-info table-striped">
          <thead>
            <tr className="table-danger">
              <th className="table-content" scope="col">
                Select
              </th>
              <th scope="col">Patient ID</th>
              <th scope="col"> Patient Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Profession</th>
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
                  <td>{curElem._id}</td>
                  <td>{curElem.name}</td>
                  <td>{curElem.email}</td>
                  <td>{curElem.phone}</td>
                  <td>{curElem.work}</td>
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
        style={{ transform: 'translateX(100px)' }}
        onClick={sharedetails}
      >
        <img src={PrintIcon} className="printIcon" alt="printIcon" /> Share
      </button>
    </>
  );
}

export default PatientDetails;
