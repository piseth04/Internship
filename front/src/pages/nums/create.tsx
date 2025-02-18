import { useModalForm, useSelect } from "@refinedev/antd";
import { Form, Input, Select, Button } from "antd";

interface NumCreateProps {
  visible: boolean;
  onClose: () => void;
}

export const NumCreate = ({ visible, onClose }: NumCreateProps) => {
  const {
    formProps, // Form props for Ant Design Form
    formLoading, // Loading state of the form
    onFinish, // Function to handle form submission
  } = useModalForm({
    action: "create", // Specify the action as "create"
    resource: "nums", // Specify the resource
    redirect: false, // Disable redirection after creation
  });

  // Use the `useSelect` hook to fetch products for the dropdown
  const { selectProps: productSelectProps } = useSelect({
    resource: "products", // The related resource
    optionLabel: "name", // The field to display in the dropdown
    optionValue: "id", // The field to use as the value
  });

  return (
    <div>
      <Form {...formProps} layout="vertical" onFinish={onFinish}>
        {/* Name Field */}
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        {/* Product Field (Relation) */}
        <Form.Item
          label="Product Category"
          name={["product", "id"]} // Use nested field name for relation
          rules={[{ required: true, message: "Please select a Code" }]}
        >
          <Select {...productSelectProps} placeholder="Select a Code"/>
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please enter a name" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>
        <Form.Item
              label="Note"
              name="note"
            >
              <Input.TextArea placeholder="Enter note" rows={4} />
            </Form.Item>

        {/* Submit Button */}
        <Button
          type="primary"
          htmlType="submit" // Make the button submit the form
          loading={formLoading} // Show loading state while submitting
          style={{ marginTop: 16 }}
        >
          Save
        </Button>
      </Form>
    </div>
  );
};