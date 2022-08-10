import { Button, Form, Input, Switch, Col, Row } from "antd";
import React from "react";
import "../App.css";

class MyForm extends React.Component {
  formRef = React.createRef();

  onFinish = (values) => {
    console.log(values);
  };

  render() {
    return (
      <Form
        layout="vertical"
        ref={this.formRef}
        name="control-ref"
        onFinish={this.onFinish}
      >
        <h1>General Settings</h1>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name="Name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="State" label="State" valuePropName="checked">
              <Switch
                checkedChildren="is enable"
                unCheckedChildren="is disable"
                defaultChecked
              />
            </Form.Item>
          </Col>
        </Row>

        <Row>
          <Col span={24}>
            <Form.Item
              name="Description"
              label="Description"
              rules={[
                {
                  required: false,
                },
              ]}
            >
              <Input.TextArea showCount maxLength={1000} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name="Priority"
              label="Priority"
              tooltip="this is help text"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="1000" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="Author" label="Author">
              <div className="mytexts">System</div>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="Created" label="Created">
              <div className="mytexts">Saturday, Octobor 15,2019, 18:00:00</div>
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="Last modified" label="Last modified">
              <div className="mytexts">Saturday, Octobor 15,2019, 18:00:00</div>
            </Form.Item>
          </Col>
        </Row>

        <Row justify="center">
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default MyForm;
