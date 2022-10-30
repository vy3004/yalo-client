import { Button, Form, Input } from "antd";
import React from "react";
import {
  LinkOutlined,
  PictureOutlined,
  SmileOutlined,
} from "@ant-design/icons";
// import Picker from "emoji-picker-react";
import "./style.css";

export default function ChatViewInput() {
  const room = {
    displayName: "Nhóm 17_CNM",
  };

  const [form] = Form.useForm();

  return (
    <div className="chat-view-input">
      <Form form={form}>
        <Form.Item name="message">
          <Input
            size="large"
            autoSize
            placeholder={"Nhập tin nhắn tới " + room.displayName}
            bordered={false}
            autoComplete="off"
          />
        </Form.Item>
        <div className="chat-view-input-btn">
          <Button
            className="btn-input"
            icon={<LinkOutlined />}
            type="text"
            size="large"
          ></Button>
          <Button
            className="btn-input"
            icon={<PictureOutlined />}
            type="text"
            size="large"
          ></Button>
          <Button
            className="emoji btn-input"
            icon={<SmileOutlined />}
            type="text"
            size="large"
          ></Button>
          <Button className="btn-submit" type="primary">
            Gửi
          </Button>
        </div>
      </Form>
    </div>
  );
}
