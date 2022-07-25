import { Button, Form, Input, Switch } from 'antd';
import React from 'react';
import "../App.css";

const layout = {
  labelCol: {
    span: 32,
  },
  wrapperCol: {
    span: 64,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class MyForm extends React.Component {
  formRef = React.createRef();

  onFinish = (values) => {
    console.log(values);
  };



  render() {
    return (
      <Form layout="vertical" {...layout} ref={this.formRef} name="control-ref" onFinish={this.onFinish}>
        <h1>General Settings</h1>
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

        <Form.Item label="State" >
            <Switch checkedChildren="is enable" unCheckedChildren="is disable" defaultChecked/>
        </Form.Item>


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


        <Form.Item
          name="Priority"
          label="Priority"
          tooltip="this is help text"
          rules={[
            {
              required: true
            },
          ]}
        >
          <Input placeholder="1000"/>
        </Form.Item>



        <Form.Item
          name="Author"
          label="Author"
        >
          <div className='mytexts'>System</div>
        </Form.Item>


        <Form.Item
          name="Created"
          label="Created"
        >
          <div className='mytexts'>Saturday, Octobor 15,2019, 18:00:00</div>
        </Form.Item>


        <Form.Item
          name="Last modified"
          label="Last modified"
        >
          <div className='mytexts'>Saturday, Octobor 15,2019, 18:00:00</div>
        </Form.Item>


          
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>

        </Form.Item>
      </Form>
    );
  }
}

export default MyForm;