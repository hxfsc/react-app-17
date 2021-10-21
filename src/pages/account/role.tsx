import React, { useState } from "react"
import { Tree } from "antd"
import { CarryOutOutlined, FormOutlined } from "@ant-design/icons"

const treeData = [
    {
        title: "parent 1",
        key: "0-0",
        children: [
            {
                title: "parent 1-0",
                key: "0-0-0",
                icon: <CarryOutOutlined />,
                children: [
                    {
                        title: "leaf",
                        key: "0-0-0-0"
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
                children: [{ title: "test......", key: "0-0-1-0" }]
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
                children: [
                    {
                        title: "leaf",
                        key: "1-0-0-0"
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
    const [showLine, setShowLine] = useState<boolean | { showLeafIcon: boolean }>({ showLeafIcon: false })
    const [showIcon, setShowIcon] = useState<boolean>(false)

    const onSelect = (selectedKeys: React.Key[], info: any) => {
        console.log("selected", selectedKeys, info)
    }

    return <Tree checkable defaultExpandedKeys={["0-0-0", "0-0-1"]} onSelect={onSelect} treeData={treeData} showLine={showLine} showIcon={showIcon} />
}
