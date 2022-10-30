import React from "react";
import { Row, Col } from "antd";
import "./style.css";
import ChatHeader from "../ChatHeader";
import ChatView from "../ChatView";

export default function ChatWindow() {
  return (
    <div className="chatwindow">
      <Row>
        <Col span={24}>
          <ChatHeader />
        </Col>
        <Col span={24}>
          <ChatView />
        </Col>
      </Row>
    </div>
  );
}
