import React from "react";
import { Col, Row } from "antd";
import MainTab from "../MainTab";
import "./style.css";
import Navbar from "../Navbar";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Row>
        <Col span={4}>
          <MainTab />
        </Col>
        <Col span={20}>
          <Navbar />
        </Col>
      </Row>
    </div>
  );
}
