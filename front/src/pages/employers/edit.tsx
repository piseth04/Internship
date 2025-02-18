import { Edit, useForm, useSelect } from "@refinedev/antd";
import MDEditor from "@uiw/react-md-editor";
import { Col, Form, Input, Row, Select } from "antd";

export const EmpolyerEdit = () => {
  const { formProps, saveButtonProps, query, formLoading } = useForm();

  const employerData = query?.data?.data;

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Form {...formProps} layout="vertical">
      <Row gutter={16}>
      <Col span={12}>
        <Form.Item
          label={"Full Name"}
          name={["name"]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item label={"Gender"} name="gender">
          <Select>
            <Select.Option value="Male" label="Male">
              Male
            </Select.Option>
            <Select.Option value="Female" label="Female">
              Female
            </Select.Option>
            <Select.Option value="Other" label="other">
              Other
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label={"Position"} name="position">
          <Select>
            <Select.Option value="IT" label="IT">
            IT
            </Select.Option>
            <Select.Option value="Delivery" label="Delivery">
            Delivery
            </Select.Option>
            <Select.Option value="Cashier" label="Cashier">
            Cashier
            </Select.Option>
            <Select.Option value="Customer_service" label="Customer_service">
            Customer_service
            </Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={"Phone Number"}
          name="number"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        </Col>
        </Row>
      </Form>
    </Edit>
  );
};