import React from "react";
import { Col, Row } from "antd";
import "./style.css";
import ChatHeaderInfo from "../ChatHeaderInfo";
import ChatHeaderBtn from "../ChatHeaderBtn";

export default function ChatHeader() {
  return (
    <div className="chat-header">
      <Row>
        <Col flex={3}>
          <ChatHeaderInfo />
        </Col>
        <Col flex={2}>
          <ChatHeaderBtn />
        </Col>
      </Row>
    </div>
  );
}
