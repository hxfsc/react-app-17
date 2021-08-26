import React, { useState } from "react"
import { Route } from "react-router-dom"

import { Layout } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"

const { Header, Sider, Content } = Layout

import { SiderMenu } from "@/components/SiderMenu"

import Table from "@/pages/table"
import Permission from "@/pages/permission"
import Role from "@/pages/role"

import styles from "./index.scss"

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const onMenuCollapsed = (collapsed: boolean): void => {
    setCollapsed(collapsed)
  }

  return (
    <Layout className={styles.dashboard}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo} />
        <SiderMenu collapsed={collapsed} />
      </Sider>
      <Layout className={styles["site-layout"]}>
        <Header className={styles.header}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: styles.trigger,
            onClick: () => onMenuCollapsed(!collapsed)
          })}
        </Header>
        <Content className={styles.main}>
          <Route path="/" exact component={Table} />
          <Route path="/role" exact component={Role} />
          <Route path="/permission" exact component={Permission} />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Dashboard
