import { useState, useEffect, useContext } from "react";
import GetData from "../GetData";
import { LocationContext } from "../LocationContext";

function Modal({ isOpen, onClose }) {
  // pass this city and country data to GetData to update city.
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const {location} = useContext(LocationContext)
  function handleSubmit(e) {
    e.preventDefault();
    location.city = city;
    location.country = country

    // return(
    //   // <GetData city2={city} country2={country}/>
     
    // )
    // const loc = {
    //   city: city,
    //   country: country
    // }
    // location = {loc}
    // setCity("");
    // setCountry("");
 
  }
  // console.log(city, country)
  if (isOpen === false) {
    return null;
  }

  return (
    <div className="modal-fixed">
      <form className="modal">

        <div className="modal-header-button">
      <h3>Edit Location</h3>

          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
        <div className="input">
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />

          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
          />
        </div>
        <button onClick={handleSubmit} className="save-button">Save</button>
      </form>
      
    </div>
  );
}

export default Modal;
