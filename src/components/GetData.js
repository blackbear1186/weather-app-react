import { useState, useEffect, useContext } from "react";
import Current from "./ui/Current";
import { LocationContext } from "./LocationContext";

function GetData() {
  // console.log(location.city)
  const { location } = useContext(LocationContext);

  let city = location.city;
  let country = location.country;
  console.log(city, country);
  const apiKey = "3fa7da1fadcb0f96d64a09bab5c5c93f";
  const [data, setData] = useState([]);
  const fetchData = async () => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=imperial`
    )
      .then((res) => res.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((err) => console.log(err.message));
  };
  console.log(data);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    // Return an empty div if the data is undefined
    // Needed to not get an error when accessing the data
    <>
      {typeof data.main != "undefined" ? <Current data={data} /> : <div></div>}
    </>
  );
}

export default GetData;
