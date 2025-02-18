
import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Col, Form, Input, InputNumber, Row, Select } from "antd";

export const OrederEdit = () => {
  const { formProps, saveButtonProps, query, formLoading } = useForm();

  const customerData = query?.data?.data;

  const { selectProps: productSelectProps } = useSelect({
      resource: "customers",
      optionLabel: "name",
      optionValue: "id",
    });
  

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
       <Form {...formProps} layout="vertical">
        {/* Row 1: Order Date and Country */}
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Order Date"
              name="dateOrder"
              rules={[{ required: true, message: "Please select an Order Date" }]}
            >
              {/* <DatePicker
                format="YYYY-MM-DD"
                placeholder="Select date"
                style={{ width: "100%" }}
              /> */}
            <Input/>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Country"
              name="country"
              rules={[{ required: true, message: "Please select a Country" }]}
            >
              <Select placeholder="Please select a Country">
                <Select.Option value="China" label="China">
                  China
                </Select.Option>
                <Select.Option value="Thailand" label="Thailand">
                  Thailand
                </Select.Option>
                <Select.Option value="Vietnam" label="Vietnam">
                  Vietnam
                </Select.Option>
                <Select.Option value="Other..." label="Other...">
                  Other...
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Row 2: Code and Total Amount */}
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Order Code"
              name="code"
              rules={[{ required: true, message: "Please input Code" }]}
            >
              <Input placeholder="Please input Code" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Total Amount"
              name="totalAmount"
              rules={[{ required: true, message: "Please input Total Amount" }]}
            >
              <InputNumber
                suffix="$"
                placeholder="Please input Total Amount"
                style={{ width: "100%" }}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
          <Form.Item
              label="Customer"
              name={["customer", "id"]}
              rules={[{ required: true, message: "Please select a Customer" }]}
            >
              <Select {...productSelectProps} placeholder="Select a Customer" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Edit>
  );
};
