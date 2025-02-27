import { Create, useForm, useSelect } from "@refinedev/antd";
import { DatePicker, Form, Input, Row, Col, Select, Button } from "antd";

export const IssueCreate = () => {
  const { formProps, saveButtonProps } = useForm();

  const { selectProps: productSelectProps } = useSelect({
    resource: "customers",
    optionLabel: "name",
    optionValue: "id",
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Date"
              name="date"
              rules={[{ required: true, message: "Please select the date!" }]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Status"
              name="status"
              rules={[{ required: true, message: "Please select the status!" }]}
            >
              <Select placeholder="Select a status">
                <Select.Option value="Pending...">Pending...</Select.Option>
                <Select.Option value="Progressing">Progressing</Select.Option>
                <Select.Option value="Completed">Completed</Select.Option>
                <Select.Option value="Cancel">Cancel</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} md={12}>
         <Form.Item
              label="Customer"
              name={["customer", "id"]}
              rules={[{ required: true, message: "Please select a Customer!" }]}
            >
              <Select {...productSelectProps} placeholder="Select a Customer" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Issue Type"
              name="issueType"
              rules={[{ required: true, message: "Please input the issue type!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Create>
  );
};