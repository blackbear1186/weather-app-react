import { createContext, useContext, useState,useEffect } from "react";
// import axios from "axios";
// Create object with empty data for weather app
const location = {
  city: "",
  country: "",
};
// create Context object
export const LocationContext = createContext(location)

export const LocationProvider = ({ children }) => {
  return (
    <LocationContext.Provider value={{ location }}>{children}</LocationContext.Provider>
  );
};

