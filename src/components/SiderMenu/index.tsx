import React, { useState, useEffect } from "react"
import { AppstoreOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons"
import { Menu } from "antd"

const { SubMenu } = Menu
import { MenuProps } from "rc-menu"

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub4"]

const defaultOpenKeys = ["sub1"]
const defaultSelectedKeys = ["1"]

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
      <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu>
      <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="sub4" icon={<SettingOutlined />} title={"管理中心"}>
        <Menu.Item key="9">用户管理</Menu.Item>
        <Menu.Item key="10">角色管理</Menu.Item>
        <Menu.Item key="11">权限管理</Menu.Item>
      </SubMenu>
    </Menu>
  )
}
