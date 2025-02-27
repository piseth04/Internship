import {
  DeleteButton,
  EditButton,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { Button, Input, Space, Table } from "antd";
import { FormatDate } from "../../components";
import { BaseRecord } from "@refinedev/core";
import { useNavigate } from "react-router";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { useState } from "react";

export const OrderList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const { tableProps } = useTable({
    resource: "orders",
    metaData: {
      populate: ["customer"],
    },
  });

  // Filter data based on search term
  const filteredData = tableProps.dataSource?.filter((order) => {
    const searchLower = searchTerm.toLowerCase();
    return (
      // Search in Order Code
       order.code.toLowerCase().includes(searchLower)
    );
  });

  const handleCreateClick = () => {
    navigate("/orders/create");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between", // This aligns the h2 to the left and the Space container to the right
          marginBottom: 9,
        }}
      >
        <h2>Orders</h2>
        <Space>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: 200 }}
          />
          <Button 
            type="primary" 
            icon={<PlusOutlined />}
            onClick={handleCreateClick}
            style={{
              boxShadow: "none",
              transition: "box-shadow 0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.49)")} 
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
          >
            New Order
          </Button>
        </Space>
      </div>
      <style>
        {`
          .ant-table-tbody > tr:hover > td {
            // background-color:rgba(135, 227, 255, 0.17) !important;
            box-shadow: 0 4px 6px -1px rgba(151, 238, 240, 0.26), 0 4px 6px -1px rgba(151, 238, 240, 0.25);
            position: relative;
            z-index: 1;
            transition: all 0.2s ease;
          }
          .ant-table-tbody > tr > td {
            transition: all 0.2s ease;
          }
        `}
      </style>
      <Table {...tableProps} dataSource={filteredData}>
        <Table.Column 
          key="code" 
          title="Order Code" 
          dataIndex="code"
        />
        <Table.Column 
          key="dateOrder" 
          title="Order Date" 
          dataIndex="dateOrder"
          align="center"
          render={(text) => FormatDate(text)}
        />
        <Table.Column 
          key="country" 
          title="Country" 
          dataIndex="country"
          align="center"
        />
        <Table.Column 
          key="totalAmount" 
          title="Total Amount" 
          dataIndex="totalAmount"
          align="center"
          render={(value) => `$${value}`}
        />
        <Table.Column 
          key="customer" 
          title="Customer" 
          dataIndex={["customer", "name"]}
          render={(value, record: BaseRecord) => {
            return record?.customer?.name || "No customer assigned";
          }}
          align="center"
        />
        <Table.Column
          key="actions"
          title={<div style={{ textAlign: "center" }}>Actions</div>}
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <div style={{ textAlign: "center" }}>
              <Space>
                <ShowButton recordItemId={record.id} hideText />
                <EditButton recordItemId={record.id} hideText />
                <DeleteButton recordItemId={record.id} hideText />
              </Space>
            </div>
          )}
        />
      </Table>
    </>
  );
};
