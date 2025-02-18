import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";

interface ProductCreateProps {
  onClose: () => void; // Callback to close the drawer
}

export const ProductCreate: React.FC<ProductCreateProps> = ({ onClose }) => {
  const { formProps, saveButtonProps } = useForm({
    resource: "products",
    onMutationSuccess: () => {
      onClose(); // Close the drawer after successful creation
    },
  });

  return (
    <Create saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
            <Form.Item
              label={"Product"}
              name={["name"]}
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Enter your name"/>
            </Form.Item>
            <Form.Item
              label={"Code"}
              name="phone"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input placeholder="Enter the Code"/>
            </Form.Item>
            <Form.Item label={"Country"} name="country">
              <Select placeholder="Select a Country">
                <Select.Option value="China" label="China">
                  China
                </Select.Option>
                <Select.Option value="Thailand" label="Thailand">
                  Thailand
                </Select.Option>
                <Select.Option value="Vietnam" label="Vietnam">
                  Vietnam
                </Select.Option>
                <Select.Option value="Others" label="Others">
                  Others
                </Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label={"Category"} name="category">
              <Select placeholder="Select Categories">
                <Select.Option value="Electronics" label="Electronics">
                  Electronics
                </Select.Option>
                <Select.Option value="Accessories" label="Accessories">
                  Accessories
                </Select.Option>
                <Select.Option value="Liquid" label="Liquid">
                  Liquid
                </Select.Option>
                <Select.Option value="Breakable" label="Breakable">
                  Breakable
                </Select.Option>
                <Select.Option value="Keep dry" label="Keep dry">
                  Keep dry
                </Select.Option>
                <Select.Option value="Others" label="Others">
                  Others
                </Select.Option>
              </Select>
            </Form.Item>
      </Form>
    </Create>
  );
};
