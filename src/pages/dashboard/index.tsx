import React from "react"
import { Descriptions, Card, Row, Col, Statistic, Space, Result } from "antd"
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons"

import useSWR from "swr"
import { request } from "@/utils/request"

interface dataProps {
  name: string
  value: number
}

interface liveDataProps {
  cpu: number
  meun: number
  address: string
  remark: string
  version: string
}

async function getData(url: string): Promise<any> {
  return await request({ url, method: "GET" })
}

async function getLiveInfo(url: string): Promise<any> {
  return await request({ url, method: "GET" })
}

const Dashboard = () => {
  const { data = [], error } = useSWR<dataProps[]>("/statistic", getData)

  const { data: liveData, error: liveError } = useSWR<liveDataProps>("/live", getLiveInfo)

  if (error || liveError) {
    return <Result title="请求错误" />
  }

  return (
    <Space direction={"vertical"} size={"large"}>
      <Row gutter={24}>
        {data.map((item: dataProps, index) => (
          <Col span={6} key={index}>
            <Card>
              <Statistic
                title={item?.name}
                value={item?.value}
                precision={2}
                valueStyle={{ color: index % 2 === 0 ? "#3f8600" : "#cf1322" }}
                prefix={index % 2 === 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
                suffix="%"
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Card title={"实况"}>
        <Descriptions title={"预览"}>
          <Descriptions.Item label={"CPU"}>{liveData?.cpu}</Descriptions.Item>
          <Descriptions.Item label={"L"}>{liveData?.meun}</Descriptions.Item>
          <Descriptions.Item label={"Live"}>{liveData?.address}</Descriptions.Item>
          <Descriptions.Item label={"标记"}>{liveData?.remark}</Descriptions.Item>
          <Descriptions.Item label="版本">{liveData?.version}</Descriptions.Item>
        </Descriptions>
      </Card>
    </Space>
  )
}

export default Dashboard
