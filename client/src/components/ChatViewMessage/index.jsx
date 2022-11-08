import { Button, Dropdown, Menu } from "antd";
import { RiShareForwardFill } from "react-icons/ri";
import { FaEllipsisH, FaQuoteRight } from "react-icons/fa";
import {
  CopyOutlined,
  DeleteOutlined,
  OrderedListOutlined,
  PushpinOutlined,
  RollbackOutlined,
  StarOutlined,
} from "@ant-design/icons";
import React from "react";
import Message from "../Message";
import "./style.css";
import { useState } from "react";
import { usePopper } from "react-popper";

export default function ChatViewMessage() {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement);

  const messages = [
    {
      id: "1111",
      text: "Hello",
      displayName: "ABC",
      createdAt: Date.now(),
      photoURL: "",
      uid: "124",
    },
    {
      text: "Hello",
      displayName: "ABC",
      createdAt: "2133123454523",
      photoURL: "",
      uid: "123",
    },
    {
      text: "Hello",
      displayName: "ABC",
      createdAt: Date.now(),
      photoURL: "",
      uid: "125",
    },
    {
      text: "Hello",
      displayName: "ABC",
      createdAt: Date.now(),
      photoURL: "",
      uid: "124",
    },
    {
      text: "Hello",
      displayName: "ABC",
      createdAt: Date.now(),
      photoURL: "",
      uid: "123",
    },
    {
      text: "Hello",
      displayName: "ABC",
      createdAt: Date.now(),
      photoURL: "",
      uid: "125",
    },
    {
      text: "Hello",
      displayName: "ABC",
      createdAt: Date.now(),
      photoURL: "",
      uid: "124",
    },
    {
      text: "Hello",
      displayName: "ABC",
      createdAt: Date.now(),
      photoURL: "",
      uid: "123",
    },
    {
      text: "Hello",
      displayName: "ABC",
      createdAt: Date.now(),
      photoURL: "",
      uid: "125",
    },
    {
      text: "Hello",
      displayName: "ABC",
      createdAt: "",
      photoURL: "",
      uid: "124",
    },
    {
      text: "Time",
      displayName: "ABC",
      createdAt: "Saturday, 29 October 2022 16:01:09",
      photoURL: "",
      uid: "123",
    },
    {
      text: "Hellooooooooooooo",
      displayName: "ABC",
      createdAt: "1667058871868",
      photoURL: "",
      uid: "125",
    },
  ];

  const uid = "123";

  const menuMore = (
    <Menu
      className="menu-more"
      items={[
        {
          key: "3-1",
          label: (
            <Button type="text" icon={<CopyOutlined />}>
              Coppy tin nhắn
            </Button>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "3-2",
          label: (
            <Button type="text" icon={<PushpinOutlined />}>
              Ghim tin nhắn
            </Button>
          ),
        },
        {
          key: "3-3",
          label: (
            <Button type="text" icon={<StarOutlined />}>
              Đánh dấu tin nhắn
            </Button>
          ),
        },
        {
          key: "3-4",
          label: (
            <Button type="text" icon={<OrderedListOutlined />}>
              Chọn nhiều tin nhắn
            </Button>
          ),
        },
        {
          type: "divider",
        },
        {
          key: "3-5",
          label: (
            <Button
              style={{ color: "red" }}
              type="text"
              icon={<RollbackOutlined />}
            >
              Thu hồi tin nhắn
            </Button>
          ),
        },
        {
          key: "3-6",
          label: (
            <Button
              style={{ color: "red" }}
              type="text"
              icon={<DeleteOutlined />}
            >
              Xóa chỉ ở phía bạn
            </Button>
          ),
        },
      ]}
    />
  );

  const menuMsg = (mesId) => (
    <Menu
      className={`${uid === mesId ? "menu-msg-m" : "menu-msg"}`}
      items={[
        {
          key: "1",
          label: (
            <Button
              type="text"
              title="Trả lời"
              icon={<FaQuoteRight className="menu-msg-icon" />}
            />
          ),
        },
        {
          key: "2",
          label: (
            <Button
              type="text"
              title="Chia sẻ"
              icon={<RiShareForwardFill className="menu-msg-icon" />}
            />
          ),
        },
        {
          key: "3",
          label: (
            <Dropdown
              overlay={menuMore}
              trigger={["click"]}
              ref={setPopperElement}
              style={styles.popper}
              {...attributes.popper}
            >
              <Button
                type="text"
                title="Thêm"
                ref={setReferenceElement}
                icon={<FaEllipsisH className="menu-msg-icon" />}
              />
            </Dropdown>
          ),
        },
      ]}
    />
  );

  const renderMess = messages.map((mes, index) => (
    <div key={index} className={`${uid === mes.uid ? "m-msg" : "msg"}`}>
      <Dropdown overlay={menuMsg(mes.uid)}>
        <div>
          <Message
            key={mes.id}
            text={mes.text}
            photoURL={mes.photoURL}
            displayName={mes.displayName}
            createdAt={mes.createdAt}
            mesUid={mes.uid}
          />
        </div>
      </Dropdown>
    </div>
  ));

  return <div className="chat-view-message">{renderMess}</div>;
}
