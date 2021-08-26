import React, { useState } from "react"

import { Layout } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"

const { Header, Sider, Content } = Layout

import Menu from "@/components/Menu"

import styles from "./index.scss"

export const Dashboard = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onMenuCollapsed = (collapsed: boolean): void => {
    setCollapsed(collapsed)
  }

  return (
    <Layout className={styles.dashboard}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo} />
        <Menu />
      </Sider>
      <Layout className={styles["site-layout"]}>
        <Header className={styles.header}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: styles.trigger,
            onClick: () => onMenuCollapsed(!collapsed)
          })}
        </Header>
        <Content className={styles.main}>Content</Content>
      </Layout>
    </Layout>
  )
}
