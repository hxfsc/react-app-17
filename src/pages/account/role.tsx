import React from "react"
import { Tree } from "antd"

const treeData = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        disabled: true,
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
            disableCheckbox: true
          },
          {
            title: "leaf",
            key: "0-0-0-1"
          }
        ]
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [{ title: <span style={{ color: "#1890ff" }}>sss</span>, key: "0-0-1-0" }]
      }
    ]
  },
  {
    title: "parent 2",
    key: "1-0",
    children: [
      {
        title: "parent 2-0",
        key: "1-0-0",
        disabled: true,
        children: [
          {
            title: "leaf",
            key: "1-0-0-0",
            disableCheckbox: true
          },
          {
            title: "leaf",
            key: "1-0-0-1"
          }
        ]
      }
    ]
  }
]

export default () => {
  const onSelect = (selectedKeys: React.Key[], info: unknown) => {
    console.log("selected", selectedKeys, info)
  }

  const onCheck = (checkedKeys: React.Key[], info: unknown) => {
    console.log("onCheck", checkedKeys, info)
  }

  return (
    <Tree
      checkable
      defaultExpandedKeys={["0-0-0", "0-0-1"]}
      defaultSelectedKeys={["0-0-0", "0-0-1"]}
      defaultCheckedKeys={["0-0-0", "0-0-1"]}
      onSelect={onSelect}
      onCheck={onCheck}
      treeData={treeData}
    />
  )
}
