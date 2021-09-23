import React, { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";
import HomeImg from "../images/float.svg";


const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const download = () => {
    history.push("/tool");
  };

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      
      console.log("Here is your DB data",data);
      setUserData(data);

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            RAMM<br></br>
            <span>Healthcare</span>
          </h3>
          <p>Rapid Action Management Module</p>
          <a href="#" className="btn" onClick={download}>
            download now
          </a>
        </div>
        <div className="image">
          <img src={HomeImg} alt="HomeImg" />
        </div>
      </section>
    </>
  );
};

export default About;
