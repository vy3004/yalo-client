import { Button } from "antd";
import React from "react";
import {
  UsergroupAddOutlined,
  SearchOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import {
  BsReverseLayoutSidebarReverse,
  BsReverseLayoutSidebarInsetReverse,
} from "react-icons/bs";
import "./style.css";
import { AppContext } from "../../context/AppProvider";

export default function ChatHeaderBtn() {
  const { isShowChatRoomInfo, setIsShowChatRoomInfo, setIsAddMemberModalOpen } =
    React.useContext(AppContext);

  const handleAddMember = () => {
    setIsAddMemberModalOpen(true);
  };

  const handleShowChatRoomInfo = () => {
    setIsShowChatRoomInfo(!isShowChatRoomInfo);
  };

  return (
    <div className="chat-header-btn">
      <Button
        className="btn-chat-header"
        title="Thêm bạn vào nhóm"
        type="text"
        icon={<UsergroupAddOutlined />}
        onClick={handleAddMember}
      />
      <Button
        className="btn-chat-header"
        title="Tìm kiếm tin nhắn"
        type="text"
        icon={<SearchOutlined />}
      />
      <Button
        className="btn-chat-header"
        title="Cuộc gọi video"
        type="text"
        icon={<VideoCameraOutlined />}
      />
      <Button
        className="btn-chat-header btn-sidebar"
        title="Thông tin hội thoại"
        type="text"
        onClick={handleShowChatRoomInfo}
        icon={
          isShowChatRoomInfo ? (
            <BsReverseLayoutSidebarInsetReverse style={{ color: "#0068ff" }} />
          ) : (
            <BsReverseLayoutSidebarReverse style={{ color: "black" }} />
          )
        }
      />
    </div>
  );
}
