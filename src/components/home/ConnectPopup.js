import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { motion } from "framer-motion";
import Walletconnect from '../../assets/walletconnectimg.png';
import metamask from '../../assets/metamask.png';

function ConnectPopup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <motion.button
            className="px-[23px] py-2 btn-primary rounded-[20px] text-white block"
            onClick={handleShow}
            whileTap={{ scale: 0.9 }}
          >
           Connect 
        </motion.button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className="text-[#2B2B8B] font-semibold text-[36px] text-left mb-6">Connect Wallet</Modal.Title>
        </Modal.Header>
          <Modal.Body>
            <motion.button
                className="px-[23px] py-2 btn-primary rounded-[20px] text-white flex mx-auto font-medium"
                onClick={handleShow}
                onClick={window['Connect']}
                id={'connect'} 
                whileTap={{ scale: 0.9 }}
              ><img src={metamask} alt="Metamask" 
                className="md:flex w-[10%] h-[20%] lg:[20%] block mx-auto font-medium"/>
                  Metamask
            </motion.button>
              <br/>
            <motion.button
              className="px-[23px] py-2 btn-primary rounded-[20px] text-white flex mx-auto font-medium"
                onClick={handleShow}
                whileTap={{ scale: 0.9 }}
              ><img src={Walletconnect} alt="wallet connect icon"
                className="md:flex w-[10%] h-[20%] lg:[20%] block mx-auto font-medium"/>
                  WalletConnect
            </motion.button>
              <br/>
            <motion.button
                className="px-[23px] py-2 btn-primary rounded-[20px] text-white flex mx-auto font-medium"
                onClick={handleShow}
                whileTap={{ scale: 0.9 }}
              >
                  Unstoppable Domain
            </motion.button>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConnectPopup;
