import { Create, useForm } from "@refinedev/antd";
import { AutoComplete, Col, DatePicker, Form, Input, Row, Select } from "antd";
import React from "react";

export const CustomerCreate = () => {
  const { formProps, saveButtonProps } = useForm({});

      // AutoComplete logic for email
  const [options, setOptions] = React.useState<{ label: string; value: string }[]>([]);
  const handleSearch = (value: string) => {
    setOptions(() => {
      if (!value || value.includes('@')) {
        return [];
      }
      return ['gmail.com'].map((domain) => ({
        label: `${value}@${domain}`,
        value: `${value}@${domain}`,
      }));
    });
  };

  return (
    <Create saveButtonProps={saveButtonProps}>
    <Form {...formProps} layout="vertical">
        {/* Name Section */}
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="English Name"
              name={["name"]}
              rules={[{ required: true, message: "English name is required" }]}
            >
              <Input placeholder="Enter English name" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Khmer Name"
              name={["nameKhm"]}
              rules={[{ required: false, message: "Khmer name is required" }]}
            >
              <Input placeholder="Enter Khmer name" />
            </Form.Item>
          </Col>
        </Row>

        {/* Code & Gender */}
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item label="Code" name={["code"]}>
              <Input placeholder="Enter customer code" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Gender"
              name="gender"
              rules={[{ required: true, message: "Please select gender" }]}
            >
              <Select placeholder="Select Gender">
                <Select.Option value="Male" label="Male">
                  Male
                </Select.Option>
                <Select.Option value="Female" label="Female">
                  Female
                </Select.Option>
                <Select.Option value="Others" label="Others">
                  Others
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Contact Details */}
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[{ required: true, message: "Phone number is required" }]}
            >
              <Input placeholder="Enter phone number" />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item label="Email" name="email">
              <AutoComplete
                style={{ width: "100%" }}
                onSearch={handleSearch}
                placeholder="Enter Email Address"
                options={options}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Additional Information */}
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Date of Birth"
              name="birth"
              rules={[{ required: false, message: "Please select a date of birth" }]}
            >
              {/* You can replace Input with DatePicker if desired */}
              {/* <Input placeholder="YYYY-MM-DD" /> */}
                <DatePicker 
                  format="DD-MM-YYYY" 
                  placeholder="Select date" 
                  style={{ width: "100%" }} 
                />
             
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label="Created By"
              name="createBy"
              rules={[{ required: true, message: "Creator is required" }]}
            >
              <Select placeholder="Select The Creator">
                <Select.Option value="Kak" label="Kak">
                  Kak
                </Select.Option>
                <Select.Option value="Seth" label="Seth">
                  Seth
                </Select.Option>
                <Select.Option value="Nita" label="Nita">
                  Nita
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        {/* Behavior */}
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Form.Item 
              label="Behavior" 
              name="behavior">
              <Select placeholder="Please choose customer behavior">
                <Select.Option value="Normal" label="Normal">
                  Normal
                </Select.Option>
                <Select.Option value="Friendly" label="Friendly">
                  Friendly
                </Select.Option>
                <Select.Option value="Quite" label="Quite">
                  Quite
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item 
              label="Note" 
              name="note">
              <Input.TextArea placeholder="Enter note" rows={4} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Create>
  );
};