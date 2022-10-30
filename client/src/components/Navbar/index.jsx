import React from "react";
import { Col, Row } from "antd";
import Search from "../Search";
import ChatList from "../ChatList";
import "./style.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Row>
        <Col span={24}>
          <Search />
        </Col>
        <Col span={24}>
          <ChatList />
        </Col>
      </Row>
    </div>
  );
}
