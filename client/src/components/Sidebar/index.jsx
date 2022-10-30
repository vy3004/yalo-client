import React from "react";
import { Col, Row } from "antd";
import Menu from "../Menu";
import "./style.css";
import Navbar from "../Navbar";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Row>
        <Col span={4}>
          <Menu />
        </Col>
        <Col span={20}>
          <Navbar />
        </Col>
      </Row>
    </div>
  );
}
