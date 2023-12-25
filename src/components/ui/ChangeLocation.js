import { useState } from 'react';
import Modal from './Modal'
function ChangeLocation() {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(true)
  }
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
