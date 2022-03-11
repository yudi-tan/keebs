import { NextPage } from "next";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import LoginModal from "./login-modal";

const LoginButton: NextPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={openModal} variant="contained">
        Login
      </Button>
      <Modal open={modalIsOpen} onClose={closeModal}>
        <LoginModal closeModal={closeModal}></LoginModal>
      </Modal>
    </Box>
  );
};

export default LoginButton;
