import React, { useContext } from "react";
import { Avatar, Button, Image, Modal } from "antd";
import { AppContext } from "../../context/AppProvider";
import img_default_group from "../../assets/images/default_group.png";
import AvatarUploader from "react-avatar-uploader";
import "./style.css";
import {
  EditOutlined,
  ExportOutlined,
  SettingOutlined,
} from "@ant-design/icons";

export default function InfoGroupModal() {
  const {
    isInfoGroupModalOpen,
    setIsInfoGroupModalOpen,
    setIsRenameGroupModalOpen,
    setIsLogoutChatRoomModalOpen,
  } = useContext(AppContext);

  const handleCancel = () => {
    setIsInfoGroupModalOpen(false);
  };

  const handleRenameGroup = () => {
    setIsRenameGroupModalOpen(true);
  };

  const handleLogoutChatRoom = () => {
    setIsLogoutChatRoomModalOpen(true);
  };

  const rooms = {
    name: "Nhóm17_CMN",
    photoURL: "",
    members: [
      {
        displayName: "Cao Thắng",
        photoURL:
          "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
      },
      {
        displayName: "Chung Anh",
        photoURL: "",
      },
      {
        displayName: "Mạnh Đức",
        photoURL:
          "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
      },
      {
        displayName: "Trọng Phan",
        photoURL: "",
      },
      {
        displayName: "Kha Vỹ",
        photoURL:
          "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
      },
      {
        displayName: "Cao Thắng",
        photoURL:
          "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
      },
      {
        displayName: "Chung Anh",
        photoURL: "",
      },
      {
        displayName: "Mạnh Đức",
        photoURL:
          "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
      },
      {
        displayName: "Trọng Phan",
        photoURL: "",
      },
      {
        displayName: "Kha Vỹ",
        photoURL:
          "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
      },
    ],
  };

  const imgs = [
    {
      src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
    },
    {
      src: "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
    },
    {
      src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    },
    {
      src: "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
    },
    {
      src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    },
    {
      src: "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
    },
    {
      src: "https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg",
    },

    {
      src: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    },
  ];

  return (
    <div>
      <Modal
        title="Thông tin nhóm"
        open={isInfoGroupModalOpen}
        onCancel={handleCancel}
        centered
        footer
      >
        <div className="info-group-header">
          <div className="info-group-header-avatar">
            {rooms.photoURL ? (
              <Avatar className="" size={70} src={rooms.photoURL}></Avatar>
            ) : (
              <AvatarUploader
                className="md-update-info-user-avt"
                defaultImg={img_default_group}
                size={70}
                uploadURL="http://localhost:3000"
                fileType={"image"}
                style={{ width: "500px" }}
              />
            )}
          </div>
          <div className="chat-room-info-body-btn-name">
            <span>{rooms.name}</span>
            <Button
              type="text"
              onClick={handleRenameGroup}
              icon={<EditOutlined />}
            />
          </div>
          <Button
            className="info-group-header-btn"
            type="text"
            onClick={handleCancel}
          >
            Nhắn tin
          </Button>
        </div>
        <div className="info-group-member">
          <span>Thành viên ({rooms.members.length})</span>
          <Avatar.Group size={60} maxCount={7} onClick={handleLogoutChatRoom}>
            {rooms.members.map((member) => (
              <Avatar src={member.photoURL} title={member.displayName}>
                {member.photoURL
                  ? ""
                  : member.displayName?.charAt(0)?.toUpperCase()}
              </Avatar>
            ))}
          </Avatar.Group>
        </div>
        <div className="info-group-img">
          <span>Hình ảnh</span>
          <div className="info-group-img-group">
            <Image.PreviewGroup>
              {imgs.map((img, index) =>
                index <= 4 ? (
                  <div className="info-group-img-group-img">
                    <Image width={80} height={80} src={img.src} />
                  </div>
                ) : (
                  <div style={{ display: "none" }}>
                    <Image width={80} height={80} src={img.src} />
                  </div>
                )
              )}
            </Image.PreviewGroup>
          </div>
        </div>
        <div className="info-group-btn">
          <Button
            style={{ fontSize: "16px" }}
            type="text"
            icon={<SettingOutlined />}
          >
            Quản lý nhóm, thành viên
          </Button>
          <Button
            style={{ color: "red", fontSize: "16px" }}
            type="text"
            icon={<ExportOutlined />}
            onClick={handleLogoutChatRoom}
          >
            Rời nhóm
          </Button>
        </div>
      </Modal>
    </div>
  );
}
