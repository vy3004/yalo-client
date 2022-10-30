import React from "react";
import { Col, Row } from "antd";
import "./style.css";
import ChatViewMessage from "../ChatViewMessage";
import ChatViewInput from "../ChatViewInput";

export default function ChatView() {
  return (
    <div className="chat-view">
      <Row>
        <Col span={24}>
          <ChatViewMessage />
        </Col>
        <Col span={24}>
          <ChatViewInput />
        </Col>
      </Row>
    </div>
  );
}
