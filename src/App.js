import { Form, Input, Button, InputNumber, Typography } from "antd";
import {useState} from 'react'
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 10 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 10 },
};

const Demo = () => {
  const [result, setResult] = useState('')
  const onFinish = async (values) => {
    console.log("Success:", values);
    // const request = JSON.parse(values.paymentData);
    const res = await fetch("/api/payments", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.text()
    setResult(data)

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
    initialValues={{total: 14.5, tax: 6.5, tip: 1, fees: 0, reciept: '{"Russell": [3,3,1]}'}}
      {...layout}
      name='basic'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >

      <Form.Item
        label='Total'
        name='total'
        rules={[{ required: true, message: "Cant be empty" }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label='Tax'
        name='tax'
        rules={[{ required: true, message: "Cant be empty" }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label='Tip'
        name='tip'
        rules={[{ required: true, message: "Cant be empty" }]}
      >
        <InputNumber />
      </Form.Item>

      <Form.Item
        label='Misc fees'
        name='fees'
        rules={[{ required: true, message: "Cant be empty" }]}
      >
  
        <InputNumber />
      </Form.Item>




      <Form.Item
        label='Reciept'
        name='reciept'
        rules={[{ required: true, message: "Cant be empty" }]}
      >
        <Input.TextArea />
      </Form.Item>
  
      <Form.Item {...tailLayout}>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
      <Typography.Text copyable>{result}</Typography.Text>
    </Form>
  );
};

export default Demo;
