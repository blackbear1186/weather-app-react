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
      <button className="button" onClick={handleOpenModal}>Change Location</button>
      <Modal isOpen={isOpen} onClose={handleCloseModal}/>
    </div>
  );
}

export default ChangeLocation;
