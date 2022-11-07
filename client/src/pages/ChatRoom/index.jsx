import React from "react";
import { Col, Row } from "antd";
import Sidebar from "../../components/Sidebar";
import ChatWindow from "../../components/ChatWindow";
import ChatRoomInfo from "../../components/ChatRoomInfo";

export default function ChatRoom() {
  return (
    <Row>
      <Col
        span={6}
        // flex="0.2 230px"
      >
        <Sidebar />
      </Col>
      <Col
        span={13}
        // flex="0.8"
      >
        <ChatWindow />
      </Col>
      <Col span={5}>
        <ChatRoomInfo />
      </Col>
    </Row>
  );
}
