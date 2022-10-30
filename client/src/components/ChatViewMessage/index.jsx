import { BackTop } from "antd";
import React from "react";
import Message from "../Message";
import "./style.css";

export default function ChatViewMessage() {
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
      text: "Hello",
      displayName: "ABC",
      createdAt: "1667058871868",
      photoURL: "",
      uid: "125",
    },
  ];

  const uid = "123";

  const date = new Date();

  console.log(date.getDate());

  const renderMess = messages.map((mes, index) => (
    <div key={index} className={`${uid === mes.uid ? "m-msg" : "msg"}`}>
      <Message
        key={mes.id}
        text={mes.text}
        photoURL={mes.photoURL}
        displayName={mes.displayName}
        createdAt={mes.createdAt}
        mesUid={mes.uid}
      />
    </div>
  ));

  return (
    <div className="chat-view-message">
      {renderMess}
      <BackTop>UP</BackTop>
    </div>
  );
}
