import React, { useContext, useState } from "react";
import { Button, Modal } from "antd";
import { AppContext, AppProvider } from "../../config/AppContext";
const UtilModal = ({ children, title }) => {
  const { modalOpen, setModalOpen } = useContext(AppContext);
  const showModal = () => {
    setModalOpen(true);
  };
  const handleOk = () => {
    setModalOpen(false);
  };
  const handleCancel = () => {
    setModalOpen(false);
  };
  return (
    <Modal
      title={title}
      open={modalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  );
};
export default UtilModal;
