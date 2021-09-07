import React, { useState, Suspense } from "react"
import { Layout, Menu, Dropdown, Badge, Avatar, Skeleton } from "antd"
import { Switch, Route } from "react-router-dom"

import { MenuUnfoldOutlined, MenuFoldOutlined, BellOutlined, UserOutlined, KeyOutlined, LogoutOutlined } from "@ant-design/icons"

const { Header, Sider, Content } = Layout

import styles from "./main.scss"

import { SiderMenu } from "@/components/SiderMenu"
import { routers } from "@/routers/index"
import { RouteMenuProps } from "@/routers/interface"

const routerList = []

const LayoutMain = (props: any) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)
  const onMenuCollapsed = (collapsed: boolean): void => {
    setCollapsed(collapsed)
  }

  const renderDropDownItem = () => {
    const logout = () => {
      const {
        history: { push }
      } = props
      push("/login")
    }

    return (
      <Menu>
        <Menu.Item key="1">
          <UserOutlined />
          个人中心
        </Menu.Item>
        <Menu.Item key="2">
          <KeyOutlined />
          修改密码
        </Menu.Item>
        <Menu.Item key="3" onClick={logout}>
          <LogoutOutlined />
          退出
        </Menu.Item>
      </Menu>
    )
  }

  const renderRouter = (router: RouteMenuProps[]) => {
    router.forEach((item: RouteMenuProps) => {
      if (item.children) {
        renderRouter(item.children)
      }
      if (item.component) {
        routerList.push(<Route path={item.path} component={item.component} key={item.path} />)
      }
    })
    return routerList
  }

  return (
    <Layout className={styles.dashboard}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className={styles.logo} />
        <SiderMenu collapsed={collapsed} />
      </Sider>
      <Layout className={styles["site-layout"]}>
        <Header className={styles.header}>
          <div>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: styles.trigger,
              onClick: () => onMenuCollapsed(!collapsed)
            })}
          </div>

          <div className={styles["user"]}>
            <div className={styles["notification"]}>
              <Badge count={5}>
                <BellOutlined style={{ fontSize: 20 }} />
              </Badge>
            </div>
            <Dropdown overlay={renderDropDownItem} placement={"bottomLeft"}>
              <Avatar icon={<UserOutlined />} size={"large"} className={styles["avatar"]}></Avatar>
            </Dropdown>
          </div>
        </Header>

        <Content className={styles.main}>
          <Suspense fallback={<Skeleton active />}>
            <Switch>{renderRouter(routers)}</Switch>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutMain
