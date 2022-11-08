import React, { useContext } from "react";
import { Input, Modal } from "antd";
import { AppContext } from "../../context/AppProvider";
import "./style.css";

export default function RenameGroupModal() {
  const { isRenameGroupModalOpen, setIsRenameGroupModalOpen } =
    useContext(AppContext);

  const handleOk = () => {
    setIsRenameGroupModalOpen(false);
  };

  const handleCancel = () => {
    setIsRenameGroupModalOpen(false);
  };

  const rooms = {
    name: "Nhóm17_CNM",
  };

  return (
    <div>
      <Modal
        title="Đổi tên nhóm"
        centered
        open={isRenameGroupModalOpen}
        onCancel={handleCancel}
        onOk={handleOk}
        cancelText="Hủy"
        okText="Xác nhận"
      >
        <span style={{ fontSize: "16px" }}>
          Bạn có chắc muốn đổi tên nhóm, khi xác nhận tên nhóm mới sẽ hiển thị
          với tất cả thành viên.
        </span>
        <Input value={rooms.name} />
      </Modal>
    </div>
  );
}
