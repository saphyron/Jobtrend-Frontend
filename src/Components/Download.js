import { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";





export default function Download() {
  const [modal, setModal] = useState(false);

  return (
    <div>
        
    <div className="button" onClick={() => setModal(true)}> Download </div>
      <PureModal
        footer={
          <div>
            <button onClick={() => setModal(false)}>Fortryd</button>
            <button onClick={() => alert("Download initiated!")}>Download</button>
          </div>
        }
        isOpen={modal}
        closeButton="close"
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <p>Her kan du downloade indholdet</p>
      </PureModal>
    </div>
  );
}

/*import React from 'react';

export default function Download() {
  return <div>Download Component Works!</div>;
}*/