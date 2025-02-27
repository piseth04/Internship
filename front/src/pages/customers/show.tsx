import { DateField, Show, TextField } from "@refinedev/antd";
import { useShow } from "@refinedev/core";
import { Card, Row, Col, Typography } from "antd";

const { Text } = Typography;

export const CustomerShow = () => {
  const { query } = useShow({
    resource: "customers", //query from relation
    metaData: {
      populate: ["orders"],
    },
  });
  const { data, isLoading } = query;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Card title="Customer Details" bordered={false}>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Text strong>ID:</Text> <br />
            <Text>{record?.id}</Text>
          </Col>
          <Col xs={24} sm={12}>
            <Text strong>English Name:</Text> <br />
            <Text>{record?.name}</Text>
          </Col>
          <Col xs={24} sm={12}>
            <Text strong>Khmer Name:</Text> <br />
            <Text>{record?.nameKhm}</Text>
          </Col>
          <Col xs={24} sm={12}>
            <Text strong>Code:</Text> <br />
            <Text>{record?.code}</Text>
          </Col>
          <Col xs={24} sm={12}>
            <Text strong>Phone Number:</Text> <br />
            <Text>{record?.phone}</Text>
          </Col>
          <Col xs={24} sm={12}>
            <Text strong>Email:</Text> <br />
            <Text>{record?.email}</Text>
          </Col>
          <Col xs={24} sm={12}>
            <Text strong>Date of Birth:</Text> <br />
            <DateField value={record?.birth} format="DD-MMM-YYYY" />
          </Col>
          <Col xs={24} sm={12}>
            <Text strong>Created By:</Text> <br />
            <Text>{record?.createBy}</Text>
          </Col>
          <Col xs={24} sm={12}>
            <Text strong>Created At:</Text> <br />
            <DateField value={record?.createdAt} format="DD MMM YYYY HH:mm:ss" />
          </Col>
          <Col xs={24} sm={12}>
            <Text strong>Behavior:</Text> <br />
            <Text>{record?.behavior}</Text>
          </Col>
          <Col xs={24} sm={12}>
            <Text strong>Order History:</Text> <br />
            {record?.orders?.map((order: { code: string; dateOrder: string; totalAmount: number }) => (
              <div key={order.code}>
                <DateField value={order.dateOrder} format="DD MMM YYYY" />
                <Text> Code:"{order.code}" </Text> 
                <Text> {`Price=${order.totalAmount}$`} </Text>
                <br />
              </div>
            ))}
          </Col>
          <Col xs={24} sm={12}>
            <Text strong>Note:</Text> <br />
            <Text>{record?.note}</Text>
          </Col>
        </Row>
      </Card>
    </Show>
  );
};
