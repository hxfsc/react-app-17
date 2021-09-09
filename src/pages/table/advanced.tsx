import React from "react"
import { Table, Tooltip } from "antd"

import useSWR from "swr"

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    render: (text) => text,
    fixed:'left',
    width: 150
  },
  {
    title: "电话",
    dataIndex: "phone",
    key: "phone",
    ellipsis: {
      showTitle: false
    },
    render: (text) => <Tooltip title={text}>{text}</Tooltip>
  },
  {
    title: "年龄",
    dataIndex: "age",
    render: (text) => text,
    width: 150
  },
  {
    title: "省份",
    dataIndex: "provined",
    key: "provined",
    ellipsis: {
      showTitle: false
    },
    render: (text) => <Tooltip title={text}>{text}</Tooltip>
  },
  {
    title: "城市",
    dataIndex: "city",
    key: "city",
    render: (text) => text
  },
  {
    title: "街道",
    dataIndex: "address",
    key: "address",
    ellipsis: {
      showTitle: false
    },
    render: (text) => <Tooltip title={text}>{text}</Tooltip>
  },
]

const getData = () => {
  const { data, error } = useSWR("http://localhost:3002/advanced")

  return {
    users: data,
    loading: !data && !error
  }
}

const TableAdvanced = () => {
  const { users = [], loading = true } = getData()
  return (
    <div>
      <Table bordered size={"small"} loading={loading} dataSource={users} columns={columns} scroll={{x:1500}} />
    </div>
  )
}

export default TableAdvanced
