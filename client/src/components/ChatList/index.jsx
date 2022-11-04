import React from "react";
import { Tabs, Avatar, List } from "antd";
import "./style.css";
import ChatListItem from "../ChatListItem";

export default function ChatList() {
  const data = [
    {
      title: "Ant Design Title 1",
    },
    {
      title: "Ant Design Title 2",
    },
    {
      title: "Ant Design Title 3",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
    {
      title: "Ant Design Title 4",
    },
  ];
  const data2 = [
    {
      title: "Test 2",
    },
    {
      title: "Test 2",
    },
    {
      title: "Test 2",
    },
    {
      title: "Test 2",
    },
    {
      title: "Test 2",
    },
    {
      title: "Test 2",
    },
    {
      title: "Test 2",
    },
    {
      title: "Test 2",
    },
    {
      title: "Test 2",
    },
  ];

  const items = [
    { label: "Tất cả", key: "1", children: <ChatListItem /> }, // remember to pass the key prop
    { label: "Chưa đọc", key: "2", children: <ChatListItem /> },
  ];

  return (
    <div className="chatlist">
      <Tabs defaultActiveKey="1" className="tabs" items={items} />

      {/* <Tabs defaultActiveKey="1" className="tabs">
        <Tabs.TabPane tab="Tất cả" key="1">
          <List
            className="list1"
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item className="list-item1">
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Chưa đọc" key="2">
          <List
            className="list2"
            itemLayout="horizontal"
            dataSource={data2}
            renderItem={(item) => (
              <List.Item className="list-item2">
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Tabs.TabPane>
      </Tabs> */}
    </div>
  );
}
