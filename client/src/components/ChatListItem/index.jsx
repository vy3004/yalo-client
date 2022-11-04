import { Avatar, Typography } from "antd";
import React from "react";

export default function ChatListItem() {
  const rooms = [
    {
      title: "Cao Thắng",
      isGroupChat: false,
      lastMessage: {
        author: "Vy",
        content: "last message",
        time: "4 giờ",
      },
      photoURL:
        "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
    },
    {
      title: "Nhóm17_CNM",
      isGroupChat: true,
      lastMessage: {
        author: "Trong Phan",
        content: "gg",
        time: "3 giờ",
      },
      photoURL: "",
    },
    {
      title: "CMN thầy Phước",
      isGroupChat: true,
      lastMessage: {
        author: "Ton Long Phuoc",
        content: "10 điểm",
        time: "vài giây",
      },
      photoURL: "",
    },
    {
      title: "Cao Thắng",
      isGroupChat: false,
      lastMessage: {
        author: "Vy",
        content: "last message",
        time: "4 giờ",
      },
      photoURL:
        "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
    },
    {
      title: "Cao Thắng",
      isGroupChat: false,
      lastMessage: {
        author: "Vy",
        content: "last message",
        time: "4 giờ",
      },
      photoURL:
        "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
    },
    {
      title: "Cao Thắng",
      isGroupChat: false,
      lastMessage: {
        author: "Vy",
        content: "last message",
        time: "4 giờ",
      },
      photoURL:
        "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
    },
    {
      title: "Cao Thắng",
      isGroupChat: false,
      lastMessage: {
        author: "Vy",
        content: "last message",
        time: "4 giờ",
      },
      photoURL:
        "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
    },
    {
      title: "Cao Thắng",
      isGroupChat: false,
      lastMessage: {
        author: "Vy",
        content: "last message",
        time: "4 giờ",
      },
      photoURL:
        "https://icdn.24h.com.vn/upload/1-2022/images/2022-01-06/271315454_504958790867873_8361631472902378352_n-1641435493-158-width1080height1349.jpg",
    },
  ];

  return (
    <div className="chat-list-item">
      {rooms.map((room) => (
        <Typography.Link
          key={room.id}
          //   onClick={() => setSelectedRoomId(room.id)}
        >
          <div className="chat-list-item-image">
            {room.isGroupChat ? (
              <Avatar size="large" src={room.photoURL}>
                {room.photoURL ? "" : room.title?.charAt(0)?.toUpperCase()}
              </Avatar>
            ) : (
              <Avatar.Group size="default" maxCount={1}>
                {/* {members.map((member) => (
                  <Avatar src={member.photoURL}>
                    {member.photoURL
                      ? ""
                      : member.displayName?.charAt(0)?.toUpperCase()}
                  </Avatar>
                ))} */}
              </Avatar.Group>
            )}
          </div>
          <span>{room.title}</span>
          <div className="chat-list-item">
            <Typography.Text className="chat-list-item-author">
              {room.lastMessage.author}
            </Typography.Text>
            <br />
            <Typography.Text className="chat-list-item-content">
              {room.lastMessage.content}
            </Typography.Text>
            <br />
            <Typography.Text className="chat-list-item-date">
              {room.lastMessage.time}
            </Typography.Text>
          </div>
        </Typography.Link>
      ))}
    </div>
  );
}
