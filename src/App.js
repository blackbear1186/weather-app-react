import logo from "./logo.svg";
import "./App.css";
import GetData from "./components/GetData";
import Modal from "./components/ui/Modal";
import { useState } from "react";
import { LocationProvider } from "./components/LocationContext";

function App() {

  return (
    <>
      <GetData />
    </>
  );
}


export default App;
