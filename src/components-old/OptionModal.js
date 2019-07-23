import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleOkModal}
        contentLabel="selected option "
        closeTimeoutMS={200}
        // style={customStyles}
    >
    <div className="modal-body">
            <h3>Selected Option </h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleOkModal}>Okey</button>
    </div>

    </Modal>
     );

export default OptionModal;

