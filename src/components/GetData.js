import { useState, useEffect, useContext } from "react";
import Current from "./ui/Current";
import { LocationContext } from "./LocationContext";

function GetData() {
  // Get useContext location data
  const { location } = useContext(LocationContext);
  const apiKey = "3fa7da1fadcb0f96d64a09bab5c5c93f";
  const [data, setData] = useState([]);
  // Fetch weather data passing the useContext variable into the api
  // Keep function that gets the data inside the useEffect function to prevent errors
  useEffect(() => {
    const fetchData = async () => {
  
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location.city},${location.country}&appid=${apiKey}&units=imperial`
      )
        .then((res) => res.json())
        .then((jsonData) => {
          setData(jsonData);
          // console.log(jsonData)
        })
        .catch((err) => console.log(err.message));
    };
    fetchData();
    // Add data, city, and country useContext variables as dependencies to remove error
}, [data,location.city,location.country]);

  return (
    // Return an empty div if the data is undefined
    // Needed to not get an error when accessing the data
    <>
      {typeof data.main != "undefined" ? <Current data={data} /> : <div></div>}
    </>
  );
}

export default GetData;
