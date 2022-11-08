import React from "react";
import { Col, Row } from "antd";
import Sidebar from "../../components/Sidebar";
import ChatWindow from "../../components/ChatWindow";
import ChatRoomInfo from "../../components/ChatRoomInfo";
import { AppContext } from "../../context/AppProvider";

export default function ChatRoom() {
  const { isShowChatRoomInfo } = React.useContext(AppContext);
  console.log("chat room===", isShowChatRoomInfo);

  return !isShowChatRoomInfo ? (
    <Row>
      <Col
        span={6}
        // flex="0.2 230px"
      >
        <Sidebar />
      </Col>
      <Col
        span={18}
        // flex="0.8"
      >
        <ChatWindow />
      </Col>
    </Row>
  ) : (
    <Row>
      <Col span={6}>
        <Sidebar />
      </Col>
      <Col span={13}>
        <ChatWindow />
      </Col>
      <Col span={5}>
        <ChatRoomInfo />
      </Col>
    </Row>
  );
}
