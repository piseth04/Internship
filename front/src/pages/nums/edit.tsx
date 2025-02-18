import { Edit, useForm, useSelect } from "@refinedev/antd";
import { useNavigation } from "@refinedev/core"; // ✅ Correct import
import { Form, Input, Select, Card, Row, Col, Button, Space } from "antd";

export const NumEdit = () => {
  const { formProps, saveButtonProps } = useForm({
    action: "edit",
    resource: "nums",
  });

  const { goBack } = useNavigation(); // ✅ Works correctly now

  const { selectProps: productSelectProps } = useSelect({
    resource: "products",
    optionLabel: "name",
    optionValue: "id",
  });

  const { selectProps: employerSelectProps } = useSelect({
    resource: "employers",
    optionLabel: "name",
    optionValue: "id",
    filters: [{ field: "position", operator: "eq", value: "IT" }], // ✅ Filter by IT position
  });

  return (
    <Card title="Edit Num" bordered={false} style={{ maxWidth: 600, margin: "auto" }}>
      <Form {...formProps} layout="vertical">
        <Row gutter={[16, 16]}>
          <Col span={24}>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter a name" }]}
            >
              <Input placeholder="Enter name" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Product Category"
              name={["product", "id"]}
              rules={[{ required: true, message: "Please select a product" }]}
            >
              <Select {...productSelectProps} placeholder="Select a product" />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item
              label="Employer"
              name={["employer", "id"]}
              rules={[{ required: true, message: "Please select a employer" }]}
            >
              <Select {...employerSelectProps} placeholder="Select a employer" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Note"
              name="note"
            >
              <Input.TextArea placeholder="Enter note" rows={4} />
            </Form.Item>
          </Col>
        </Row>

        <Space style={{ width: "100%", justifyContent: "flex-end", marginTop: 16 }}>
          <Button type="default" onClick={goBack}>Cancel</Button>
          <Button type="primary" {...saveButtonProps}>
            Save Changes
          </Button>
        </Space>
      </Form>
    </Card>
  );
};
