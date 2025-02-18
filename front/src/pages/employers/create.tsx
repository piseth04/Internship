import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

export const EmployerCreate = () => {
  const { formProps, saveButtonProps, query, formLoading } = useForm();

  return (
    <Create saveButtonProps={saveButtonProps} >
        <Form {...formProps} layout="vertical">
              <Form.Item
                label="Full Name"
                name="name"
                rules={[{ required: true, message: "Please enter your full name" }]}
              >
                <Input placeholder="Enter full name" />
              </Form.Item>

              <Form.Item label="Gender" name="gender">
                <Select placeholder="Select gender">
                  <Select.Option value="Male">Male</Select.Option>
                  <Select.Option value="Female">Female</Select.Option>
                  <Select.Option value="Other">Other</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="number"
                rules={[{ required: true, message: "Please enter a phone number" }]}
              >
                <Input placeholder="Enter phone number" />
              </Form.Item>
              <Form.Item label="Position" name="position">
                <Select placeholder="Select position">
                  <Select.Option value="IT">IT</Select.Option>
                  <Select.Option value="Delivery">Delivery</Select.Option>
                  <Select.Option value="Cashier">Cashier</Select.Option>
                  <Select.Option value="Customer_service">Customer Service</Select.Option>
                </Select>
              </Form.Item>
        </Form>
    </Create>
  );
};
