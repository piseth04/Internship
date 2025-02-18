import { useTable } from "@refinedev/antd";
import { useList } from "@refinedev/core";
import { Row, Col, Card, Statistic } from "antd";
import { useState, useMemo } from "react";
import { UserOutlined, WomanOutlined } from "@ant-design/icons";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

export const CustomerList1 = () => {
  const [searchTerm] = useState("");

  const { data: allCustomers, isLoading: isCustomersLoading } = useList({
    resource: "customers",
    config: {
      hasPagination: false,
    },
  });

  useTable({
    resource: "customers",
    filters: {
      initial: [],
      permanent: [
        {
          field: "name",
          operator: "contains",
          value: searchTerm,
        },
      ],
    },
  });

  const { data: allEmployers, isLoading: isEmployersLoading } = useList({
    resource: "employers",
    config: {
      hasPagination: false,
    },
  });

  useTable({
    resource: "employers",
    filters: {
      initial: [],
      permanent: [
        {
          field: "name",
          operator: "contains",
          value: searchTerm,
        },
      ],
    },
  });

  const { data: allOrders } = useList({
    resource: "orders",
    config: {
      hasPagination: false,
    },
  });

  const customerGenderStats = useMemo(() => {
    const data = allCustomers?.data || [];
    const total = data.length;
    const femaleCount = data.filter((item) => item.gender === "Female").length;
    return { total, femaleCount };
  }, [allCustomers?.data]);

  const employerGenderStats = useMemo(() => {
    const data = allEmployers?.data || [];
    const total = data.length;
    const femaleCount = data.filter((item) => item.gender === "Female").length;
    return { total, femaleCount };
  }, [allEmployers?.data]);

  const countryData = useMemo(() => {
    const data = allOrders?.data || [];
    const countryCount = data.reduce((acc, order) => {
      const country = order.country;
      if (!acc[country]) {
        acc[country] = 0;
      }
      acc[country]++;
      return acc;
    }, {});
    return Object.keys(countryCount).map((country) => ({
      name: country,
      value: countryCount[country],
    }));
  }, [allOrders?.data]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <>
      <h2>Overall Dashboards</h2>
      
      {/* Combined Customer and Employee Statistics */}
      <Row gutter={[16, 16]} style={{ marginBottom: 20 }}>
        {/* Total Numbers Column */}
        <Col span={5}>
          <Card
            loading={isCustomersLoading}
            style={{  marginBottom: 16 }}  //backgroundColor: "lightgray",
          >
            <Statistic
              title="Customers"
              value={customerGenderStats.total}
              prefix={<UserOutlined />}
            />
          </Card>
          <Card
            loading={isEmployersLoading}
            // style={{ backgroundColor: "lightgray" }}
          >
            <Statistic
              title="Employees"
              value={employerGenderStats.total}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>

        {/* Female Numbers Column */}
        <Col span={5}>
          <Card
            loading={isCustomersLoading}
            style={{ marginBottom: 16 }}  //backgroundColor: "#ffd5e8",
          >
            <Statistic
              title="Female"
              value={customerGenderStats.femaleCount}
              prefix={<WomanOutlined />}
            />
          </Card>
          <Card
            loading={isEmployersLoading}
            // style={{ backgroundColor: "#ffd5e8" }}
          >
            <Statistic
              title="Female"
              value={employerGenderStats.femaleCount}
              prefix={<WomanOutlined />}
            />
          </Card>
        </Col>

        {/* Description Column */}
        <Col span={14}>
          <Card>
            <h4>Economy</h4>
          </Card>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={10}>
          <Card>
            <h3>Countries</h3>
            <PieChart width={400} height={210}>
              <Pie
                data={countryData}
                cx={230}
                cy={70}
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={74}
                fill="#8884d8"
                dataKey="value"
              >
                {countryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Card>
        </Col>
        <Col span={14}>
          <Card>
            <h4>Last Order</h4>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CustomerList1;