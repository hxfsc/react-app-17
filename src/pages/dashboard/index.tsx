import React, { useState, lazy, Suspense } from "react"
import { Route } from "react-router-dom"

import { Layout, Skeleton } from "antd"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"

const { Header, Sider, Content } = Layout

import { SiderMenu } from "@/components/SiderMenu"

const Table = lazy(() => import("@/pages/table"))
const Permission = lazy(() => import("@/pages/permission"))
const Role = lazy(() => import("@/pages/role"))
const Account = lazy(() => import("@/pages/user/account"))

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
          <Suspense fallback={<Skeleton active />}>
            <Route path="/" exact component={Table} />
            <Route path="/user/role" exact component={Role} />
            <Route path="/user/permission" exact component={Permission} />
            <Route path="/user/account" exact component={Account} />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Dashboard
