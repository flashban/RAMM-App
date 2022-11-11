import React, { createContext, useReducer } from "react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import "./App.scss";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import { initialState, reducer } from "../src/reducer/UseReducer";
import ToolSearch from "./components/Tool";
import PatientDetails from "./components/PatientDetails";
import HospitalDetails from "./components/HospitalDetails";
import MedHis from "./components/MedHis";
import WorkFlow from "./components/WorkFlow";
import Allocate from "./components/AllocateResource";
import Learning from "./components/Learning/Learning";

export const UserContext = createContext();

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>

      <Route path="/about">
        <About></About>
      </Route>

      <Route path="/contact">
        <Contact></Contact>
      </Route>

      <Route path="/login">
        <Login></Login>
      </Route>

      <Route path="/signup">
        <Signup></Signup>
      </Route>

      <Route path="/logout">
        <Logout></Logout>
      </Route>

      <Route path="/tool">
        <ToolSearch></ToolSearch>
      </Route>

      <Route path="/patientDetails">
        <PatientDetails></PatientDetails>
      </Route>

      <Route path="/hopitalDetails">
        <HospitalDetails></HospitalDetails>
      </Route>

      <Route path="/medicalHistory">
        <MedHis></MedHis>
      </Route>

      <Route path="/workflow">
        <WorkFlow></WorkFlow>
      </Route>

      <Route path="/learning">
        <Learning></Learning>
      </Route>
      
      <Route path="/allocate">
        <Allocate></Allocate>
      </Route>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Navbar></Navbar>
        <Routing></Routing>
      </UserContext.Provider>
    </>
  );
}

export default App;
