import React from "react";
import HomeImg from "../images/float.svg";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            RAMM<br></br>
            <span>Healthcare</span>
          </h3>
          <p>Rapid Action Management Module</p>
        </div>
        <div className="image">
          <img src={HomeImg} alt="HomeImg" />
        </div>
      </section>
    </>
  );
};

export default Home;
