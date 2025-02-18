import { DateField, MarkdownField, Show, TextField } from "@refinedev/antd";
import { useOne, useShow } from "@refinedev/core";
import { Typography, Row, Col, Card } from "antd";

const { Title } = Typography;

export const ProductShow = () => {
  const { query } = useShow({});
  const { data, isLoading } = query;

  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Card>
        <Title level={3} style={{ textAlign: 'center', marginBottom: '20px' }}>Product Details</Title>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Title level={5}>Product</Title>
            <TextField value={record?.name} />
          </Col>
          <Col span={12}>
            <Title level={5}>Code</Title>
            <TextField value={record?.phone} />
          </Col>
          <Col span={12}>
            <Title level={5}>Country</Title>
            <TextField value={record?.country} />
          </Col>
          <Col span={12}>
            <Title level={5}>Category</Title>
            <TextField value={record?.category} />
          </Col>
        </Row>
      </Card>
    </Show>
  );
};