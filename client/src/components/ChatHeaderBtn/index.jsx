import { Button } from "antd";
import React from "react";
import {
  UsergroupAddOutlined,
  SearchOutlined,
  VideoCameraOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import "./style.css";

export default function ChatHeaderBtn() {
  return (
    <div className="chat-header-btn">
      <Button
        className="btn-chat-header"
        title="Thêm bạn vào nhóm"
        type="text"
        icon={<UsergroupAddOutlined />}
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
        className="btn-chat-header"
        title="Thông tin hội thoại"
        type="text"
        icon={<BarsOutlined />}
      />
    </div>
  );
}
