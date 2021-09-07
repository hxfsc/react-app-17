import React, { useState, useEffect } from "react"
import { AppstoreOutlined, MailOutlined, SettingOutlined, RocketOutlined, AreaChartOutlined, BlockOutlined, DashboardOutlined, UngroupOutlined, TableOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

import { routers } from "@/routers/index"

import { RouteMenuProps } from "@/routers/interface"

import { Menu } from "antd"

const { SubMenu } = Menu
import { MenuProps } from "rc-menu"

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"]

const defaultOpenKeys = ["sub1"]
const defaultSelectedKeys = ["1"]

interface IconProps extends Pick<RouteMenuProps, "component"> {
  icon?: string
  component?: any
}

const icons: IconProps[] = [
  { icon: "AreaChartOutlined", component: <AreaChartOutlined /> },
  { icon: "BlockOutlined", component: <BlockOutlined /> },
  { icon: "DashboardOutlined", component: <DashboardOutlined /> },
  { icon: "UngroupOutlined", component: <UngroupOutlined /> },
  { icon: "TableOutlined", component: <TableOutlined /> }
]

export const SiderMenu = (props: { collapsed: boolean }) => {
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys)

  const onOpenChange = (keys: string[]) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)

    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }

  const [selectedKeys, setSelectedKeys] = useState<string[]>(defaultSelectedKeys)

  const onSelectedKeysChange = ({ selectedKeys }: MenuProps) => {
    setSelectedKeys(selectedKeys)
  }

  type prevMenuKeysProps = { openKeys: string[]; selectedKeys: string[] }
  const [prevMenuKeys, setPrevMenuKeys] = useState<prevMenuKeysProps>({ openKeys: defaultOpenKeys, selectedKeys: defaultSelectedKeys })

  useEffect(() => {
    if (props.collapsed) {
      setPrevMenuKeys({ openKeys, selectedKeys })
      return
    }

    setOpenKeys(prevMenuKeys.openKeys)
    setSelectedKeys(prevMenuKeys.selectedKeys)
  }, [props.collapsed])

  const renderIcon = (item: IconProps): React.ReactElement => {
    if (!item.icon) {
      return <RocketOutlined />
    }
    return icons.find((list: IconProps) => list.icon === item.icon)?.component || <RocketOutlined />
  }

  const renderMenu = (router: RouteMenuProps[]): React.ReactNode => {
    const menu = router.map((item: RouteMenuProps): React.ReactNode => {
      if (item.children && item.children.length > 0) {
        return (
          <Menu.SubMenu
            key={item.path}
            title={
              <span>
                {renderIcon(item)}
                <span>{item.title ?? "导航"}</span>{" "}
              </span>
            }
          >
            {renderMenu(item.children)}
          </Menu.SubMenu>
        )
      }
      return (
        <Menu.Item key={item.path}>
          <Link to={item.path}>
            {item.parent && renderIcon(item)}
            <span>{item.title ?? "导航"}</span>
          </Link>
        </Menu.Item>
      )
    })
    return menu
  }

  return (
    <Menu
      mode="inline"
      theme="dark"
      defaultOpenKeys={defaultOpenKeys}
      openKeys={openKeys}
      defaultSelectedKeys={defaultSelectedKeys}
      selectedKeys={selectedKeys}
      onSelect={(keys: MenuProps) => onSelectedKeysChange(keys)}
      onOpenChange={onOpenChange}
    >
      {renderMenu(routers)}
    </Menu>
  )
}
