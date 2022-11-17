import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { linksYtube } from "../../api/ytube";
import "./learning.css"

const Learning = () => {
  const [videoInput, setVideoInput] = useState('');
  const [vid, setVid] = useState([]);
  const history = useHistory();

  const callYtube = async () => {
    setVid(linksYtube);
  };

  const searchVideo = () => {
    alert(videoInput)
  };

  const handleClick = (myLink) => () => {
    window.location.href=myLink;
  }

  useEffect(() => {
    callYtube();
  }, []);

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
                  className="form-control me-2 search"
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
        {vid.map((e) => {
          return (
            <div className="box box-green" onClick={handleClick(e.Video_link)}>
              <img src={e.thumbnail} alt="RAMM" className="thumbnail" />
              <br />
              <h4>Title : {e.Title}</h4>
              <h5 className="dexc">Description : {e.Description}</h5>
            </div>
          );
        })}
        
      </div>
    </>
  );
};

export default Learning;
