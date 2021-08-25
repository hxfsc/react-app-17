import React, { useState } from "react"

import { Layout, Menu } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons"

const { Header, Sider, Content } = Layout

import styles from "./index.scss"

export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const dashboardTrigger = (collapsed: boolean): void => {
    setCollapsed(collapsed)
  }

  return (
    <Layout className={styles.dashboard}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className={styles["site-layout-background"]} style={{ padding: 0 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: "trigger",
            onClick: () => dashboardTrigger(!collapsed)
          })}
        </Header>
        <Content
          className={styles["site-layout-background"]}
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}
