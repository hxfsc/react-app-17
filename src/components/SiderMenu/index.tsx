import React, { useState, useEffect } from "react"
import { RocketOutlined, AreaChartOutlined, BlockOutlined, DashboardOutlined, UngroupOutlined, TableOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

import { RouteMenuProps } from "@/routers/interface"

import { routers, flatToMenu, routerMatchMenu } from "@/routers/index"
import { urlPath, urlPathToList } from "@/utils/urlPathParams"

import { Menu } from "antd"

import { MenuProps } from "rc-menu"

// submenu keys of first level
const rootSubmenuKeys = routers.map((item) => item.path)

const defaultOpenKeys = []
const defaultSelectedKeys = []

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

  const openSelectKey = () => {
    const url = urlPath()
    const urlList = urlPathToList(url)
    const flatMenu = flatToMenu(routers)
    const selectedKeys = routerMatchMenu(flatMenu, urlList)
    return { openKeys: urlList, selectedKeys }
  }

  const [selectedKeys, setSelectedKeys] = useState<string[]>(defaultSelectedKeys)

  const onSelectedKeysChange = ({ keyPath }) => {
    setOpenKeys(keyPath)
    setSelectedKeys(keyPath)
  }

  useEffect(() => {
    const keys = openSelectKey()
    setSelectedKeys(keys.selectedKeys.reverse())
    setOpenKeys(keys.openKeys.reverse())
  }, [props.collapsed])

  const renderIcon = (item: IconProps): React.ReactElement => {
    if (!item.icon) {
      return null
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

  useEffect(() => {
    const keys = openSelectKey()
    setOpenKeys(keys.openKeys)
    setSelectedKeys(keys.selectedKeys)
  }, [])

  return (
    <Menu
      mode="inline"
      theme="dark"
      defaultOpenKeys={defaultOpenKeys}
      openKeys={openKeys}
      defaultSelectedKeys={defaultSelectedKeys}
      selectedKeys={selectedKeys}
      onSelect={({ keyPath }) => onSelectedKeysChange({ keyPath })}
      onOpenChange={onOpenChange}
    >
      {renderMenu(routers)}
    </Menu>
  )
}
