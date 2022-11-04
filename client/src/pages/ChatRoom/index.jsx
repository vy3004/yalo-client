import React from "react";
import { Col, Row } from "antd";
import Sidebar from "../../components/Sidebar";
import ChatWindow from "../../components/ChatWindow";

export default function ChatRoom() {
  return (
    <Row>
      <Col flex="0.2 230px">
        <Sidebar />
      </Col>
      <Col flex="0.8">
        <ChatWindow />
      </Col>
    </Row>
  );
}
