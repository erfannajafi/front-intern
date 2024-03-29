import { Button, Form, Input, Switch, Col, Row, message } from "antd";
import React from "react";
import "App.css";
import { getLists, updateLists } from "api/API";

const key = "updatable";

const loadMessage = () => {
  message.loading({
    content: "Loading...",
    key,
  });
};

const openMessage = () => {
  message.success({
    content: "edited successfully",
    key,
    duration: 4,
  });
};

class MyForm extends React.Component {
  state = {
    lists: [],

    currentDateTime: new Date().toLocaleString(),
  };

  getItems() {
    getLists(1000).then((items) => {
      console.log(items);
      this.setState({ lists: items.result });
      console.log(this.state.lists);
    });
  }

  componentDidMount() {
    this.getItems();
  }

  // getLists().then( items => {console.log(items); this.setState( {lists: items} )} );
  //   console.log(this.state.lists);

  formRef = React.createRef();

  onFinish = (values) => {
    if (values.State === undefined) {
      values.State = true;
    }
    if (values.Description === undefined) {
      values.Description = "";
    }
    values.LastModified = this.state.currentDateTime;
    values.Created = this.state.lists[0].created;
    console.log(values);

    const items = {
      id: this.state.lists[0]._id,
      params: {
        name: values.Name,
        desc: values.Description,
        priority: values.Priority,
        author: values.Author,
        created: values.Created,
        lastModified: values.LastModified,
        state: values.State,
      },
    };

    loadMessage();

    updateLists(items, 1000).then((items) => {
      console.log(items);
      openMessage();
    });
  };

  render() {
    return this.state.lists.map((list) => (
      <Form
        key={list._id}
        layout="vertical"
        ref={this.formRef}
        name="control-ref"
        onFinish={this.onFinish}
        initialValues={{
          Name: list.name,
          State: list.state,
          Description: list.desc,
          Priority: list.priority,
          Author: list.author,
          Created: list.created,
          LastModified: list.lastModified,
        }}
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
                  message: "Please input your name!",
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
                  message: "Please input priority!",
                },
              ]}
            >
              <Input placeholder={list.priority} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="Author" label="Author">
              <Input type="text" readOnly="readOnly" className="myTextInput" />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={12}>
            <Form.Item name="Created" label="Created">
              <Input type="text" readOnly="readOnly" className="myTextInput" />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item name="LastModified" label="Last modified">
              <Input type="text" readOnly="readOnly" className="myTextInput" />
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
    ));
  }
}

export default MyForm;
