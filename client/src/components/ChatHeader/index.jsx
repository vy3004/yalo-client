import React from "react";
import { Col, Row } from "antd";
import "./style.css";
import ChatHeaderInfo from "../ChatHeaderInfo";
import ChatHeaderBtn from "../ChatHeaderBtn";

export default function ChatHeader() {
  return (
    <div className="chat-header">
      <Row>
        <Col span={16}>
          <ChatHeaderInfo />
        </Col>
        <Col span={8}>
          <ChatHeaderBtn />
        </Col>
      </Row>
    </div>
  );
}
