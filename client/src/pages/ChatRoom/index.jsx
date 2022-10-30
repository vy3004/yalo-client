import React from "react";
import { Col, Row } from "antd";
import Sidebar from "../../components/Sidebar";
import ChatWindow from "../../components/ChatWindow";

export default function ChatRoom() {
  return (
    <Row>
      <Col flex={"420px"}>
        <Sidebar />
      </Col>
      <Col flex="auto">
        <ChatWindow />
      </Col>
    </Row>
  );
}
