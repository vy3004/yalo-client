import {
  BellOutlined,
  DeleteOutlined,
  EditOutlined,
  ExportOutlined,
  PushpinOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Image, Menu } from "antd";
import React from "react";
import { AppContext } from "../../context/AppProvider";
import "./style.css";

export default function ChatRoomInfo() {
  const {
    setIsLogoutChatRoomModalOpen,
    setIsDeleteChatHistoryModalOpen,
    setIsAddMemberModalOpen,
    setIsRenameGroupModalOpen,
    setIsInfoGroupModalOpen,
  } = React.useContext(AppContext);

  const handleAddMember = () => {
    setIsAddMemberModalOpen(true);
  };

  const handleInfoGroup = () => {
    setIsInfoGroupModalOpen(true);
  };

  const handleRenameGroup = () => {
    setIsRenameGroupModalOpen(true);
  };

  const handleLogoutChatRoom = () => {
    setIsLogoutChatRoomModalOpen(true);
  };

  const handleDeleteChatHistory = () => {
    setIsDeleteChatHistoryModalOpen(true);
  };

  const user = {
    displayName: "Kha Vỹ",
    photoURL: "",
    onlineStatus: "Truy cập 30 phút trước",
  };

  const members = [
    {
      displayName: "Kha Vỹ",
      photoURL: "",
      isFriend: 1, // Đã kết bạn
    },
    {
      displayName: "Vỹ",
      photoURL: "",
      isFriend: 2, // Chưa kết bạn
    },
    {
      displayName: "Kha",
      photoURL: "",
      isFriend: 3, // Đang kết bạn
    },
  ];

  const links = [
    {
      url: "https://www.google.com/",
      time: "7/11/2022",
    },
    {
      url: "https://www.facebook.com/",
      time: "7/11/2022",
    },
    {
      url: "https://www.youtube.com/",
      time: "7/11/2022",
    },
  ];

  function getItem(label, key, children) {
    return {
      key,
      children,
      label,
    };
  }

  const memberItems = [
    getItem(
      <span className="chat-room-info-body-mn">Thành viên nhóm</span>,
      "sub1",
      members.map((member, index) =>
        getItem(
          <div className="chat-room-info-body-members-lst">
            <div className="chat-room-info-body-members-member">
              <Avatar size={37} src={member.photoURL}>
                {member.photoURL
                  ? ""
                  : member.displayName?.charAt(0)?.toUpperCase()}
              </Avatar>
              <span
                style={{
                  color: "black",
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginLeft: "0.5rem",
                }}
              >
                {member.displayName}
              </span>
            </div>

            <div>
              {member.isFriend === 1 ? (
                ""
              ) : member.isFriend === 2 ? (
                <Button type="text">Kết bạn</Button>
              ) : (
                <Button type="text">Đã gửi</Button>
              )}
            </div>
          </div>,
          index
        )
      )
    ),
  ];
  const imgItems = [
    getItem(<span className="chat-room-info-body-mn">Ảnh</span>, "sub1", [
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
      label: <span className="chat-room-info-body-mn">Video</span>,
      key: "submenu",
      children: [
        {
          label: <div style={{ height: "100px" }}>TEST</div>,
          key: "submenu-item-1",
        },
      ],
    },
  ];

  const fileItems = [
    getItem(<span className="chat-room-info-body-mn">File</span>, "sub1", [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ];

  const linkItems = [
    getItem(
      <span className="chat-room-info-body-mn">Link</span>,
      "sub1",
      links.map((link, index) =>
        getItem(
          <div className="chat-room-info-body-link">
            <div className="chat-room-info-body-link-l">
              <span
                style={{
                  color: "black",
                  fontSize: "16px",
                  fontWeight: "500",
                  marginLeft: "0.5rem",
                }}
              >
                {link.url}
              </span>
            </div>

            <div>
              <span>{link.time}</span>
            </div>
          </div>,
          index
        )
      )
    ),
  ];
  const settingItems = [
    getItem(<span className="chat-room-info-body-mn">Thiết lập</span>, "sub1", [
      getItem(
        <Button
          style={{ color: "red", fontSize: "16px" }}
          type="text"
          icon={<DeleteOutlined />}
          onClick={handleDeleteChatHistory}
        >
          Xóa lịch sử trò chuyện
        </Button>,
        "1"
      ),
      getItem(
        <Button
          style={{ color: "red", fontSize: "16px" }}
          type="text"
          icon={<ExportOutlined />}
          onClick={handleLogoutChatRoom}
        >
          Rời nhóm
        </Button>,
        "2"
      ),
    ]),
  ];

  return (
    <div className="chat-room-info">
      <div className="chat-room-info-header">
        <span>Thông tin nhóm</span>
      </div>
      <div className="chat-room-info-body">
        <div className="chat-room-info-body-btn chat-room-info-body-body">
          <Button
            className="chat-room-info-body-btn-avatar"
            type="text"
            onClick={handleInfoGroup}
            icon={
              <Avatar size={70} src={user.photoURL}>
                {user.photoURL
                  ? ""
                  : user.displayName?.charAt(0)?.toUpperCase()}
              </Avatar>
            }
          ></Button>
          <div className="chat-room-info-body-btn-name">
            <span>{user.displayName}</span>
            <Button
              type="text"
              onClick={handleRenameGroup}
              icon={<EditOutlined />}
            />
          </div>
          <div className="chat-room-info-body-btn-group">
            <div>
              <Button type="text" icon={<BellOutlined />} />
              <span>Tắt thông báo</span>
            </div>
            <div>
              <Button type="text" icon={<PushpinOutlined />} />
              <span>Ghim hội thoại</span>
            </div>
            <div>
              <Button
                type="text"
                onClick={handleAddMember}
                icon={<UsergroupAddOutlined />}
              />
              <span>Thêm thành viên</span>
            </div>
            <div>
              <Button type="text" icon={<SettingOutlined />} />
              <span>Quản lý nhóm</span>
            </div>
          </div>
        </div>
        <div className="chat-room-info-body-body">
          <Menu mode="inline" items={memberItems} />
        </div>
        <div className="chat-room-info-body-body">
          <Menu mode="inline" items={imgItems} />
        </div>
        <div className="chat-room-info-body-body">
          <Menu items={items} mode="inline" />
        </div>
        <div className="chat-room-info-body-body">
          <Menu mode="inline" items={fileItems} />
        </div>
        <div className="chat-room-info-body-body">
          <Menu mode="inline" items={linkItems} />
        </div>
        <div className="chat-room-info-footer">
          <Menu mode="inline" items={settingItems} defaultOpenKeys={["sub1"]} />
        </div>
      </div>
    </div>
  );
}
