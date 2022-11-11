import React, { useEffect, useState } from "react";
import Logopic1 from "../../images/logo_1.png";
import "./learning.css"

const Learning = () => {
  const [videoInput, setVideoInput] = useState('');

  const searchVideo = () => {
    alert(videoInput)
  };
  return (
    <>
      <header>
        <h1>Video Tutorials</h1>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <form className="d-flex">
                <input
                  className="form-control me-2"
                  aria-label="Search"
                  type="video"
                  id="videoInput"
                  name="videoInput"
                  autoComplete="off"
                  value={videoInput}
                  onChange={(e) => setVideoInput(e.target.value)}
                  placeholder="Search..."
                />
                <button
                  className="btn"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={ searchVideo }
                >
                  proceed
                </button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="box box-green">
          <img src={Logopic1} alt="RAMM" className="thumbnail" />
          <br />
          <h4>Title : </h4>
          <h5>Description : </h5>
        </div>
      </div>
    </>
  );
};

export default Learning;
