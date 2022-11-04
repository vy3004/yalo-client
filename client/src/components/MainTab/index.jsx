import React, { useRef } from "react";
import { Avatar, Button } from "antd";
import {
  MessageOutlined,
  AccountBookOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import "./style.css";
import { AppContext } from "../../context/AppProvider";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MainTab() {
  const { setIsInfoUserModalOpen } = React.useContext(AppContext);
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleOpenInfoUser = () => {
    setIsInfoUserModalOpen(true);
  };

  const handleOpenMenuUser = () => {
    setIsActive(!isActive);
  };

  // const handleOpenMenuSetting = () => {
  //   setIsActive(!isActive);
  // };

  const handleLogout = () => {
    navigate("/login");
  };

  const user = {
    displayName: "Kha Vỹ",
    photoURL: "",
  };

  return (
    <div className="main-tab">
      <div className="main-tab-top">
        <Button className="btn-avatar" onClick={handleOpenMenuUser}>
          <Avatar size="large" src={user.photoURL}>
            {user.photoURL ? "" : user.displayName?.charAt(0)?.toUpperCase()}
          </Avatar>
        </Button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li className="menu-header">
              <span>{user.displayName}</span>
            </li>
            <li className="menu-body">
              <Button onClick={handleOpenInfoUser} type="text">
                Hồ sơ của bạn
              </Button>
            </li>
            <li className="menu-footer">
              <Button onClick={handleLogout} type="text">
                Đăng xuất
              </Button>
            </li>
          </ul>
        </nav>

        <Button
          className="btn-menu"
          onClick={handleOpenMenuUser}
          icon={
            <MessageOutlined style={{ fontSize: "180%", color: "#ffffff" }} />
          }
        />
        <Button
          className="btn-menu"
          icon={
            <AccountBookOutlined
              style={{ fontSize: "180%", color: "#ffffff" }}
            />
          }
        />
      </div>
      <div className="main-tab-bottom">
        <Button
          className="btn-menu"
          // onClick={handleOpenMenuSetting}
          icon={
            <SettingOutlined style={{ fontSize: "180%", color: "#ffffff" }} />
          }
        />
        {/* <nav
          ref={dropdownRef}
          className={`menu-setting ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li className="menu-body">
              <Button onClick={handleOpenInfoUser} type="text">
                Cài đặt
              </Button>
            </li>
            <li className="menu-footer">
              <Button onClick={handleLogout} type="text">
                Đăng xuất
              </Button>
            </li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
}
