import {
  BellOutlined,
  EditOutlined,
  PushpinOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Image, Menu } from "antd";
import React from "react";
import "./style.css";

export default function ChatRoomInfo() {
  const user = {
    displayName: "Kha Vỹ",
    photoURL: "",
    onlineStatus: "Truy cập 30 phút trước",
  };

  const handleOpenInfo = () => {
    console.log("Info User");
  };

  function getItem(label, key, children) {
    return {
      key,
      children,
      label,
    };
  }
  const memberItems = [
    getItem(<span>Thành viên nhóm</span>, "sub1", [
      getItem(
        <div>
          <Avatar>Member 1</Avatar>
          <span>Member 1</span>
          <Button>Kết bạn</Button>
        </div>,
        "1"
      ),
      getItem(
        <div>
          <Avatar>Member 2</Avatar>
          <span>Member 2</span>
          <Button>Kết bạn</Button>
        </div>,
        "2"
      ),
      getItem(
        <div>
          <Avatar>Member 3</Avatar>
          <span>Member 3</span>
          <Button>Kết bạn</Button>
        </div>,
        "3"
      ),
      getItem(
        <div>
          <Avatar>Member 4</Avatar>
          <span>Member 4</span>
          <Button>Kết bạn</Button>
        </div>,
        "4"
      ),
    ]),
  ];
  const imgItems = [
    getItem(<span>Ảnh</span>, "sub1", [
      getItem(
        <Image.PreviewGroup>
          <Image
            width={50}
            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          />
          <Image
            width={50}
            src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
          />
        </Image.PreviewGroup>,
        "1"
      ),
    ]),
  ];

  const items = [
    {
      label: "sub menu",
      key: "submenu",
      children: [{ label: "item 3", key: "submenu-item-1" }],
    },
  ];

  return (
    <div className="chat-room-info">
      <div className="chat-room-info-header">
        <span>Thông tin nhóm</span>
      </div>
      <div className="chat-room-info-body">
        <div className="chat-room-info-body-btn">
          <Button className="info-avatar-user" type="text">
            <Avatar size="large" src={user.photoURL} onClick={handleOpenInfo}>
              {user.photoURL ? "" : user.displayName?.charAt(0)?.toUpperCase()}
            </Avatar>
          </Button>
          <span>
            {user.displayName} <Button type="text" icon={<EditOutlined />} />
          </span>
          <div>
            <div>
              <Button type="text" icon={<BellOutlined />} />
              <span>Tắt thông báo</span>
            </div>
            <div>
              <Button type="text" icon={<PushpinOutlined />} />
              <span>Ghim hội thoại</span>
            </div>
            <div>
              <Button type="text" icon={<UsergroupAddOutlined />} />
              <span>Thêm thành viên</span>
            </div>
            <div>
              <Button type="text" icon={<SettingOutlined />} />
              <span>Quản lý nhóm</span>
            </div>
          </div>
        </div>
        <div className="chat-room-info-body-members">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={memberItems}
          />
        </div>
        <div className="chat-room-info-body-img">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={imgItems}
          />
        </div>
        <div className="chat-room-info-body-video">
          <Menu items={items} mode="inline" />
        </div>
      </div>
    </div>
  );
}
