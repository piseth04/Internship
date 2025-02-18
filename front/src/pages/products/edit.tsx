import { Edit, useForm, useSelect } from "@refinedev/antd";
import { Card, Form, Input, Select } from "antd";

export const ProductEdit = () => {
  const { formProps, saveButtonProps, query, formLoading } = useForm();

  const productData = query?.data?.data;

  return (
    <Edit saveButtonProps={saveButtonProps} isLoading={formLoading}>
      <Card title="Edit Num" bordered={false} style={{ maxWidth: 600, margin: "auto" }}>
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
            <Input />
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
            <Input />
          </Form.Item>
          <Form.Item label={"Country"} name="country">
            <Select>
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
            <Select>
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
      </Card> 
    </Edit>
  );
};