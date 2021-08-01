import * as React from "react"
import { Button, Tag, Form, Input } from "antd"

export default () => {
  return (
    <div>
      <Button type={"primary"} color={"red"}>
        test
      </Button>

      <Tag color="cyan">111</Tag>

      <Form>
        <Form.Item>
          <Input placeholder="111"/>
        </Form.Item>
      </Form>
    </div>
  )
}
