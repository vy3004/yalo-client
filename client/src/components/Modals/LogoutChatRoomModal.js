import React, { useContext } from "react";
import { Modal } from "antd";
import { AppContext } from "../../context/AppProvider";
import "./style.css";

export default function LogoutChatRoomModal() {
  const { isLogoutChatRoomModalOpen, setIsLogoutChatRoomModalOpen } =
    useContext(AppContext);

  const handleLogout = () => {
    // Rời nhóm và xóa tin nhắn
    setIsLogoutChatRoomModalOpen(false);
  };

  const handleCancel = () => {
    setIsLogoutChatRoomModalOpen(false);
  };

  return (
    <div>
      <Modal
        title="Rời nhóm và xóa hội thoại"
        centered
        open={isLogoutChatRoomModalOpen}
        onCancel={handleCancel}
        onOk={handleLogout}
        cancelText="Không"
        okText="Rời nhóm"
      >
        <span style={{ fontSize: "16px" }}>
          Rời nhóm sẽ đồng thời xóa toàn bộ tin nhắn của nhóm đó. Bạn có muốn
          tiếp tục?
        </span>
      </Modal>
    </div>
  );
}
