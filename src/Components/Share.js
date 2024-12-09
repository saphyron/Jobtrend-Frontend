import { useState } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import {
  TwitterIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  EmailIcon,
  WhatsappIcon,
  LinkedinIcon,
} from "react-share";

export default function Share() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className="button" onClick={() => setModal(true)}>
        Del
      </div>
      <PureModal
        header="Del"
        isOpen={modal}
        closeButton="close"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        <div className="flexRow">
          <TwitterIcon size={32} round={true} />
          <FacebookIcon size={32} round={true} />
          <FacebookMessengerIcon size={32} round={true} />
          <LinkedinIcon size={32} round={true} />
          <EmailIcon size={32} round={true} />
          <WhatsappIcon size={32} round={true} />
        </div>
      </PureModal>
    </div>
  );
}

/*import React from 'react';

export default function Share() {
  return <div>Download Component Works!</div>;
}*/