import React, { useState, useEffect } from "react"
import useSWR from "swr"
import { Table, Tooltip, Form, Input, FormItemProps, Row, Col, Button, Space } from "antd"
import { Link } from "react-router-dom"

const columns = [
  {
    title: "姓名",
    dataIndex: "name",
    key: "name",
    render: (text) => text,
    width: 150
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    width: 80
  },
  {
    title: "地址",
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
    title: "操作",
    dataIndex: "operation",
    key: "address 1",
    ellipsis: {
      showTitle: false
    },
    render: () => (
      <>
        <Space>
          <Link to="">编辑</Link>
          <Link to="">删除</Link>
        </Space>
      </>
    )
  }
]

const formItemLayout: FormItemProps = {
  labelAlign: "right",
  labelCol: { span: 8 },
  wrapperCol: { span: 16 }
}

const getData = () => {
  const { data, error } = useSWR("http://localhost:3002/users")
  return {
    users: data,
    loading: !error && !data
  }
}

export default () => {
  const { users, loading } = getData()

  return (
    <div>
      <div>
        <Form layout={"horizontal"}>
          <Row gutter={12}>
            <Col span={6}>
              <Form.Item label={"表单一"} {...formItemLayout}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item label={"表单一二三"} {...formItemLayout}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item label={"表单一"} {...formItemLayout}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item label={"表单一"} {...formItemLayout}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Form.Item label={"表单一在一在"} {...formItemLayout}>
                <Input />
              </Form.Item>
            </Col>

            <Col span={6}>
              <Button type={"primary"}>查询</Button>
            </Col>
          </Row>
        </Form>
      </div>
      <div>
        <Table loading={loading} columns={columns} dataSource={users} size="small" bordered />
      </div>
    </div>
  )
}
