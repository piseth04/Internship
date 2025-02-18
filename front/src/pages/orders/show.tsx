import { Show, TextField, DateField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Card, Row, Col, Typography } from "antd";

const { Text } = Typography;

export const OrderShow = () => {
  const { query } = useShow({
    resource: "orders", //query from relation
    metaData: {
      populate: ["customer"],
    },
  });
  const { data, isLoading } = query;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Card title="Order Details" bordered={false}>
        <Row gutter={[16, 16]}>
        <Col xs={24} sm={12}>
            <Text strong>Order Code:</Text>
            <br />
            <TextField value={record?.code} />
          </Col>
          <Col xs={24} sm={12}>
            <Text strong>Order Date:</Text>
            <br />
            <DateField value={record?.dateOrder} format="DD-MMM-YYYY" />
          </Col>
          <Col xs={24} sm={12}>
            <Text strong>Country:</Text>
            <br />
            <TextField value={record?.country} />
          </Col>
          <Col xs={24} sm={12}>
            <Text strong>Total Amount:</Text>
            <br />
            <TextField value={`$ ${record?.totalAmount}`} />
          </Col>  
          <Col xs={24} sm={12}>
            <Text strong>Customer:</Text>
            <br />
            <TextField value={record?.customer?.name} />
          </Col>
        </Row>
      </Card>
    </Show>
  );
};


