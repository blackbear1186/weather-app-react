import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { LocationContext } from "./LocationContext";

function GetLocation() {
  const { location } = useContext(LocationContext)
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {
    // Get location of user by IP address 
    const fetchLocation = async () => {
      axios
        .get("http://ip-api.com/json/")
        .then((response) => {
          setCity(response.data.city);
          setCountry(response.data.country);
          // Pass location data from useState variables to useContext variables to update throughout app
          location.city = city;
          location.country = country;
        })
        .catch((err) => console.log(err));
    };
    fetchLocation();
  }, [city, country, location]);
}

export default GetLocation;
