import { useState, useContext } from "react";
// import GetData from "../GetData";
import { LocationContext } from "../LocationContext";
import close from "../icons/close.png";

function Modal({ isOpen, onClose }) {
  // use the useState variables to update the location object
  // in useContext
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  // Get location data from useContext
  const { location } = useContext(LocationContext);

  function handleSubmit(e) {
    e.preventDefault();
    // update useContext location object
    location.city = city;
    location.country = country;
    // Clear text in the input fields
    setCity("");
    setCountry("");
    // Close the modal
    onClose();
  }

  // This keeps the modal closed until the Change Location button
  // is pressed in the ChangeLocation Component.
  if (isOpen === false) {
    return null;
  }

  return (
    <div className="modal-fixed">
      <form className="modal">
        <div className="modal-header-button">
          <div className="header">
            <h3>Edit Location</h3>
          </div>

          <div className="btn">
            <img src={close} alt="Close" height="15px" onClick={onClose}/>
          </div>
        </div>

        <div className="input">
          {/* Include htmlFor to focus input when click on label , match with id*/}
          <label htmlFor="city">
            <strong>City:</strong>
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />
        </div>
        <div className="input">
          <label htmlFor="country">
            <strong>Country:</strong>
          </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
          />
        </div>
        <button onClick={handleSubmit} className="save-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default Modal;
