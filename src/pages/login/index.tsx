import React from "react"

import { Form, Input, Button, Checkbox } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"

import styles from "./index.scss"

const size: "large" = "large"

const Login = () => {
  const onFinish = () => {}
  return (
    <div className={styles.main}>
      <Form layout={"horizontal"}  className={styles["login-form"]} initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item name="username" rules={[{ required: true, message: "请输入用户名!" }]}>
          <Input size={size} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "请输入密码!" }]}>
          <Input size={size} prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="密码" />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住我</Checkbox>
          </Form.Item>
          <a className={styles["login-form-forgot"]} href="#/">
            忘记密码
          </a>
        </Form.Item>

        <Form.Item>
          <Button size={size} type="primary" htmlType="submit" className={styles["login-form-button"]}>
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Login
