import { Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Typography, Card, Space, Row, Col } from "antd";

const { Title } = Typography;

export const EmployerShow = () => {
  const { query } = useShow({});
  const { data, isLoading } = query;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Card title="Employer Details" style={{ width: '100%' }}>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Space direction="vertical">
              <Title level={5}>Full Name</Title>
              <TextField value={record?.name} />
            </Space>
          </Col>
          <Col span={12}>
            <Space direction="vertical">
              <Title level={5}>Phone Number</Title>
              <TextField value={record?.number} />
            </Space>
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col span={12}>
            <Space direction="vertical">
              <Title level={5}>Gender</Title>
              <TextField value={record?.gender} />
            </Space>
          </Col>
          <Col span={12}>
            <Space direction="vertical">
              <Title level={5}>Position</Title>
              <TextField value={record?.position} />
            </Space>
          </Col>
        </Row>
      </Card>
    </Show>
  );
};