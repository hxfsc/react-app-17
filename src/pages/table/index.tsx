import React, { useState } from "react"

import { Table, Tooltip, Form, Input, FormItemProps, Row, Col } from "antd"

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
    width: 150
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    width: 80
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address 1",
    ellipsis: {
      showTitle: false
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    )
  },
  {
    title: "Long Column Long Column Long Column",
    dataIndex: "address",
    key: "address 2",
    ellipsis: {
      showTitle: false
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    )
  },
  {
    title: "Long Column Long Column",
    dataIndex: "address",
    key: "address 3",
    ellipsis: {
      showTitle: false
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    )
  },
  {
    title: "Long Column",
    dataIndex: "address",
    key: "address 4",
    ellipsis: {
      showTitle: false
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    )
  }
]

const data = Array.from({ length: 100 }).map((item, index: number) => ({
  key: index,
  name: "John Brown",
  age: index % 32,
  address: `New York No. ${index} Lake Park, New York No. ${index} Lake Park`
}))

const formItemLayout: FormItemProps = {
  labelAlign: "right",
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

export default () => {
  return (
    <div>
      <div>
        <Form layout={"horizontal"}>
          <Row>
            <Col span={"6"}>
              <Form.Item label={"表单一"} {...formItemLayout}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={"6"}>
              <Form.Item label={"表单一二三"} {...formItemLayout}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={"6"}>
              <Form.Item label={"表单一"} {...formItemLayout}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={"6"}>
              <Form.Item label={"表单一"} {...formItemLayout}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={"6"}>
              <Form.Item label={"表单一在一在"} {...formItemLayout}>
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <Table columns={columns} dataSource={data} size="small" bordered />
      </div>
    </div>
  )
}
