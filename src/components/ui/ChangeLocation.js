import { useState } from 'react';
import Modal from './Modal'
function ChangeLocation() {
  const [isOpen, setIsOpen] = useState(false)
  // Open modal when button is clicked by setting isOpen to true
  function handleOpenModal() {
    setIsOpen(true)
  }
  // Close modal by setting isOpen to false
  function handleCloseModal(){
    setIsOpen(false)
  }
  return (
    <div>
      {/* When Change location button is clicked open the modal */}
      <button className="button" onClick={handleOpenModal}>Change Location</button>
      {/* Pass isOpen boolean and onClose function to Modal component */}
      <Modal isOpen={isOpen} onClose={handleCloseModal}/>
    </div>
  );
}

export default ChangeLocation;
