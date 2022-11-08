import React, { useContext } from "react";
import { Modal } from "antd";
import { AppContext } from "../../context/AppProvider";
import "./style.css";

export default function AddMemberModal() {
  const { isAddMemberModalOpen, setIsAddMemberModalOpen } =
    useContext(AppContext);

  const handleOk = () => {
    setIsAddMemberModalOpen(false);
  };

  const handleCancel = () => {
    setIsAddMemberModalOpen(false);
  };

  return (
    <div>
      <Modal
        title="Thêm thành viên"
        centered
        open={isAddMemberModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        cancelText="Hủy"
        okText="Xác nhận"
      >
        <span style={{ fontSize: "16px" }}>Thêm thành viên</span>
      </Modal>
    </div>
  );
}
